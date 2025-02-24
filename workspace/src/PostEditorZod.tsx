import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// yup
//

const PostEditorFormSchema = z.object({
  title: z.string().min(5, "Please enter a valid title with 5 or more characters"),
  body: z.string().min(1)
});

type IPostEditorFormSchema = z.infer<typeof PostEditorFormSchema>;

export default function PostEditorZod() {
  // todo: remove state and replace with react-hook-form

  const form = useForm<IPostEditorFormSchema>({
    resolver: zodResolver(PostEditorFormSchema),
    defaultValues: {
      title: "",
      body: ""
    },
    mode: "onBlur"
  });

  // const [title, setTitle] = React.useState("");
  // const [body, setBody] = React.useState("");

  const onClear = () => {
    console.log("todo: implement onClear using react-hook-form");
  };

  const onSave = (data: IPostEditorFormSchema) => {
    console.log("DATA FROM FORM", data);
    // console.log("onSave", { title, body });
  };

  form.watch("title");

  const currentTitleValue = form.getValues("title");
  console.log("Rendering PostEditor", currentTitleValue);

  return (
    <form onSubmit={form.handleSubmit(onSave)}>
      <h1>Create Post</h1>

      <label>
        Title
        <input {...form.register("title")} />
      </label>
      {form.formState.dirtyFields.title && form.formState.errors.title?.message}
      <p>You current title: {currentTitleValue}</p>
      {currentTitleValue}
      {/*{title ? <p>Your current Input: {title}</p> : "Please enter a title"}*/}
      <label>
        Body
        <input {...form.register("body")} />
      </label>
      {form.formState.errors.body?.message}

      <button type="button" onClick={() => form.reset()}>
        Clear
      </button>
      <button type="submit" disabled={!form.formState.isValid}>
        Save
      </button>
    </form>
  );
}
