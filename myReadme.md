# start coding with react query.

- So first we create a place where the data basically lives and then second, we provide that to the application. And in the case of React Query, we set up the cache and the Query client using "new QueryClient."

- So we can specify here the default options. And then usually what we want is to specify options for our queries. And so here, one that we can experiment with is called "staleTime". And "staleTime" is basically the amount of time that the data in the cache will stay fresh so that it will stay valid until it is refetched again.

- And so now it's time to provide this to the application. And we want to provide our Query data to the entire application tree. And so we make this basically a parent component of our entire tree. So a similar idea of having the data in one place and then providing it to the whole component tree.

- queryKey is going to uniquely identify the data that we will query by that hook and it needs to be an array. if we now use that same key in another page, then the same data will be read from the cache now. and also in the react query devtools, you will see data with this name only.

- queryfn is the function which is responsible for quering. the function that we specify here needs to return a promise. so we will use getCabins func, which returns a promise and which returns data whe resolved.

- now u can print the usequery hook response and u will see a bunch of things there, like data, error, isLoading, status. 

- now in react query devtools, you can see fresh and stale data, our data will stay frsh for the staletime that we specify in usequery. so once a data gets stale, and you then go to different tab or window or some other app, and then come back it will automatically refetch the data and show you the current data, so if a user changes some data, it will be updated for all the users. that's why we keep staletime to 0, so that it automatically gets staled so that we can get updated data as we refresh or come to the page from some other page. bcoz if it is fresh at that time, and u change some data, and then come to that page from some other page, then it will not be updated, it will only re fetch and update data if it is stale.

- we use usemutation hook to mutate remote state i.e. data on server

- usemutation provides us a callback fn which we can attach to onclick prop. then that mutate fn will call the mutationfn defined in usemutation. you will see that after writing this code, if u delete (also give delete access in RLS policies) some cabin, then it will not remove that cabin from ui, you have to refresh to see changes. it is due to cache. so we want to remove cache as soon as we delete a cabin and also re fetch data i.e. invalidate current data. 

- now to invalidate query data, we want queryclient, so to get that queryclient we will use usequeryclient hook. 

- next we will use toasts to display nice toasts.