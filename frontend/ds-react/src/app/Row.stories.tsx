import type { Meta, StoryObj } from "@storybook/react";
import { themes } from "@storybook/theming";

import Row from "./Row";
import { prefersDarkColorScheme } from "@/core/utils";

const meta = {
  title: "Example/Row",
  component: Row,
  parameters: {
    layout: "fullscreen",
    docs: {
      theme: prefersDarkColorScheme() ? themes.dark : themes.normal,
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Row>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    horizontalAlign: "left",
    verticalAlign: "bottom",
    children: (
      <>
        <div>1</div>
        <div>2</div>
      </>
    ),
  },
};
