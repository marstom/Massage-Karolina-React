import type { StoryObj } from "@storybook/react";
import AddCommentForm from "../ui/atoms/AddCommentForm";

const meta = {
  title: "Karolina/TestComponents",
  // component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    //   More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const My = () => {
  return (
    <>
      <div>Hejko </div>
    </>
  );
};

export const ContactFormStandard = () => {
  return (
    <AddCommentForm
      addCommentMutation={() => {}}
      addCommentloading={false}
      addCommenterror={undefined}
      postId={"1"}
    />
  );
};
