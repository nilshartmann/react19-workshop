import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import PostEditor from "../PostEditor.tsx";

test("Hello World", () => {
  render(<PostEditor />);

  expect(screen.getByText(/Create Post/)).toBeInTheDocument();
});
