import { expect } from "@storybook/jest";
import { within, userEvent, waitFor } from "@storybook/testing-library";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const setCustomMethods = (canvas) => {
  const root = document.getElementById("root");

  canvas.getByClassName = (className) => [
    ...root.querySelectorAll(`.${className}`),
  ];
};

export default async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  setCustomMethods(canvas);

  await sleep(1000);
  await userEvent.click(canvas.getByClassName("input")[0]);

  const items = document
    .getElementsByClassName("options")[0]
    .getElementsByTagName("li");

  const input = canvas.getByClassName("input")[1];
  await userEvent.click(items[0]);
  await expect(input.value.trim()).toBe(items[0].innerText.trim());

  await sleep(300);
  await userEvent.click(items[3]);
  await expect(input.value.trim()).toBe(items[3].innerText.trim());

  await sleep(300);
  await userEvent.click(canvas.getByClassName("remove-all")[0]);
  await expect(input.value.trim()).toBe("");

  await userEvent.type(input, "Sony", { delay: 100 });

  await expect(Number(items.length)).toBe(1);
  await expect(items[0].innerText.trim()).toBe(input.value.trim());
};
