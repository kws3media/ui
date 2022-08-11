//@ts-check
import { expect } from "@storybook/jest";
// eslint-disable-next-line no-unused-vars
import { within, userEvent, waitFor } from "@storybook/testing-library";

// eslint-disable-next-line no-unused-vars
export default async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  const buttons = canvas.getAllByRole("button");
  const input = canvas.getByTestId("input");

  await userEvent.click(buttons[1]);
  await expect(Number(input["value"])).toEqual(1);

  await userEvent.click(buttons[1]);
  await expect(Number(input["value"])).toEqual(2);

  await userEvent.click(buttons[0]);
  await expect(Number(input["value"])).toEqual(1);

  await userEvent.click(buttons[0]);
  await expect(Number(input["value"])).toEqual(0);
};
