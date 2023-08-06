import React from "react";
import { server } from "../../../mocks/server";
import { BlogMainPage } from "../BlogMainPage";
import { render, waitFor } from "@testing-library/react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../../apolloClient";
import { BrowserRouter } from "react-router-dom";

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
        <BrowserRouter>
          <BlogMainPage />
        </BrowserRouter>
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
});
