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

  await userEvent.click(items[0]);
  await sleep(300);
  await userEvent.click(items[2]);
  await sleep(300);
  await userEvent.click(items[4]);

  const tags = canvas.getElements(".tags")[0].getElementsByTagName("li");

  await expect(Number(tags.length)).toEqual(3);

  await sleep(300);
  await userEvent.click(items[2]);
  await expect(Number(tags.length)).toEqual(2);

  await sleep(300);
  await userEvent.click(items[4]);
  await expect(Number(tags.length)).toEqual(1);

  await sleep(300);
  await userEvent.click(items[0]);
  await expect(Number(tags.length)).toEqual(0);

  await sleep(300);
  await userEvent.click(items[1]);

  await sleep(300);
  await userEvent.click(items[3]);

  await sleep(300);
  await userEvent.click(canvas.getElements(".remove-all")[0]);
  expect(Number(tags.length)).toEqual(0);
};
