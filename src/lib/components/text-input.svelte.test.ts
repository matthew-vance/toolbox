import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { test, expect } from "vitest";

import TextInputTest from "./text-input.test.svelte";

test("text input with value binding", async () => {
  const user = userEvent.setup();

  render(TextInputTest);

  const input = screen.getByRole("textbox");
  await user.type(input, "hello world");

  const value = screen.getByTestId("value");
  expect(value).toHaveTextContent("hello world");
});
