import { expect } from "@storybook/jest";
import { within, userEvent, waitFor } from "@storybook/testing-library";

export default async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  let buttons = canvas.getAllByRole("button");
  const successButton = buttons[0];
  const failButton = buttons[1];

  //click on the success button
  //it will show cancel button
  await userEvent.click(successButton);
  buttons = canvas.getAllByRole("button");
  const cancelButton = buttons[0];
  await expect(Number(buttons.length)).toEqual(3);

  //click on the cancel button
  //it will hide cancel button
  await userEvent.click(cancelButton);
  buttons = canvas.getAllByRole("button");
  await expect(Number(buttons.length)).toEqual(2);

  //again click on the success button
  //it will confirm the action
  //and show the processed result
  await userEvent.dblClick(successButton);
  await waitFor(
    () => {
      expect(successButton.innerText).toBe("Deleted");
    },
    { timeout: 2000 }
  );
  await waitFor(
    () => {
      expect(successButton.innerText).toBe("Delete Me");
    },
    { timeout: 600 }
  );

  //click on the fail button
  //it will confirm the action
  //and show the processed result
  await userEvent.dblClick(failButton);
  await waitFor(
    () => {
      expect(failButton.innerText).toBe("Failed");
    },
    { timeout: 2000 }
  );
  await waitFor(
    () => {
      expect(failButton.innerText).toBe("Delete Me");
    },
    { timeout: 3000 }
  );
};
