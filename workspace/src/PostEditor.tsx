import React, { useCallback, useState } from "react";
import TagChooser from "./TagChooser.tsx";
import PostPreview from "./PostPreview.tsx";

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

  // Specify TypeArgument if typescript inference does not work for you:
  // const [degree, setDegress] = useState<number|null>(-7);
  // const [cities, setCities] = useState(["Hello World"]);
  // useDebounce

  // console.log("title", title);
  console.log("RENDER");

  // const x = `Hello, ${title}` // JS Template String
  function handleClear() {
    setTitle("");
    setBody("");
    setSelectedTags([]);
  }

  // const emptyArray = []

  function handleSave() {
    console.log({ title, body, selectedTags });
  }

  const saveDisabled = title === "" || body === "";

  // const myAvailableTags = [...AVAILABLE_TAGS, title, body];

  //
  // JSX => JavaScript XML or XML in JavaScript
  // Virtual DOM  renders to a target platform (mainly the browser)
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

      <PostPreview body={body} onClear={handleClear} title={title} />
    </div>
  );
}
