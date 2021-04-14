import { ControlPanel, ControlPanelArgs } from "../ControlPanel";
import { Story } from "@storybook/react";
import * as React from "react";
import { Mail } from "@material-ui/icons";

const Template: Story<ControlPanelArgs> = (args) => <ControlPanel {...args} />;

export const Basic = Template.bind({});

let k = true;
let q = false;
let str = "hello";
let num = 69;

Basic.args = {
  name: "Basic",
  pages: [
    {
      title: "Page1",
      icon: <Mail />,
      elements: [
        {
          name: "Option1",
          get() {
            return k;
          },
          set(x: boolean) {
            return (k = x);
          },
          onUpdate() {
            console.log({ k });
          },
        },
        {
          name: "string",
          get() {
            return str;
          },
          set(x: string) {
            return (str = x);
          },
          onUpdate() {
            console.log({ str });
          },
        },
        {
          name: "integer",
          type: "integer",
          get() {
            return num;
          },
          set(x: number) {
            return (num = x);
          },
          onUpdate() {
            console.log({ num });
          },
        },
      ],
    },
    {
      title: "Page2",
      icon: <Mail />,
      elements: [
        {
          name: "Option2",
          get() {
            return q;
          },
          set(x: boolean) {
            return (q = x);
          },
          onUpdate() {
            console.log({ q });
          },
        },
        {
          name: "Option2 k",
          get() {
            return k;
          },
          set(x: boolean) {
            return (k = x);
          },
          onUpdate() {
            console.log({ k });
          },
        },
      ],
    },
  ],
} as ControlPanelArgs;

export default {
  component: ControlPanel,
  title: "ControlPanel",
};
