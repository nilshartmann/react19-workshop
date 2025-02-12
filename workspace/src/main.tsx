import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./create-query-client.ts";
import PostPage from "./PostPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { element: <App />, index: true },
      { path: "posts/:postId", element: <PostPage /> }
    ]
  }
]);

console.log("ROUTER", router);
createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
