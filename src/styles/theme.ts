import { extendTheme } from "@chakra-ui/react";

// example theme
export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        color: "#8f8ca8",
        bg: "#232135",
      },
    }),
  },
  fonts: {
    body: "monospace, sans-serif",
    heading: "monospace, sans-serif",
    mono: "monospace, sans-serif",
  },
});
