import type { Meta, StoryObj } from "@storybook/react";

import Row from "./Row";

const meta = {
  title: "Example/Row",
  component: Row,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Row>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    horizontalAlign: "center",
    verticalAlign: "center",
    children: (
      <>
        <div>1</div>
        <div>2</div>
      </>
    ),
  },
};
