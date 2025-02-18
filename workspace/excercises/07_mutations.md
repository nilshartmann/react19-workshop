# Use TanStack Query to save a new blog post
- Use `useMutation` from TanStack Query to save the new blog post on the server.

# Files

- src/PostEditor.tsx

# Tasks

- In the `PostEditor` we already have the `Save` button that currently logs the post data onto the console.
- It should now save the data on the server.
- Use `useMutation` to create a mutation for saving the blog post.
    - As options, you only need to specify `mutationFn`:
        - This should make a `POST` request to `http://localhost:7100/posts`.
        - You can use the `post` method from `ky` for this.
        - As a `json` body, pass an object consisting of `title`, `body`, and `tags` (i.e., the content of our form).
        - You don't care about the result of the POST call

- Execute the mutation using `mutate` when the Save button is clicked.
- If an error occurs while saving (`error`), display a general error message.
    - (You can simulate an error by saving a title that is shorter than five characters.)
- While the mutation is running, disable the Save button.
    - To simulate a slow server request, use the URL `http://localhost:7100/posts?slow`.
- If saving is successful (`success`), display a notification for the user.
- If saving is successful, ensure that the post list is automatically updated:
    - Use `useQueryClient` to get the global TanStack Query `QueryClient` object.
    - In the mutation configuration, add the `onSuccess` method.
        - In this method, use `queryClient.invalidateQueries` to invalidate the cache.
        - Pass an object with the `queryKey` entry that contains the query key from your query in `PostListPage` to `invalidateQueries`.

# Material

- Mutations: https://tanstack.com/query/latest/docs/framework/react/guides/mutations
- invalidateQueries: https://tanstack.com/query/latest/docs/framework/react/guides/query-invalidation#query-matching-with-invalidatequeries
- useMutation: https://tanstack.com/query/latest/docs/framework/react/reference/useMutation#usemutation
- useQueryClient: https://tanstack.com/query/latest/docs/framework/react/reference/useQueryClient#usequeryclient
