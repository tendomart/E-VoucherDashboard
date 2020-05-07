Redux Reducers Folder
Path: /src/_reducers

The _reducers folder contains all the Redux reducers for the project, each reducer updates a different part of the application state in response to dispatched redux actions.

If you're not familiar with Redux reducers you can learn about them at https://redux.js.org/basics/reducers.

Redux Alert Reducer
Path: /src/_reducers/alert.reducer.js

The redux alert reducer manages the application state for alerts / toaster notifications, it updates state when an alert action is dispatched from anywhere in the application, for example when an alertConstants.SUCCESS action is dispatched, the reducer updates the alert state to an object with type: 'alert-success' and message: action.message.

Redux Authentication Reducer
Path: /src/_reducers/authentication.reducer.js

The redux authentication reducer manages the state related to login (and logout) actions, on successful login the current user object and a loggedIn flag are stored in the authentication section of the application state. On logout or login failure the authentication state is set to an empty object, and during login (between login request and success/failure) the authentication state has a loggingIn flag set to true and a user object with the details of the user that is attempting to login.

Redux Users Reducer
Path: /src/_reducers/users.reducer.js

The redux users reducer manages the users section of the application state which is used by the HomePage to display a list of users and enable deleting of users.