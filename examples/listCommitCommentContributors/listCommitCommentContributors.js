require("dotenv").config();
const fs = require('fs');
const { Octokit } = require("@octokit/rest");
const trueContributors = require("../../trueContributors-mixin");

Object.assign(Octokit.prototype, trueContributors);
const octokit = new Octokit({ auth: process.env.token });

(async ()=> {
    const parameters = {
        owner: "hackforla",
        repo: "website"
    };
    
    // Octokit's contributors endpoint that accounts for commits
    let octokitContributors = await octokit.paginate(octokit.repos.listContributors, parameters);
    console.log(`octokitContributors returned ${octokitContributors.length} contributors`);
    fs.writeFileSync(`${__dirname}/listContributors.json`, JSON.stringify(octokitContributors, null, 2));

    // trueContributors endpoint that accounts for commits and issue comments
    let trueContributors = await octokit.listCommitCommentContributors(parameters);
    console.log(`listCommitCommentContributors returned ${trueContributors.length} contributors`);
    fs.writeFileSync(`${__dirname}/listCommitCommentContributors.json`, JSON.stringify(trueContributors, null, 2));

    // Fetching commit and comment contributors since a given date
    let since = "2020-09-11T11:01:06.000Z";
    let trueContributorsSince = await octokit.listCommitCommentContributors({ ...parameters, since });
    console.log(`listCommitCommentContributors since ${since} returned ${trueContributorsSince.length} contributors`);
    fs.writeFileSync(`${__dirname}/listCommitCommentContributorsSince.json`, JSON.stringify(trueContributorsSince, null, 2));
    
    // trueContributors endpoint that returns an empty list for empty repos
    let trueContributorsEmpty = await octokit.listCommitCommentContributors({ owner: "civictechindex", repo: "database" });
    console.log(`listCommitCommentContributors to empty repo returned ${trueContributorsEmpty.length} contributors`);
    fs.writeFileSync(`${__dirname}/listCommitCommentContributorsEmpty.json`, JSON.stringify(trueContributorsEmpty, null, 2));
    
})();