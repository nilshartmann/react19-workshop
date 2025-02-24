import { expect, test, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import PostEditorZod from "../PostEditorZod.tsx";
import { userEvent } from "@testing-library/user-event";

test("PosEditor works", async () => {
  const user = userEvent.setup();

  const onSaveCallbackFn = vitest.fn();

  render(<PostEditorZod onSave={onSaveCallbackFn} />);

  const titleInputField = screen.getByLabelText(/title/i);
  expect(titleInputField).toBeInTheDocument();

  expect(screen.getByRole("button", { name: /save/i })).toBeDisabled();

  await user.type(titleInputField, "Hello");
  await user.type(screen.getByLabelText(/body/i), "World");

  expect(screen.getByRole("button", { name: /save/i })).toBeEnabled();

  await user.click(screen.getByRole("button", { name: /save/i }));

  expect(onSaveCallbackFn).toHaveBeenCalledOnce();
  expect(onSaveCallbackFn).toHaveBeenCalledExactlyOnceWith("Hello", "World");
});
