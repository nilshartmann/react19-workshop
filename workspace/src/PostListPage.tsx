import { useQuery } from "@tanstack/react-query";
import ky from "ky";
import { BlogPost } from "./types.ts";
import PostList from "./PostList.tsx";

export default function PostListPage() {
  // todo: implement
  // React Query + TanStack Query are the same!!!!

  const result = useQuery({
    queryKey: ["posts"],
    async queryFn() {
      return ky.get<BlogPost[]>("http://localhost:7100/posts?slow=5000").json();
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
      <h1>Your Blogposts</h1>

      <PostList posts={result.data} />
    </div>
  );
}
