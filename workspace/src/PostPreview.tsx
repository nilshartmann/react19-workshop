import { logRender, useLogRenderDone } from "./log-render.ts";

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

function Label({ label }: { label: string }) {
  logRender("Label");
  return <label>{label}</label>;
}

function Body({ body }: { body: string }) {
  logRender("Body");
  return <div>{body}</div>;
}
function Title({ title }: { title: string }) {
  logRender("Title");
  return <div>{title}</div>;
}

function Button({ label, onClick }: { label: string; onClick: () => void }) {
  logRender("Button");
  return (
    <button onClick={onClick} className={"Button"}>
      {label}
    </button>
  );
}
