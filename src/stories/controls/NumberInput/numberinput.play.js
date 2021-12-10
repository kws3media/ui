import { expect } from "@storybook/jest";
import { within, userEvent, waitFor } from "@storybook/testing-library";

export default async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  console.log(canvas);
  await userEvent.click(canvas.getByTestId("plus-button"));
  await expect(Number(canvas.getByTestId("number-input").value)).toEqual(1);

  await userEvent.click(canvas.getByTestId("plus-button"));
  await expect(Number(canvas.getByTestId("number-input").value)).toEqual(2);

  await userEvent.click(canvas.getByTestId("minus-button"));
  await expect(Number(canvas.getByTestId("number-input").value)).toEqual(1);

  await userEvent.click(canvas.getByTestId("minus-button"));
  await expect(Number(canvas.getByTestId("number-input").value)).toEqual(0);
};
