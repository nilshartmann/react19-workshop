import React, { useCallback, useState } from "react";
import TagChooser from "./TagChooser.tsx";
import PostPreview from "./PostPreview.tsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ky, { HTTPError } from "ky";

/*
- todo:
  - input field
  - state
  - clear button

 */

// NAMED export
export function postEditorLogger(log: string) {
  console.log(log);
}

const HELLO_WORLD = "JO!";
const AVAILABLE_TAGS = ["JavaScript", "TypeScript", "React"];
// const thisWillNotWork = useState("Hello World");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types
class ResponseError extends Error {
  errorDetails: any;

  constructor(errorBody: any) {
    super("Server Request failed");

    this.name = "ResponseError";
    this.errorDetails = errorBody;
  }
}

function isSaveError(err: any): err is ResponseError {
  return err instanceof ResponseError;
}

//ECMAScript Module System (ESM)
// DEFAULT export

// "Hello World" | setTitle
// "AB" | setBody
export default function PostEditor() {
  // Model in React: State

  // function myUseState() {
  //   return ["helloWorld", () => {} ];
  // }

  // const titleState = useState("Hello World");
  // const titel = titleState[0];
  // const setTitel = titleState[1];

  // Hook function is a function starting with "use"
  //  Rules of hooks

  //    v---------------v--- Destructuring Operator in JS  (Python/C++: unpacking)
  const [title, setTitle] = useState("Hello World"); // 1. "Hello World" setTitle
  const [body, setBody] = useState(""); // "A"  "Hello World"

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // function sayJs() {}

  // const x = {
  //   firstname: "Klaus",
  //   sayHello: function() { /* ... */ },
  //   sayGoodbye: () => { /* ... */ },
  //   sayReact() { }
  // }

  const queryClient = useQueryClient();

  const savePostMutation = useMutation({
    // can be used to identify running mutation in another component
    // mutationKey: ["..."]
    // mutationFn: async function(){},
    async mutationFn() {
      // ky, axios or fetch

      try {
        return await ky
          .post(`http://localhost:7100/posts`, {
            json: { title, body, tags: selectedTags }
          })
          .json();
      } catch (err) {
        console.log("Saving failed! Caught err from ky.post:", String(err));
        if (!(err instanceof HTTPError)) {
          // should not happen with ky, as ky _always_ throws
          // a HTTPError
          //
          // but when using axios or fetch you need other ways to get
          // the body with error message
          throw err;
        }

        // note: it could happen that there an error
        //  happens, while reading the response
        //  (for example while body is not valid JSON format)
        //  you could also handle that here with another
        //  try...catch
        const errorBody = await err.response.json();

        // Error response in my backend is { "error": "message from server" },
        //   and using ResponseError the 'error' is available in the render
        //   phase in your component
        //
        // Depending on your needs, you could also use the complete
        // body as error. That would make sense when the server
        // returns more details for the error (for example
        // field-specific error messages)

        throw new ResponseError(errorBody.error);
      }
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["posts"]
      });
    }
  });

  // Specify TypeArgument if typescript inference does not work for you:
  // const [degree, setDegress] = useState<number|null>(-7);
  // const [cities, setCities] = useState(["Hello World"]);
  // useDebounce

  // console.log("title", title);

  // const x = `Hello, ${title}` // JS Template String
  function handleClear() {
    setTitle("");
    setBody("");
    setSelectedTags([]);
  }

  // const emptyArray = []

  function handleSave() {
    console.log({ title, body, selectedTags });
    savePostMutation
      .mutateAsync()
      .then(() => handleClear())
      .catch(() => {
        // noop: avoid "Uncaught (in promise) HTTPError" error message on console
        //  In our component, we show the error while rendering the component,
        //  so we don't need it here.
        //  But without the catch() the browser would log an error to the console.
      });
  }

  const saveDisabled = title === "" || body === "" || savePostMutation.isPending;

  // const myAvailableTags = [...AVAILABLE_TAGS, title, body];

  //
  // JSX => JavaScript XML or XML in JavaScript
  // Virtual DOM  renders to a target platform (mainly the browser)
  // @ts-ignore
  return (
    <div>
      <h1>Create Post</h1>

      <label>
        Title
        <input value={title} onChange={e => setTitle(e.target.value)} />
      </label>

      {title.length > 0 ? <p>Great, title is valid!</p> : <p>Please enter a title</p>}

      <p>You have just entered {title.length} chars</p>

      <label>
        Body
        <textarea value={body} onChange={e => setBody(e.target.value)} />
      </label>

      <TagChooser
        availableTags={AVAILABLE_TAGS}
        title={"New Tag Chooser"}
        selectedTags={selectedTags}
        onTagsSelected={setSelectedTags}
      />

      <button onClick={handleClear}>Clear</button>
      <button onClick={handleSave} disabled={saveDisabled}>
        Save
      </button>

      {savePostMutation.isSuccess && <p>You blog post has been saved</p>}
      {savePostMutation.isError && isSaveError(savePostMutation.error) && (
        <p>You blog post could not be saved: {savePostMutation.error.errorDetails}</p>
      )}

      {/*<PostPreview body={body} onClear={handleClear} title={title} />*/}
    </div>
  );
}
