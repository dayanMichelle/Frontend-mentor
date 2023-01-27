import React, { useState } from "react";

import { Label } from "./Label";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Label",
  component: Label,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  const [value, setValue] = useState("");
  return <Label {...args} number={value} setNumber={setValue} />;
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  text: "enter name",
  placeholder: "e.g. dayan arang",
  width: "300px",
};
