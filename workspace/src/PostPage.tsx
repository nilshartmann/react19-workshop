import { Link, useParams } from "react-router-dom";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import ky from "ky";
import { BlogPostSchema, GetBlogPostsResponse } from "./types.ts";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function PostPage() {
  const { postId } = useParams();
  if (!postId) {
    throw new Error("No postId in search params");
  }

  return (
    <div>
      <React.Suspense fallback={<h1>Loading your blog post! Please hold on!</h1>}>
        <SinglePost postId={postId} />
      </React.Suspense>
      <ErrorBoundary fallback={<h1>An error occured</h1>}>
        <React.Suspense fallback={<h1>Loading Comments</h1>}>
          <CommentList postId={"P9999999"} />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}

type SinglePost = {
  postId: string;
};
function SinglePost({ postId }: SinglePost) {
  const result = useSuspenseQuery({
    queryKey: ["posts", postId],
    async queryFn() {
      const response = await ky.get(`http://localhost:7100/posts/${postId}?slow=4800`).json();
      return BlogPostSchema.parse(response);
    }
  });

  const blogPost = result.data;

  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>{blogPost.body}</p>
      <Link to="/">Home</Link>
    </div>
  );
}

function CommentList({ postId }: SinglePost) {
  const result = useSuspenseQuery({
    queryKey: ["comments", postId],
    async queryFn() {
      const response = await ky.get(`http://localhost:7100/posts/${postId}?slow=500`).json();
      return BlogPostSchema.parse(response);
    }
  });

  const blogPost = result.data;

  return (
    <div>
      <p>This should be our comment list in real life</p>
      <h1>{blogPost.title}</h1>
      <p>{blogPost.body}</p>
      <Link to="/">Home</Link>
    </div>
  );
}
