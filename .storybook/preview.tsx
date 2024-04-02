import { Story } from "@storybook/blocks";
import type { Preview } from "@storybook/react";
import React from "react";
import { Box } from "@mui/material";

export const decorators = [
  (Story) => (
    <Box
      width="100%"
      height="100dvh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Story />
    </Box>
  ),
];

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "custom",
      values: [
        {
          name: "custom",
          value: "#d6d6d6",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
