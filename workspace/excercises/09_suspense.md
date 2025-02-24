# Data loading with suspense

# Files

- src/PostPage.tsx
- (src/PostList.tsx)

# Preparation

- We will use the React Router to show a single blog post on its own route (`/posts/POST_ID`)
- The router is already configured, but you need to add a link from the posts in the `PostList` to the `PostPage`
  - Please adjust the existing `PostList` component, so that is renders a Link for the title of a blog post:
  - ```
    <Link to={`/posts/${p.id}`}>
      <h1>{p.title}</h1>
    </Link>
    ```
  - When you now click on a blog title, a new, (almost) empty page should open: the `PostPage`

# Tasks

- Implement the `PostView`:
  - Inside `src/PostPage` create a new Component `PostView` that loads a single blog post by its `id` from the server
  - The `PostView` component needs a property (`postId`)
  - You can read a single post from the backend using this URL: `http://localhost:7100/posts/POST_ID`
  - Use a suspense query to read the data (with `ky` as in `PostListPage`)
    - Remember to set meaningful `queryKey`
  - You can parse and validate the returned data using your `BlogPostScheme` (as in `PostListPage`, but here you don't need the array)
  - Show the blog post that you have read from the server (you could copy the code from `PostList` for that purspose into `PostView`)
- Complete `PostPage`:
  - In `PostPage` render your `PostView` component
  - Wrap the `PostView` component with a suspense boundary and show a fallback component while loading the data
    - You can simulate a slow response by adding a `?slow=DELAY_IN_MS` search param to the server request, for example:
        `http://localhost:7100/posts/POST_ID?slow=4000`
- When your `PostPage` works:
  - add a Link to the root page somewhere on the `PostPage`: `<Link to="/">Home</Link>`
  - Open the Network Tab in your browser
  - Open a single blog post
  - Navigate back to the root page using your link
  - Open the same single blog post again. What is (not) happening in the network?

# Material

* React
  * Suspense component: https://react.dev/reference/react/Suspense
* TanStack Query
  * Suspense support: https://tanstack.com/query/latest/docs/framework/react/guides/suspense
  * useSuspenseQuery: https://tanstack.com/query/latest/docs/framework/react/reference/useSuspenseQuery#usesuspensequery
