import React from "react";
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
      <button type="button" onClick={onSave} disabled={!title || !body}>
        Save
      </button>
    </form>
  );
}
