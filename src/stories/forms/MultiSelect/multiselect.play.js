import { expect } from "@storybook/jest";
import {
  within,
  userEvent,
  waitFor,
  getNodeText,
} from "@storybook/testing-library";
import { sleep } from "../../../utils";

export default async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const inputs = canvasElement.querySelectorAll("input.input");

  //Delay play
  await sleep(1000);

  //Focus on Multi-select
  await userEvent.click(inputs[0]);

  //A dropdown showing all selectable items should appear
  const options = document.querySelectorAll("ul.options");
  await expect(!options[0].classList.contains("hidden")).toEqual(true);

  //Select few items from dropdown
  const items = options[0].getElementsByTagName("li");
  await userEvent.click(items[0]);
  await sleep(300);
  await userEvent.click(items[2]);
  await sleep(300);
  await userEvent.click(items[4]);

  //Match with the selecte items
  const tags = canvasElement
    .querySelectorAll(".tags")[0]
    .getElementsByTagName("li");
  await expect(Number(tags.length)).toEqual(3);

  //Deselct one item
  //Match with the selecte items
  await sleep(300);
  await userEvent.click(items[2]);
  await expect(Number(tags.length)).toEqual(2);

  //Deselct one item
  //Match with the selecte items
  await sleep(300);
  await userEvent.click(items[4]);
  await expect(Number(tags.length)).toEqual(1);

  //Deselct one item
  //Match with the selecte items
  await sleep(300);
  await userEvent.click(items[0]);
  await expect(Number(tags.length)).toEqual(0);

  //Again select few items from dropdown
  await sleep(300);
  await userEvent.click(items[1]);
  await sleep(300);
  await userEvent.click(items[3]);

  //Removing all selected items
  //should remove all tags
  await sleep(300);
  await userEvent.click(canvasElement.querySelectorAll(".remove-all")[0]);
  await expect(Number(tags.length)).toEqual(0);

  //Search for an item
  await userEvent.type(inputs[0], "no", { delay: 100 });
  await expect(Number(items.length)).toBe(1);
  await expect(getNodeText(items[0]).trim().substring(0, 2).toLowerCase()).toBe(
    "no"
  );

  //clearout all selected items
  await sleep(1000);
  await userEvent.click(canvasElement.querySelectorAll(".remove-all")[0]);

  //Search and select for multiple items
  await userEvent.type(inputs[0], "son", { delay: 100 });
  await userEvent.click(items[0]);
  await userEvent.type(inputs[0], "hua", { delay: 100 });
  await userEvent.click(items[0]);
  await expect(Number(tags.length)).toBe(2);
  await expect(getNodeText(tags[0]).trim().substring(0, 3).toLowerCase()).toBe(
    "son"
  );
  await expect(getNodeText(tags[1]).trim().substring(0, 3).toLowerCase()).toBe(
    "hua"
  );

  //clearout selected items
  await sleep(1000);
  await userEvent.click(canvasElement.querySelectorAll(".remove-all")[0]);
};
