import { z } from "zod";

// export type BlogPost = {
//   id: string;
//   title: string;
//   body: string;
//   date: string;
//   tags: string[];
//   likes?: number;
// };

// const IdSchema = z.string().min(6)

export const BlogPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
  date: z.string(),
  tags: z.string().array(),
  likes: z.number().optional()
})

export const GetBlogPostsResponse = BlogPostSchema.array();

export type BlogPost = z.infer<typeof BlogPostSchema>

// function isValidBlogPost(something: any) {
//   if (typeof something === "object") {
//     if ("title" in something) {
//       return true;
//     }
//   }
// }
