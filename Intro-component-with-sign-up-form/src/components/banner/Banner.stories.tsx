import React from "react";
import "../../index.css";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Banner } from "./Banner";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Generics/Banner",
  component: Banner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Banner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'How you like that',
    content : "This fun project will be an excellent way to practice DOM manipulation and form validation while also putting your HTML and CSS skills to the test."
};
