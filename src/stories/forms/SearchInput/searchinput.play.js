//@ts-check
import { expect } from "@storybook/jest";
import {
  within,
  userEvent,
  // eslint-disable-next-line no-unused-vars
  waitFor,
  getNodeText,
  fireEvent,
} from "@storybook/testing-library";
import { sleep } from "./../../../utils";

// eslint-disable-next-line no-unused-vars
export default async ({ args, canvasElement }) => {
  // eslint-disable-next-line no-unused-vars
  const canvas = within(canvasElement);
  const inputs = canvasElement.querySelectorAll("input.input");

  //Delay play
  await sleep(1000);

  //Focus on Multi-select
  await userEvent.click(inputs[0]);

  const options = document.querySelectorAll(
      ".searchinput-examples > .column > h3"
    ),
    reviews = options[0],
    complains = options[1];

  await expect(HTMLtoString(reviews.innerHTML)).toBe("Reviews (50)");
  await expect(HTMLtoString(complains.innerHTML)).toBe("Complains (50)");

  // Search and count total reviews
  await sleep(300);
  await userEvent.type(inputs[0], "bought ", { delay: 100 });

  await sleep(300);
  await expect(HTMLtoString(reviews.innerHTML)).toBe("Reviews (4)");
  await expect(HTMLtoString(complains.innerHTML)).toBe("Complains (4)");

  await sleep(300);
  await userEvent.type(inputs[0], "this phone", { delay: 100 });

  await sleep(300);
  await expect(HTMLtoString(reviews.innerHTML)).toBe("Reviews (1)");
  await expect(HTMLtoString(complains.innerHTML)).toBe("Complains (1)");

  await sleep(300);

  // clear input by reset_button
  const reset_button = canvasElement.querySelector("button.is-danger");
  await userEvent.click(reset_button);

  await sleep(300);
  await expect(HTMLtoString(reviews.innerHTML)).toBe("Reviews (50)");
  await expect(HTMLtoString(complains.innerHTML)).toBe("Complains (50)");
};

function HTMLtoString(html) {
  return html.replace(/<[^>]*>/g, "").trim();
}
