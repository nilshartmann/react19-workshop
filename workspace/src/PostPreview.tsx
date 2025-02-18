import { logRender, useLogRenderDone } from "./log-render.ts";
import { memo } from "react";

type PostPreviewProps = {
  title: string;
  body: string;
  onClear: () => void;
};
export default function PostPreview({ title, body, onClear }: PostPreviewProps) {
  logRender("PostPreview");
  useLogRenderDone();
  return (
    <div>
      <h2>Preview of your new post: </h2>
      <Label label={"Title:"}></Label>
      <Title title={title} />
      <Label label={"Body:"}></Label>
      <Body body={body} />
      <Button onClick={onClear} label={"Clear"} />
    </div>
  );
}

// ---- NOTE:
//   - this should be a "simulation" of "real" components in a component library
//   - complexity or meaningfullnes doesn't matter here, we just need a bunch of components
//   - you will also NEVER do things like 'logRender' oder 'useLogRenderDone' in your
//     application. There are better ways, this is just for simplifaction here

// const Label = memo(function Label({ label }: { label: string }) {
//   logRender("Label " + label);
//   return <label>LABEL :{label}</label>;
// });

function Label({ label }: { label: string }) {
  logRender("Label " + label);
  return <label>LABEL :{label}</label>;
}

function Body({ body }: { body: string }) {
  logRender("Body");
  return <div>BODY: {body}</div>;
}
function Title({ title }: { title: string }) {
  logRender("Title");
  return <div>TITLE: {title}</div>;
}

const Button = memo(function Button({ label, onClick }: { label: string; onClick: () => void }) {
  logRender("Button");
  return (
    <button onClick={onClick} className={"Button"}>
      {label}
    </button>
  );
});
