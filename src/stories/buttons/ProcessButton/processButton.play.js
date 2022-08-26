//@ts-check
import { expect } from "@storybook/jest";
import { within, userEvent, waitFor } from "@storybook/testing-library";

// eslint-disable-next-line no-unused-vars
export default async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  let buttons = canvas.getAllByRole("button");
  const successButton = buttons[0];
  const failButton = buttons[1];

  //click on the success button
  //and show the processed result
  await userEvent.click(successButton);
  await waitFor(
    () => {
      expect(successButton.innerText).toBe("Done");
    },
    { timeout: 2000 }
  );
  await waitFor(
    () => {
      expect(successButton.innerText).toBe("Click Me");
    },
    { timeout: 600 }
  );

  //click on the fail button
  //and show the processed result
  await userEvent.click(failButton);
  await waitFor(
    () => {
      expect(failButton.innerText).toBe("Failed");
    },
    { timeout: 2000 }
  );
  await waitFor(
    () => {
      expect(failButton.innerText).toBe("Click Me");
    },
    { timeout: 3000 }
  );
};
