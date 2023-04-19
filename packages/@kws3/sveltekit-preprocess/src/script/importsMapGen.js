const fs = require("fs");

// Define the list of exports
const exportsList = `
export { default as FloatingUIOutput } from "./helpers/FloatingUI/FloatingUIOutput.svelte";
export { default as Floatie } from "./helpers/FloatingUI/Floatie.svelte";
export { portal } from "svelte-portal";
export { default as Portal } from "svelte-portal";
export { default as ConfirmButton } from "./buttons/ConfirmButton.svelte";
export { default as DeleteButton } from "./buttons/DeleteButton.svelte";
export { default as SubmitButton } from "./buttons/SubmitButton.svelte";
export { default as ProcessButton } from "./buttons/ProcessButton.svelte";
export { default as Checkbox } from "./controls/Checkbox.svelte";
export { default as FileUpload } from "./controls/FileUpload.svelte";
export { default as NumberInput } from "./controls/NumberInput.svelte";
export { default as Radio } from "./controls/Radio.svelte";
export { default as Toggle } from "./controls/Toggle.svelte";
export { default as ToggleButtons } from "./controls/ToggleButtons.svelte";
export { default as ToggleControl } from "./controls/ToggleControl.svelte";
export { default as RangeSlider } from "./controls/RangeSlider.svelte";
export { default as Canvas } from "./canvas/Canvas.svelte";
export { default as ESignature } from "./canvas/ESignature.svelte";
export { default as PenControls } from "./canvas/PenControls.svelte";
export { default as PenInput } from "./canvas/PenInput.svelte";
export { Pen, Eraser } from "./internal/DrawingPad.js";
`;

// Parse the exports into an array of objects
const exportsArray = [];
let expls = exportsList
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line.startsWith("export"));

expls.forEach((line) => {
  const match = /export\s+{(.*?)}\s+from\s+['"](.*?)['"];/g.exec(line);
  // console.log(match)
  if (match) {
    // const exportType = match[1] ? match[1].replace('{', '').replace('}', '').trim() : 'default';
    const exportNames = match[1].split(",");
    const filePath = match[2];
    // console.log(match)
    exportNames.forEach((name) => {
      let _name = name.trim();
      let type = "";

      if (_name.startsWith("default")) {
        _name = _name.replace("default as", "");
        type = "default";
      } else {
        type = "named";
      }
      exportsArray.push({
        name: _name.trim(),
        exportType: type,
        filepath: filePath,
      });
    });
  }
});

// Write the exports array to a JSON file
// fs.writeFileSync('exports.json', JSON.stringify(exportsArray, null, 2));
console.log(exportsArray);

console.log("JSON file generated successfully!");
