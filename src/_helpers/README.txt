React + Redux Helpers Folder
Path: /src/_helpers

The helpers folder contains all the bits and pieces that don't fit into other folders but don't justify having a folder of their own.

React Auth Header
Path: /src/_helpers/auth-header.js

Auth header is a helper function that returns an HTTP Authorization header containing the Json Web Token (JWT) of the currently logged in user from local storage. If the user isn't logged in an empty object is returned.

The auth header is used to make authenticated HTTP requests to the server api using JWT authentication.

React Fake / Mock Backend
Path: /src/_helpers/fake-backend.js

The fake backend is used for running the Application without a server api (backend-less). It monkey patches the fetch() function to intercept certain api requests and mimic the behaviour of a real api by managing data in browser local storage. Any requests that aren't intercepted get passed through to the real fetch() function.