# Building App Layout :

- we want our layout to cover all paths except login and page not found. so make changes in routes accordingly.

- in our layout, we will have a sidebar, a header and the content of other pages.

- so we first have the below code in app layout :

  `<div>`
    `<Header />`
    `<Sidebar />`
    `<main>`
      `<Outlet />`
    `</main>`
   `</div>`

- we wrote Outlet inside main and not directly Outlet without main because of 2 reasons : 

1. consistency in styling. if we want all the pages to get some styles in common, we will just directly apply those styles to this main. 

2. join content from pages. you can see in account page, we are returning a fragment, so that complete fragment will be joined in this main html element. so sometimes from pages we want to return multiple components but want them to be inside one element only, so directly return fragment and write outlet inside some html element.

- then we just styled main to Main, div to StyledAppLayout, header and sidebar component. 

# Building sidebar and main navigation :

- so include Logo and MainNav in sidebar. Now there was an error in displaying the image of logo, so to correct it, you can do 2 things : either place all the images in public folder so that the starter code works properly, or just import imagesrc like the one which is in the code.

- now about mainNav, we will use react router NavLink for navigations, so now the problem is how can we style this NavLink in styled components as it is coming from third party library. 

- so the solution for it is instead of using styles dot html element, we can pass in basically some other component, so here we pass in NavLink.

- now we want to use some icons, so "npm i react-icons". 

- so go to react icons docs, for selection of icons, and then just import them to your code and use them as a component as u can see in code. 