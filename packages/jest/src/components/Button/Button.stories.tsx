import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    size: "l",
    color: "outlined",
    children: "버튼",
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const Outlined = Template.bind({});

export const Blue = Template.bind({});
Blue.args = {
  color: "blue",
};
