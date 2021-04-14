import { Story } from "@storybook/react";
import { IntegerElement, IntegerElementProps } from "../Element/integer";

const Template: Story<IntegerElementProps> = (a) => <IntegerElement {...a} />;

export const Default = Template.bind({});

let i = 0;

Default.args = {
  name: "Test",
  variable: {
    name: "i",
    get() {
      return i;
    },
    set(x) {
      return (i = x);
    },
  },
} as IntegerElementProps;

export default {
  component: IntegerElement,
  title: "IntegerElement",
};
