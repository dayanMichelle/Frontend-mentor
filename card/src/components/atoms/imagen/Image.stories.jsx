import React from "react";
import imageCard from "../../../assets/images/bg-card-back.png";
import imageCardFront from "../../../assets/images/bg-card-front.png";
import { Imagen } from "./Imagen";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Imagen",
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Imagen {...args} />;

export const Back = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Back.args = {
  img: imageCard,
};

export const Front = Template.bind({});

Front.args = {
  img: imageCardFront,
};
