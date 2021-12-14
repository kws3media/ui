import { expect } from "@storybook/jest";
import {
  within,
  userEvent,
  waitFor,
  getNodeText,
  fireEvent,
} from "@storybook/testing-library";
import { sleep } from "../../../utils";

export default async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const inputs = canvasElement.querySelectorAll("input.input");

  //Delay play
  await sleep(1000);

  //Focus on Multi-select
  await userEvent.click(inputs[0]);

  const options = document.querySelectorAll("ul.options"),
    selected_options = canvasElement.querySelectorAll(".tags"),
    items = options[0].getElementsByTagName("li"),
    tags = selected_options[0].getElementsByTagName("li");

  //A dropdown showing all selectable items should appear
  await expect(!options[0].classList.contains("hidden")).toEqual(true);

  //Select items by mouse click
  await sleep(300);
  await userEvent.click(items[0]);
  await expect(Number(tags.length)).toEqual(1);
  await expect(getNodeText(items[0]).trim()).toEqual(
    getNodeText(tags[0]).trim()
  );

  //Select items by using Enter key
  await sleep(300);
  await fireEvent.mouseEnter(items[3]);
  await fireEvent.keyDown(inputs[0], { key: "Enter" });
  await expect(Number(tags.length)).toEqual(2);
  await expect(getNodeText(items[3]).trim()).toEqual(
    getNodeText(tags[1]).trim()
  );

  //Deselct item by Backspace key
  await sleep(300);
  await fireEvent.keyDown(inputs[0], { key: "Backspace" });
  await expect(Number(tags.length)).toEqual(1);

  //Deselct item by mouse click on remove button
  await sleep(300);
  await userEvent.click(within(tags[0]).getByRole("button"));
  await expect(Number(tags.length)).toEqual(0);

  //Select item by mouse click on item
  await sleep(300);
  await userEvent.click(items[4]);
  await expect(Number(tags.length)).toEqual(1);
  await expect(getNodeText(items[4]).trim()).toEqual(
    getNodeText(tags[0]).trim()
  );

  //Deselect item by mouse click on item
  await sleep(300);
  await userEvent.click(items[4]);
  await expect(Number(tags.length)).toEqual(0);

  //Search for an item
  // await sleep(300);
  // await userEvent.type(inputs[0], "no", { delay: 100 });
  // await expect(Number(items.length)).toBe(1);
  // await expect(getNodeText(items[0]).substring(0, 2).toLowerCase()).toBe("no");

  //Clear search input
  //await sleep(300);
  //await fireEvent.keyDown(inputs[0], { key: "Backspace" });
  //await fireEvent.keyDown(inputs[0], { key: "Backspace" });
  //await expect(inputs[0].value).toBe("");

  //Search and select for multiple items using Enter key
  await sleep(300);
  await userEvent.type(inputs[0], "son", { delay: 100 });
  await fireEvent.keyDown(inputs[0], { key: "Enter" });
  await userEvent.type(inputs[0], "hua", { delay: 100 });
  await fireEvent.keyDown(inputs[0], { key: "Enter" });
  await expect(Number(tags.length)).toBe(2);
  await expect(getNodeText(tags[0]).substring(0, 3).toLowerCase()).toBe("son");
  await expect(getNodeText(tags[1]).substring(0, 3).toLowerCase()).toBe("hua");

  //Clear selected items
  await fireEvent.keyDown(inputs[0], { key: "Backspace" });
  await expect(Number(tags.length)).toBe(1);
  await expect(getNodeText(tags[0]).substring(0, 3).toLowerCase()).toBe("son");
  await userEvent.click(within(tags[0]).getByRole("button"));
  await expect(Number(tags.length)).toEqual(0);

  //Clear input using Escape key
  await sleep(300);
  await userEvent.type(inputs[0], "bl", { delay: 100 });
  await fireEvent.keyDown(inputs[0], { key: "Enter" });
  await userEvent.type(inputs[0], "nok", { delay: 100 });
  await fireEvent.keyDown(inputs[0], { key: "Escape" });
  await expect(Number(tags.length)).toBe(1);
  await expect(getNodeText(tags[0]).substring(0, 3).toLowerCase()).toBe("bla");

  //Select item using ArrowUp and Enter key
  await sleep(300);
  await fireEvent.keyDown(inputs[0], { key: "ArrowUp" });
  await fireEvent.keyDown(inputs[0], { key: "ArrowUp" });
  await fireEvent.keyDown(inputs[0], { key: "ArrowUp" });
  await fireEvent.keyDown(inputs[0], { key: "Enter" });

  //Select item using ArrowDown key & Mouse click
  await sleep(300);
  await fireEvent.keyDown(inputs[0], { key: "ArrowDown" });
  await fireEvent.keyDown(inputs[0], { key: "ArrowDown" });
  await fireEvent.keyDown(inputs[0], { key: "ArrowDown" });
  await fireEvent.keyDown(inputs[0], { key: "ArrowDown" });
  await userEvent.click(options[0].querySelector("li.active"));
  await expect(Number(tags.length)).toBe(3);
  await expect(getNodeText(tags[0]).trim()).toBe("Blackberry");
  await expect(getNodeText(tags[1]).trim()).toBe("LG");
  await expect(getNodeText(tags[2]).trim()).toBe("Oppo");

  //Removing all selected items
  await sleep(300);
  await userEvent.click(canvasElement.querySelectorAll(".remove-all")[0]);
  await expect(Number(tags.length)).toEqual(0);
};
