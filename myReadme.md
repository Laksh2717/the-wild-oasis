# More about styled components : 

- now we will move reusable components in ui folder, such as input and button, as we will use them multiple times. 

- also we will not move H1 and styledApp as they are only for that App component and they are not reusable. 

- now we will implement hover state in button, and it is very similar to scss or to sass :

- so for that we will use "&" to select the button element itself and then on there we can as usually use the hover pseudo-class, and so then we can change the hover styles. 


# Accepting props and css function :

- first of all lets extract that H1 to a new file and new component Heading. 

- now you know that we are using template literals to define css, so we can also use some expressions inside it. also if there is a lot of css, then what we usually do is to define css in a separate variable like here it is test. 

- now you can just define css inside template literals without using css function, but if you do that then it will not show syntax of css highliting, also you will not be able to use some expressions inside it without css, so use css function.

- also we can pass any props, so lets have 3 heading elements in our App, with our own prop "type". so to receive props in Heading styled component, just use template literal and pass a callback function with receives props. so now you can apply styles conditionally according to prop value.

- so we have 3 headings with prop type h1, h2 and h3. but now there is a problem, if you inspect all these 3 headings in browser, then you will find all these are h1 html element only, as we applied styled in h1 html element (styled.h1). so this can create SEO and accessibility issues. so to solve this we pass "as" prop. this "as" prop is provided to use by styled components. ("type" prop is our custom prop not provided by styled components)

- so using "as" prop, we can convert anything to anything. so here we have styles on h1 html element, but using as h2 or h3 in props, it will be converted to h2 or h3 html element. if you use as button in a paragraph, so it will be converted to button. 

- so always make a habit to inspect your code in browser, so that you can know which html element is there for your code. 

