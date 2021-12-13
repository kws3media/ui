import { expect } from "@storybook/jest";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { sleep, setCanvasMethods } from "../../../utils";

export default async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  setCanvasMethods(canvas);

  await sleep(1000);
  await userEvent.click(canvas.getElements("input.input")[0]);

  const items = document
    .getElementsByClassName("options")[0]
    .getElementsByTagName("li");

  const input = canvas.getElements("input.input")[0];
  await userEvent.click(items[0]);
  await expect(input.value.trim()).toBe(items[0].innerText.trim());

  await sleep(300);
  await userEvent.click(items[3]);
  await expect(input.value.trim()).toBe(items[3].innerText.trim());

  await sleep(300);
  await userEvent.click(canvas.getElements(".remove-all")[0]);
  await expect(input.value.trim()).toBe("");

  await userEvent.type(input, "Sony", { delay: 100 });

  await expect(Number(items.length)).toBe(1);
  await expect(items[0].innerText.trim()).toBe(input.value.trim());
};
