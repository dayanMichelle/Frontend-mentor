import React from "react";
import imgLogo from "../../../assets/images/card-logo.svg";
import { Logo } from "./Logo";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Logo",
  component: Logo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  img: imgLogo,
};

