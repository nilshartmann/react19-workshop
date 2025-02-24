# Create a form with react-hook-form

# Files

- src/App.tsx
- src/PostEditorZod.tsx (see below)

# Preparation

1. Please install `react-hook-form` and `@hookform/resolvers` packages in your workspace:
    - ```bash
      # in directory "workspace"
      npm install react-hook-form @hookform/resolvers
      ```
2. Please create an empty `PostEditorZod.tsx` file in `workspace/src` and copy+paste the initial content (see below) into it
3. In `App.tsx` please render the `PostEditorZod` component (in addition to the existing components or only that component)
    - ```tsx
      // App.tsx
      import PostEditorZod from "./PostEditorZod.tsx";
      
      function App() {
         return <>
           <PostEditorZod />
           {/* PostEditor and PostListPage, comment out if you liek */ }
           {/*<PostEditorPage />*/}
           {/*<PostListPage />*/}
         </>;
      }
      ```

# Tasks

- Convert the `PostEditorZod` component to a react-hook-form-based form
- Create a zod schema (`PostEditorFormSchema`) for an object that should contain the content of the input fields:
  - `title` a string with a minimum length of 5 characters
  - `body` a string with a minimum length of 1 character
- Infer a TypeScript type (`IPostEditorFormSchema`) from your zod schema
  - `type IPostEditorFormSchema = z.infer<typeof PostEditorFormSchema>`
- Create the `form` object with `useForm`
  - you need to set your `IPostEditorFormSchema` type as type argument for `useForm`
  - as `resolver` you have to set `zodResolver(PostEditorFormSchema)`
  - set `defaultValues` for `title` and `body`
- `register` both input fields with your form
  - You can remove the `value` and `onChange` properties
  - Make sure, where there is a field error that the field error is visible under the appropriate input field
- Set the `onSave` function for the `onSubmit` property on the `form` element
  - You need to add one argument to `onSave`: `data` with your form data
  - Make sure, when you click on the "Save" button, the data from your form is logged on the console
- **Optional**: Enhance your form, for example:
  - make sure the "Save" button is disabled when there is an error in your form
  - show an error messages when a user leaves a field (or even when a user changes a field)
  - implement the "Clear" button
  - add the `PostPreview` component

# Reference

- React Hook Form: https://react-hook-form.com/
  - `useForm`: https://react-hook-form.com/docs/useform
    - Configuration Options:
      - `resolver`: https://react-hook-form.com/docs/useform#resolver 
      - `mode`: https://react-hook-form.com/docs/useform#mode
      - `defaultValues`: https://react-hook-form.com/docs/useform#defaultValues
    - Return values:
      - `register` function: https://react-hook-form.com/docs/useform/register
      - `formState`: https://react-hook-form.com/docs/useform/formstate
      - `watch` function: https://react-hook-form.com/docs/useform/watch
      - `reset` function: https://react-hook-form.com/docs/useform/reset
       
# `PostEditorZod` component (initial)

Use this as starting point:

```tsx
import React from "react";
import { z } from "zod";
import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


export default function PostEditorZod() {
  // todo: remove state and replace with react-hook-form
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const onClear = () => {
    console.log("todo: implement onClear using react-hook-form");
  };

  const onSave = () => {
    console.log("onSave", { title, body });
  };

  return (
    <form>
      <h1>Create Post</h1>

      <label>
        Title
        <input value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      {title ? <p>Your current Input: {title}</p> : "Please enter a title"}
      <label>
        Body
        <input value={body} onChange={e => setBody(e.target.value)} />
      </label>

      <button type="button" onClick={onClear}>
        Clear
      </button>
      <button type="button" onClick={onSave}>
        Save
      </button>
    </form>
  );
}



```