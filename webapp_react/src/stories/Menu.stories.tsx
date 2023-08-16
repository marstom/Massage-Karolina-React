import type { StoryObj } from "@storybook/react";
import { Menu } from "../ui/molecules/Menu";
import { Footer } from "../ui/molecules/Footer";
import { ApolloProvider } from "@apollo/client";
import { client } from "../apolloClient";
import { MemoryRouter } from "react-router-dom";

const meta = {
  title: "Karolina/Menu",
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

export const FooterComponent = () => {
  return (
    <ApolloProvider client={client}>
      <Footer />
    </ApolloProvider>
  );
};

export const MenuComponent = () => {
  return (
    <ApolloProvider client={client}>
      <MemoryRouter>
        <Menu />
      </MemoryRouter>
    </ApolloProvider>
  );
};
