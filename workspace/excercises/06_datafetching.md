# DataFetching using TanStack Query

# Files

- src/PostListPage.tsx

# PREPARATION: Start the Backend

- For these exercises, the "backend" must be running. The backend process provides a
simple REST API for reading and writing blog posts.
- First, start the backend:
    - Navigate to the 'backend' directory
    - Run "npm install" there (if not done yet)
    - Run "npm start" there
    - The backend should now be running on port 7100
    - You can test the backend by opening "http://localhost:7100/posts" in the browser
      (or using curl or wget in the terminal).
      - This should return a (JSON) list of blog post objects.


# Tasks

- Implement the `PostListPage` component and load data from the backend!
  - The component is already included in the `App` component but returns `null` yet
  - (so it's not currently visible)
- Use 'useQuery' from TanStack Query to fetch the blog posts from the server
- You must specify a `queryKey`. This could be `["posts"]`, for example.
   - In a real-world application, the query key might contain additional parameters,
     such as a sorting order.
- You must implement the `queryFn`.
   - You can use the ky library to make the request (https://github.com/sindresorhus/ky?tab=readme-ov-file#usage)
   - The request must be a GET request to the URL http://localhost:7100/posts
   - The TypeScript type for the response from the server is `BlogPost[]`.
       - You can import this type from `src/types.ts`.
   - Read the result with ky using `.json()` and use it as the return value for `queryFn`.

- Handle the result of `useQuery`:
   1. If the data is still pending, display a loading message. You can use the
      `LoadingIndicator` component if you like.
      - You can simulate a slow request, by appending "?slow" to the URL, so that you can see the pending state:
        http://localhost:7100/posts?slow
   2. If there was an error, display a simple error message.
   3. If the query was successful, render the posts with the existing `PostList` component (`src/PostList.tsx`)

### Optional, only if there is time left:
  - Implement a button to sort the list:
     - When the button is clicked, the server should sort the list by likes.
     - To do this, add the search parameter "orderBy=likes": http://localhost:7100/posts?orderBy=likes
     - If sorting by likes is not selected, use the default sorting without a search parameter: http://localhost:7100/posts
     - The button should allow toggling between the two sorting options ("Default", "Likes").
     - Attention! You also need to update the queryKey.



# Material

- ky library for data fetching: https://github.com/sindresorhus/ky
- Queries with TanStack Query: https://tanstack.com/query/latest/docs/framework/react/guides/queries
- Query Function: https://tanstack.com/query/latest/docs/framework/react/guides/query-functions
- Query Key: https://tanstack.com/query/latest/docs/framework/react/guides/query-keys
- useQuery: https://tanstack.com/query/latest/docs/framework/react/reference/useQuery