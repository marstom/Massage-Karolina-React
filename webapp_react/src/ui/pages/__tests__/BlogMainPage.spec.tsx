import React from "react";
import { server } from "../../../mocks/server";
import { BlogMainPage } from "../BlogMainPage";
import { fireEvent, render, screen } from "@testing-library/react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../../apolloClient";
import { router } from "../../../router";

import { MemoryRouter, RouterProvider } from "react-router-dom";

beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.

afterAll(() => server.close());

describe("This is blog tests", () => {
  it("should render all block posts from api mock properly and should match to snapshot", async () => {
    const { container, findByText } = render(
      <ApolloProvider client={client}>
        <MemoryRouter>
          <BlogMainPage />
        </MemoryRouter>
      </ApolloProvider>
    );

    const firstPostTitle = await findByText("Co to jest masaż tantryczny?");
    expect(firstPostTitle).toMatchInlineSnapshot(`
      <h1>
        Co to jest masaż tantryczny?
      </h1>
    `);
    expect(container).toMatchSnapshot();
  });

  it("Should open blog-post on click 'read more' button, and display full content", async () => {
    // Given I am on home page
    const { container, findByText, rerender } = render(
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    );
    // When I go to blog
    const blog = await screen.findByText("Blog");
    fireEvent.click(blog);
    // Then I can see read more link
    const firstReadMoreOccurence = await screen.findByText("Czytaj dalej...", {
      selector: 'a[href="/blog/1"]',
    });

    // Given I click read more link
    fireEvent.click(firstReadMoreOccurence);

    // Then I can see full article and comments
    const firstPostTitle = await findByText("Co to jest masaż tantryczny?");
    expect(container).toHaveTextContent("Nice post");
    expect(container).toHaveTextContent("Test author");
  });
});
