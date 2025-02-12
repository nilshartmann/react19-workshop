import { useParams } from "react-router-dom";

export default function PostPage() {
  const { postId } = useParams();
  if (!postId) {
    throw new Error("No postId in search params");
  }

  return <h1>todo: load post with id {postId}</h1>;
}
