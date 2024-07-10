import { DocsContainer as BaseContainer } from "@storybook/blocks";
import { useEffect, useState } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
import { light, dark } from "./kwsTheme";
import { addons } from "@storybook/preview-api";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";

const channel = addons.getChannel();

export const DocsContainer = ({ children, context }) => {
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setDark);
    return () => channel.off(DARK_MODE_EVENT_NAME, setDark);
  }, [channel]);

  return _jsx(BaseContainer, {
    theme: isDark ? dark : light,
    context: context,
    children: children,
  });
};
