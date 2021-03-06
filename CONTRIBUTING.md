# How to contribute
For any contribution you had in mind, please open a detailed issue on what you are contributing and why. This way, there can be room to have a productive discussion before any code is written. It can be discussed if the contribution is a good fit for this project, fine tune contribution goals, and more. 

Feel free to [slack me individualy](https://app.slack.com/team/UNAQGKW91) or drop into the [100 Automations slack](https://hackforla.slack.com/archives/C018S5TCQE7) to reach out to me to ask any questions.

## Testing

As of right now, there is no concrete testing practices. The tests that are currently implemented are done using [jest](https://jestjs.io/). If you would like to contribute, it would be best to use jest so that the project isn't dependent on multiple testing libraries.

## Submitting changes

Please fork this repository and create Pull Request to this project from that fork ([How to fork a repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)). In that pull request, please include thorough tests for whatever feature you are adding. If you would just like to submit more or better tests for currently existing features, that would also be much appreciated and helpful. 

Please only add one feature per pull request and have clear commit messages in them.

## Coding conventions

Please add code in a similar style/fashion to how code is currently written.

Because the goal of this project is to seamlessly extend [octokit/rest.js](https://octokit.github.io/rest.js/v18/), additional features/endpoints should also work in a similar style to how octokit/rest.js works (passing parameters to endpoints as a JSON object, camel casing and verb usage for endpoints, etc.). See the [octokit/rest.js](https://octokit.github.io/rest.js/v18/) docs for to get the hang of how they do things.

Thank you for being interested in contributing.
