# Setting up routes for our project :

- npm i react-router-dom.

- clear App component and lets start setting our routes. this time we will not be using data loading feature of react router, so we will use traditional way of declaring routes.

- also this time we will have dashboard component only in the root route also. so whenever we have this type of thing, we can apply root route in 2 ways :

1. `<Route index element={<Navigate replace to="dashboard" />} />`
2. `<Route index element={<Dashboard />} />`

# Case 1: Using <Navigate replace /> (The Correct Method)

- Action: It replaces the current entry in the browser's history.

- History Stack Example: [Previous Site, /] becomes [Previous Site, /dashboard]. The / entry is removed.

- Back Button Behavior: When the user clicks "Back" from /dashboard, they go to the Previous Site.

- Result: A clean, predictable user experience. The back button works as expected, and the user is not trapped.

# Case 2: Using <Navigate /> without replace i.e. just passing component (Incorrect Method)

- Action: It pushes a new entry onto the browser's history stack, keeping the old one.

- History Stack Example: [Previous Site, /] becomes [Previous Site, /, /dashboard].

- Back Button Behavior: When the user clicks "Back" from /dashboard, they are sent to /.

- Result: The app immediately redirects from / back to /dashboard, creating a redirect loop. The user gets stuck and cannot easily leave the site.