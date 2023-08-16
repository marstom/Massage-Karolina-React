import React from "react";
import { server } from "../../../mocks/server";
import { render } from "@testing-library/react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../../apolloClient";
import { MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import { FullPostPage } from "../FullPostPage";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
describe("Fill despliay", () => {
  it("should display page details", async () => {
    // const history = createMemoryHistory(); // Create a memory history
    const history = createMemoryHistory();
    const { container, findByText, rerender } = render(
      <ApolloProvider client={client}>
        <MemoryRouter initialEntries={[`/blog/1`]} initialIndex={1}>
          <FullPostPage />
        </MemoryRouter>
      </ApolloProvider>
    );
    const firstPostTitle = await findByText(
      "Masaż tantryczny jest rodzajem pracy z dotykiem"
    );

    expect(firstPostTitle).toBeVisible();
  });
});
