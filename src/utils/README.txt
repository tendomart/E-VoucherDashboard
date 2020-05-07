Create public and private routes

We divided routes in three parts.

    Normal routes – Which we can use to access routes with or without user login.
    Public routes – Which we can use to access the routes without login token only. So if user is already logged-in then we will redirect it to the dashboard page.
    Private routes – Which we can use to access the routes with login token only. So if user is not logged-in then we will redirect back it to the login page.

