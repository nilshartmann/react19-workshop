import React, { useState } from "react";

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

//ECMAScript Module System (ESM)
// DEFAULT export
export default function PostEditor() {
  // Model in React: State

  // function myUseState() {
  //   return ["helloWorld", () => {} ];
  // }

  // const titleState = useState("Hello World");
  // const titel = titleState[0];
  // const setTitel = titleState[1];

  //    v---------------v--- Destructuring Operator in JS  (Python/C++: unpacking)
  const [title, setTitle] = useState("Hello World");
  // Specify TypeArgument if typescript inference does not work for you:
  // const [degree, setDegress] = useState<number|null>(-7);
  // const [cities, setCities] = useState(["Hello World"]);
  // useDebounce

  console.log("title", title);

  // const x = `Hello, ${title}` // JS Template String
  function handleClear() {
    setTitle("");
  }

  //
  // JSX => JavaScript XML or XML in JavaScript
  return (
    <div>
      <h1>Create Post</h1>

      <label>
        Title
        <input value={title} onChange={e => setTitle(e.target.value)} />
      </label>

      {title.length > 0 ? <p>Great, title is valid!</p> : <p>Please enter a title</p>}

      <p>You have just entered {title.length} chars</p>

      <button onClick={handleClear}>Clear</button>
    </div>
  );
}
