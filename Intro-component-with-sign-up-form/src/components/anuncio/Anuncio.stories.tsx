import React from "react";
import "../../index.css";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Anuncio } from "./Anuncio";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Generics/Anuncio",
  component: Anuncio,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Anuncio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Anuncio> = (args) => (
  <Anuncio {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: (
    <>
      <p>
        Compra ya<span>Pero ya</span>
      </p>
    </>
  ),
};
