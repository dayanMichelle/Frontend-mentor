import React from "react";
import "../../index.css";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AnuncioFreeDays } from "./AnuncioFreeDays";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/AnuncioFreeDays",
  component: AnuncioFreeDays,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof AnuncioFreeDays>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AnuncioFreeDays> = () => (
  <AnuncioFreeDays />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
