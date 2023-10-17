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
import { sleep } from "../../../../../utils.js";

// eslint-disable-next-line no-unused-vars
export default async ({ args, canvasElement }) => {
  // eslint-disable-next-line no-unused-vars
  const canvas = within(canvasElement);
  const inputs = canvasElement.querySelectorAll("input.input");

  //Delay play
  await sleep(1000);

  //Focus on Multi-select
  await userEvent.click(inputs[0]);

  const options = document.querySelectorAll("ul.options"),
    items = options[0].getElementsByTagName("li");

  //No dropdown should be visible until user types and found matches
  await expect(options[0].classList.contains("hidden")).toEqual(true);

  await sleep(300);
  await userEvent.type(inputs[0], "tony ", { delay: 100 });
  await userEvent.type(inputs[0], "roger", { delay: 100 });
  await sleep(300);
  await expect(Number(items.length)).toBe(3);
  await expect(HTMLtoString(items[0].innerHTML).toLowerCase()).toBe(
    "clint barton",
  );
  await expect(HTMLtoString(items[1].innerHTML).toLowerCase()).toBe(
    "tony stark",
  );
  await expect(HTMLtoString(items[2].innerHTML).toLowerCase()).toBe(
    "steve rogers",
  );

  // on enter options should be empty
  await sleep(300);
  await fireEvent.keyDown(inputs[0], { key: "Enter" });
  await expect(Number(items.length)).toEqual(0);
  await expect(inputs[0].value).toEqual("tony roger");

  await sleep(300);
  await userEvent.type(inputs[0], " banner", { delay: 100 });
  await sleep(300);
  await expect(Number(items.length)).toBe(4);
  await expect(HTMLtoString(items[3].innerHTML).toLowerCase()).toBe(
    "bruce banner",
  );

  await sleep(300);
  emptyInput(inputs[0]);
  await sleep(300);
  await userEvent.type(inputs[0], "drax", { delay: 100 });
  await sleep(300);
  await expect(Number(items.length)).toBe(1);
  await expect(HTMLtoString(items[0].innerHTML).toLowerCase()).toBe("drax");
  await sleep(300);
  await fireEvent.keyDown(inputs[0], { key: "Enter" });
  await expect(Number(items.length)).toEqual(0);

  //By default search strategy  should be 'fuzzy'
  await sleep(300);
  emptyInput(inputs[0]);
  await userEvent.type(inputs[0], "tn", { delay: 100 });
  await sleep(300);
  await expect(HTMLtoString(items[0].innerHTML).toLowerCase()).toBe(
    "ancient one",
  );
  await sleep(300);
  await fireEvent.keyDown(inputs[0], { key: "Enter" });
  await sleep(300);
  await expect(inputs[0].value).toEqual("tn");

  //Select item using ArrowUp and Enter key
  await sleep(300);
  emptyInput(inputs[0]);
  await userEvent.type(inputs[0], "t", { delay: 100 });
  await sleep(300);
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
  await expect(inputs[0].value).toEqual("Brotherhood of Evil Mutants");

  //Dont clear input if input loses focus on it
  await sleep(300);
  emptyInput(inputs[0]);
  await userEvent.type(inputs[0], "s", { delay: 100 });
  await userEvent.click(document.body);
  await expect(inputs[0].value).toBe("s");
  await expect(Number(items.length)).toEqual(0);

  await sleep(300);
  emptyInput(inputs[0]);
};

function HTMLtoString(html) {
  return html.replace(/<[^>]*>/g, "").trim();
}

function emptyInput(input) {
  fireEvent.input(input, {
    target: { value: "" },
    bubbles: true,
    cancelable: true,
  });
}
