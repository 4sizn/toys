import type { Meta, StoryObj } from "@storybook/react";
import Column from "./Column";

const meta = {
  title: "Example/Column",
  component: Column,
} satisfies Meta<typeof Column>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    horizontalAlign: "center",
    verticalAlign: "center",
    children: "Hello, world!",
  },
};
