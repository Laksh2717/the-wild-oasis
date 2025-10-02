# Introduction to styled components :

- Styled Components essentially allow us to write CSS right inside our JavaScript component files.

- npm i styled-components.

- let's say that we want to style an H1 element. And so we just write "styled.h1". And then here we write a template literal which is basically the string in which we are going to write our styles. And this is just a nice trick that leverages the ES6 feature called Tagged Template Literals.

- these styled components are indeed reacct components, that's why they need to start with uppercase letters.

- so bts, styled components library gives random class names to that element and apply those styles with that classname. 

- And so what's great about this is that that this CSS that we just wrote is of course only scoped to that exact component, which eliminates all the problems of global CSS that we talked about earlier such as name collisions between class names etc.

- we can style basic html elements like button, input etc. also we can style react components like App. for that we have to style that div. 

- now another great thing about these styled components is that we can pass event handlers and also props in the components, like onClick in button and type or placeholder in input.


# Using Global Styles :

- create a file for global files and use createGlobalStyles function for it. inside that template literal write all the global style you want.

- now to use these styles, let say want to use it in App component, so always use your global styles component as a sibling to the component you want to apply yht global styles, and this global styles component accept sno children so it is a self closing tag. 

- css variables used in styles are called design tokens. 