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
import { sleep } from "../../../../utils";

// eslint-disable-next-line no-unused-vars
export default async ({ args, canvasElement }) => {
  // eslint-disable-next-line no-unused-vars
  const canvas = within(canvasElement);
  const inputs = canvasElement.querySelectorAll("input.input");
  const emptyOptionsPlaceholder = "Start typing to search...";

  //Delay play
  await sleep(1000);

  //Focus on Multi-select
  await userEvent.click(inputs[0]);

  userEvent.type(inputs[0], "l", { delay: 100 });
  await sleep(1000);

  const options = document.querySelectorAll("ul.options"),
    selected_options = canvasElement.querySelectorAll(".tags"),
    items = options[0].getElementsByTagName("li"),
    tags = selected_options[0].getElementsByTagName("li");

  //A dropdown showing only matched items should appear, here its 3
  await expect(!options[0].classList.contains("hidden")).toEqual(true);

  //Select items by mouse click
  await sleep(300);
  await expect(Number(selected_options.length)).toEqual(2); //2 items already selected by deafult value
  await userEvent.click(items[0]);
  await expect(Number(tags.length)).toEqual(3); // now tags contain 3 items
  await expect(getNodeText(items[0]).trim()).toEqual(emptyOptionsPlaceholder);

  //Select items by using Enter key
  await sleep(300);

  await userEvent.type(inputs[0], "ap", { delay: 100 });
  await sleep(1000);

  await fireEvent.mouseEnter(items[0]);
  await fireEvent.keyDown(inputs[0], { key: "Enter" });
  await expect(Number(tags.length)).toEqual(4);
  await expect(getNodeText(items[0]).trim()).toEqual(emptyOptionsPlaceholder);

  //Deselct item by Backspace key
  await sleep(300);
  await fireEvent.keyDown(inputs[0], { key: "Backspace" });
  await expect(Number(tags.length)).toEqual(3);

  //Deselct item by mouse click on remove button
  await sleep(300);
  await userEvent.click(within(tags[0]).getByRole("button"));
  await expect(Number(tags.length)).toEqual(2);

  //Select item by mouse click on item
  await sleep(300);

  await userEvent.type(inputs[0], "hu", { delay: 100 });
  await sleep(1000);

  await userEvent.click(items[0]);
  await expect(Number(tags.length)).toEqual(3);
  await expect(getNodeText(tags[2]).trim()).toEqual("Huawei");
  await expect(getNodeText(items[0]).trim()).toEqual(emptyOptionsPlaceholder);

  //Deselect item by mouse click on item
  await sleep(300);

  await userEvent.type(inputs[0], "hu", { delay: 100 });
  await sleep(1000);
  await userEvent.click(items[0]);
  await expect(Number(tags.length)).toEqual(2);

  //show 'No matching options' message when no matching items found
  await sleep(300);
  inputs[0].value = "";
  await userEvent.type(inputs[0], "exe", { delay: 100 });
  await sleep(1000);
  await expect(getNodeText(items[0]).trim()).toEqual("No matching options");

  //Clear search input
  await sleep(300);
  await fireEvent.keyDown(inputs[0], { key: "Escape" });
  await expect(inputs[0].value).toBe("");

  //Clear input using Escape key
  await sleep(300);
  await userEvent.type(inputs[0], "bl", { delay: 100 });
  await fireEvent.keyDown(inputs[0], { key: "Enter" });
  await userEvent.type(inputs[0], "nok", { delay: 100 });
  await fireEvent.keyDown(inputs[0], { key: "Escape" });
  await expect(Number(tags.length)).toBe(2);
  await expect(getNodeText(tags[0]).substring(0, 3).toLowerCase()).toBe("opp");

  //Clear selected items
  await sleep(300);
  await fireEvent.keyDown(inputs[0], { key: "Backspace" });
  await expect(Number(tags.length)).toBe(1);
  await expect(getNodeText(tags[0]).substring(0, 3).toLowerCase()).toBe("opp");
  await userEvent.click(within(tags[0]).getByRole("button"));
  await expect(Number(tags.length)).toEqual(0);

  // //Select item using ArrowUp and Enter key
  await sleep(300);

  await userEvent.type(inputs[0], "o", { delay: 100 });
  await sleep(1000);
  await fireEvent.keyDown(inputs[0], { key: "ArrowUp" });
  await fireEvent.keyDown(inputs[0], { key: "ArrowUp" });
  await fireEvent.keyDown(inputs[0], { key: "ArrowUp" });
  await fireEvent.keyDown(inputs[0], { key: "Enter" });

  //Select item using ArrowDown key & Mouse click
  await sleep(300);
  await userEvent.type(inputs[0], "o", { delay: 100 });
  await sleep(1000);
  await fireEvent.keyDown(inputs[0], { key: "ArrowDown" });
  await fireEvent.keyDown(inputs[0], { key: "ArrowDown" });
  await fireEvent.keyDown(inputs[0], { key: "ArrowDown" });
  await fireEvent.keyDown(inputs[0], { key: "ArrowDown" });
  //@ts-ignore
  await userEvent.click(options[0].querySelector("li.active"));
  await expect(Number(tags.length)).toBe(2);
  await expect(getNodeText(tags[0]).trim()).toBe("XOLO");
  await expect(getNodeText(tags[1]).trim()).toBe("Bosch");

  //Removing all selected items
  await sleep(300);
  await userEvent.click(canvasElement.querySelectorAll(".remove-all")[0]);
  await expect(Number(tags.length)).toEqual(0);
  await expect(getNodeText(items[0]).trim()).toEqual(emptyOptionsPlaceholder);
};
