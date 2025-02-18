import { useQuery } from "@tanstack/react-query";
import ky from "ky";
import { BlogPost } from "./types.ts";
import PostList from "./PostList.tsx";
import { useState } from "react";

export default function PostListPage() {
  // todo: implement
  // React Query + TanStack Query are the same!!!!

  const [sorting, setSorting] = useState(false);

  console.log("SORTING", sorting);

  const result = useQuery({
    // filterByTitle: "abc"
    queryKey: ["posts", sorting],
    async queryFn() {
      // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
      const searchParams = new URLSearchParams();
      if (sorting) {
        searchParams.set("orderBy", "likes");
      }

      return ky
        .get<BlogPost[]>(`http://localhost:7100/posts?${searchParams.toString()}`, {
          // headers: {
          //   "content-type": "application/json"
          // }
        })
        .json();
    }
  });

  if (result.isPending) {
    return <h1>Data is loading...</h1>;
  }

  if (result.isError) {
    return <h1>ERROR!</h1>;
  }

  return (
    <div>
      <h1>Your Blogposts !</h1>

      <button onClick={() => setSorting(!sorting)}>Toggle Sort. Sorting: {String(sorting)}</button>

      <PostList posts={result.data} />
    </div>
  );
}
