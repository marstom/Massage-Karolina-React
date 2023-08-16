import type { StoryObj } from "@storybook/react";
import AddCommentForm from "../ui/atoms/AddCommentForm";
import React from "react";
import UnderlineInputContactForm from "../ui/atoms/UnderlineInputContactForm";

const meta = {
  title: "Karolina/Forms",
  // component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  component: AddCommentForm,
  parameters: {
    //   More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ContactFormStandardWithParams: Story = {
  args: {
    addCommentMutation: (data) => {},
    addCommentloading: false,
    addCommenterror: undefined,
    postId: "1",
  },
};

export const UnderlinedInputContactFormShow = () => (
  <UnderlineInputContactForm />
);
