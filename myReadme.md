isLoading is now called isPending

cacheTime option is now called gcTime

# Intro to react query. 

- npm i @tanstack/react-query
- npm i @tanstack/react-query-devtools

- React Query is essentially a very powerful library for managing remote state. So, state that is basically stored on a server and that we need to load into our application.

- So, the most fundamental thing about React Query is that all remote state is cached, which means that the fetched data will be stored in order to be reused in different points of the application.

- So, for example, if we fetch data about cabins in Component A, React Query will fetch the data from the API. It will then store the received data in the cache, so that Component A can use it. And then if at a later point, Component B also wants to fetch the cabin data, then no additional API request will be necessary. Instead, React Query will simply provide this same data to Component B from the cache.

- React Query also automatically gives us all loading and error states, so that we can actually focus on what matters. 

- React Query also automatically refetches the data in certain situations. For example, after a certain timeout or after we leave the browser window and then come back to it. And this is super important-- in order to make sure that a remote state always stays in sync with the application. For example, if some other user of the app changes the remote state at some point, for example, by updating a cabin, then the application running on all other computers will have this cabin state out of sync with the newly updated state. And so, React Query can help with this as well. So, keeping everything in sync by automatically refetching data. 

- Now, besides refetching, we can also prefetch data, which basically means to fetch data that we know will become necessary later, but before it is actually displayed on the screen. And a classic example of this is pagination, where with prefetching, we can fetch data not only for the current page, but also for the next page. This way, when the user then moves to the next page, the data will always already be there in the cache. So, without needing to display an annoying loading spinner. It's also very easy to mutate. So, to update remote state using the many tools that are built into React Query. 

- Now, besides all this, there are many other features that we could talk about here, but one that I find really useful is support for when the user becomes offline. So, in this situation, since the data is already cached as the user moves around in the app while being offline, Components A and B can still be displayed using this cached cabin data. Okay. 

- Now, remember that as we learned earlier, we need a library with all these features because remote state is fundamentally different from UI state. It's asynchronous and usually shared by many users of the app, which makes it so that applications running in different browsers can very easily get out of sync with the remote data that is stored on a server. So, remote state has many special needs, and so that's the reason why we use something like React Query. Now, there are actually other libraries that do many of the things that React Query does. For example, SWR or Redux Toolkit Query.

