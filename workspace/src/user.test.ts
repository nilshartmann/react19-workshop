import { expect, test } from "vitest";
import { z } from "zod";
import { BlogPost } from "./types";

// type User = {
//   id: string;
//   name: string;
//   age: number;
//   hobbies: string[];
// };

const UserSchema = z.object({
  id: z.string().length(5),
  name: z.string().email(),
  age: z.number().min(0),
  hobbies: z.string().array()
});

type User = z.infer<typeof UserSchema>

// zod  (https://zod.dev)

function loadUser(): unknown {
  return { id: "U1", name: "Klaus", age: 32, hobbies: ["JavaScript"] };
}

function showUser(u: User) {
  console.log("User", u.name);
}

function showBlogpost(p: BlogPost) {
  // ...
}

test("check that TS type from zod works", () => {
  const serverResponse = loadUser();
  // showUser(serverResponse);

  const user = UserSchema.parse(serverResponse);

  const parseResult = UserSchema.safeParse(user);
  // if (parseResult.success) {
  //   parseResult.data;

  // } else {
  //   parseResult.error
  // }


  console.log("USER", user.id);
  showUser(user);
  // showBlogpost(user);
});

test("check that zod works", () => {
  const responseFromApiCall = { id: "U1", name: "Klaus", age: 32, hobbies: ["JavaScript"] };

  const validatedUser = UserSchema.parse(responseFromApiCall);
  expect(validatedUser).toEqual(responseFromApiCall);
  // ...

  // UserSchema.parse({ id: "U1", name: "Klaus", age: 32, hobbies: [123] });
});
