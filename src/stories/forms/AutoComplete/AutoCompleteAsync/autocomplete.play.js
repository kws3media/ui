//@ts-check
import { expect } from "@storybook/jest";
import {
  within,
  userEvent,
  // eslint-disable-next-line no-unused-vars
  waitFor,
  // eslint-disable-next-line no-unused-vars
  getNodeText,
  fireEvent,
} from "@storybook/testing-library";
import { sleep } from "../../../../utils";

// eslint-disable-next-line no-unused-vars
export default async ({ args, canvasElement }) => {
  // eslint-disable-next-line no-unused-vars
  const canvas = within(canvasElement);
  const inputs = canvasElement.querySelectorAll("input.input");

  //Delay play
  await sleep(1000);

  //Focus on Multi-select
  userEvent.click(inputs[0]);

  const options = document.querySelectorAll("ul.options"),
    items = options[0].getElementsByTagName("li");

  //No dropdown should be visible until user types and found matches
  await expect(options[0].classList.contains("hidden")).toEqual(true);

  await sleep(300);
  emptyInput(inputs[0]);
  await userEvent.type(inputs[0], "tony", { delay: 100 });
  await sleep(1200);
  await expect(Number(items.length)).toBe(1);
  await expect(HTMLtoString(items[0].innerHTML).toLowerCase()).toBe(
    "tony stark"
  );

  // on enter options should be empty
  await sleep(300);
  fireEvent.keyDown(inputs[0], { key: "Enter" });
  await sleep(300);
  await expect(Number(items.length)).toEqual(0);
  await expect(inputs[0].value).toEqual("tony");

  await sleep(300);
  await userEvent.type(inputs[0], " roger", { delay: 100 });
  await sleep(1200);
  await expect(Number(items.length)).toBe(2);
  await expect(HTMLtoString(items[1].innerHTML).toLowerCase()).toBe(
    "steve rogers"
  );

  await sleep(300);
  emptyInput(inputs[0]);
  await userEvent.type(inputs[0], "drax", { delay: 100 });
  await sleep(1200);
  await expect(Number(items.length)).toBe(1);
  await expect(HTMLtoString(items[0].innerHTML).toLowerCase()).toBe("drax");
  await fireEvent.keyDown(inputs[0], { key: "Enter" });
  await sleep(300);
  await expect(Number(items.length)).toEqual(0);

  //Select item using ArrowUp and Enter key
  await sleep(300);
  emptyInput(inputs[0]);
  await userEvent.type(inputs[0], "t", { delay: 100 });
  await sleep(1200);
  await fireEvent.keyDown(inputs[0], { key: "ArrowUp" });
  await sleep(300);
  await fireEvent.keyDown(inputs[0], { key: "ArrowUp" });
  await sleep(300);
  await fireEvent.keyDown(inputs[0], { key: "ArrowUp" });
  await sleep(300);
  await fireEvent.keyDown(inputs[0], { key: "Enter" });
  await expect(Number(items.length)).toEqual(0);
  await expect(inputs[0].value).toEqual("Thor");

  //Select item using ArrowDown key & Mouse click
  await sleep(300);
  emptyInput(inputs[0]);
  await userEvent.type(inputs[0], "s", { delay: 100 });
  await sleep(1200);
  await fireEvent.keyDown(inputs[0], { key: "ArrowDown" });
  await sleep(300);
  await fireEvent.keyDown(inputs[0], { key: "ArrowDown" });
  await sleep(300);
  await fireEvent.keyDown(inputs[0], { key: "ArrowDown" });
  await sleep(300);
  await fireEvent.keyDown(inputs[0], { key: "ArrowDown" });
  await sleep(300);
  //@ts-ignore
  await userEvent.click(options[0].querySelector("li.active"));
  await expect(Number(items.length)).toBe(0);
  await expect(inputs[0].value).toEqual("Captain Midlands");

  //Dont clear input if input loses focus on it
  await sleep(300);
  emptyInput(inputs[0]);
  await userEvent.type(inputs[0], "s", { delay: 100 });
  await userEvent.click(document.body);
  await expect(inputs[0].value).toBe("s");
  await expect(Number(items.length)).toEqual(0);
  emptyInput(inputs[0]);
};

function HTMLtoString(html) {
  return html.replace(/<[^>]*>/g, "").trim();
}
// series of backspace call not working, lib bug
function emptyInput(input) {
  fireEvent.input(input, {
    target: { value: "" },
    bubbles: true,
    cancelable: true,
  });
}
