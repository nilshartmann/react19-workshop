# Validation with Zod

# Files

- src/types.ts
- src/PostListPage.tsx

# Tasks

- **Define a Zod type for the server response**
- Inside `src/types.ts` describe the `BlogPostSchema` using Zod.
    - The schema should correspond to the TypeScript type `BlogPost` the is already defined there.
- Comment out the TypeScript type and export the Zod-generated TypeScript type:
    - `export type BlogPost = z.infer<typeof BlogPostSchema>;`

- If you have correctly defined and exported the Zod type, the application should still compile without errors,
  since the original type from above and the type derived from Zod should be identical.
  - To test this, you can run "npm run build" in the terminal. There should be no TypeScript compilation errors.

- **Use the schema object to validate the fetched data**
- Additionally, define a Zod type in `src/types.ts` for a *list (array)* of  `BlogPostSchema` objects,
  which corresponds to the response of the HTTP GET request to "http://localhost:7100/posts".
  - This schema should be named `GetBlogPostsResponse`
  - The `GetBlogPostsResponse` schema must also be exported.
- Use `GetBlogPostsResponse` in the `PostListPage` component to validate the fetched data:
    - Remove the type parameters inside `queryFn` from `ky.get<BlogPost[]>(...)`
      (only use `ky.get(...)`)
    - Use the `parse` method on `GetBlogPostsResponse` to validate the fetched data.
        - Attention! The `json()` method from ky returns a Promise!!
            - You must therefore use await to wait for the result (then mark queryFn as an 'async' function!)
            - Or you use `then()` function from the Promise API to retrieve the fetched data and
              validate it in the callback function that you pass to then().
- The application should still not have any compile errors, and loading the data in the
  PostListPage component should work.
- You can simulate invalid data by modifying the URL in the PostListPage component:
  http://localhost:7100/posts?fail
  - The error is in the browser console

# Material

- zod: https://zod.dev/
- basic usage: https://zod.dev/?id=basic-usage
- define objects: https://zod.dev/?id=objects
- parse function: https://zod.dev/?id=parse