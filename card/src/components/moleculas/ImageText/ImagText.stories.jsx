import React, { useState } from "react";
import img from '../../../assets/images/bg-card-front.png'
import { ImagText } from "./ImagText";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/ImagText",
  component: ImagText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  return <ImagText {...args} />;
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    children: <p>Hola</p>,
    img:img ,
};
