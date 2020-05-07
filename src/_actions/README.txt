The _actions folder contains all the Redux action creators for the project,
 I've organised the action creators into different files by action type (e.g. user actions, alert actions etc).

 Redux Alert Action Creators
Path: /src/_actions/alert.actions.js

Contains Redux action creators for actions related to alerts / toaster notifications in the application. For example to display a success alert message with the text 'Registration Successful' you can call dispatch(alertActions.success('Registration successful'));.

I've wrapped the action methods in an alertActions object at the top of the file so it's easy to see all available actions at a glance and simplifies importing them into other files. The implementation details for each action creator are placed in the below functions.

Redux User Action Creators
Path: /src/_actions/user.actions.js

Contains Redux action creators for actions related to users. Public action creators are exposed via the userActions object at the top of the file and function implementations are located below, I like this structure because you can quickly see all of the actions that are available.

Most of the actions for users are async actions that are made up of multiple sub actions, this is because they have to make an http request and wait for the response before completing. Async actions typically dispatch a request action before performing an async task (e.g. an http request), and then dispatch a success or error action based on the result of the async task.