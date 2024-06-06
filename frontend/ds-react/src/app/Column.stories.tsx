import type { Meta, StoryObj } from "@storybook/react";
import { themes } from "@storybook/theming";

import Column from "./Column";
import { prefersDarkColorScheme } from "@/core/utils";

const meta = {
  title: "Example/Column",
  component: Column,
  parameters: {
    layout: "fullscreen",
    docs: {
      theme: prefersDarkColorScheme() ? themes.dark : themes.normal,
    },
  },
} satisfies Meta<typeof Column>;

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
