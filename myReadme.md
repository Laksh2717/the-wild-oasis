# About Project :

- we have to make a project for a hotel. It is an internal used app for a hotel, to have data about occupied cabins, bookings, check in and out etc. This app will be used by hotel employees only, it is not open for public to book their rooms. 

# Project Setup :

- create project, install dependencies, configure eslint and copy starter files. 

- this time we have some more folders in src : 

1. data = it is for data used in the project.

2. features = contains the project 6 main features.

3. hooks = it is for truly reusable custom hooks, so custom hooks which we need in multiple features.

4. services = contains api interaction code.

5. styles = for things regarding css.

6. ui = it is for components that do not belong to any of the features and that might be reusable in different features. so things like inputs, buttons, forms, tables etc.

7. utils = some helpful functions.

8. pages = since this project will be a lot bigger it is actually going to be helpful to have one folder which contains all the pages. So basically, here, we will have one component file per route, and what's important about these, so one convention that we create for ourselves is that each of these pages will not have any side effects, but instead, they will delegate all their functionality to the components that are associated with the feature. So basically, we just need to create these pages once, and then completely forget about them, but of course, more about that once we actually start writing the code. 