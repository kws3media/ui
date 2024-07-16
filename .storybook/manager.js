import { addons } from "@storybook/manager-api";
import { light } from "./kwsTheme";

addons.setConfig({
  theme: light,
  isToolshown: true,
  name: "UI | KWS3 Media",
  url: "https://kws3.media",
  hierarchyRootSeparator: /\|/,
  // sidebar: {
  //   filters: {
  //     patterns: (item) => {
  //       console.log(item);
  //       return !item.tags.includes("isHidden");
  //     },
  //   },
  // },
});
