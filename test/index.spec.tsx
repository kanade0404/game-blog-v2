import { BlogDocument } from "../libs/api/query";
import Index from "../pages/index";
import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const mocks = [
  {
    request: {
      query: BlogDocument,
    },
    result: {
      data: {
        allBlogModels: [
          {
            __typename: "BlogModelRecord",
            id: "1",
            title: "title1",
            _status: "published",
            updatedAt: "2022-01-01T00:00:00+01:00",
            createdAt: "2022-01-01T00:00:00+01:00",
            tag: [
              {
                __typename: "TagModelRecord",
                id: "1",
                name: "name1",
                slug: "n1",
              },
            ],
            category: {
              __typename: "CategoryModelRecord",
              id: "1",
              name: "name1",
            },
          },
          {
            __typename: "BlogModelRecord",
            id: "2",
            title: "title2",
            _status: "published",
            updatedAt: "2022-01-02T00:00:00+01:00",
            createdAt: "2022-01-02T00:00:00+01:00",
            tag: [
              {
                __typename: "TagModelRecord",
                id: "2",
                name: "name2",
                slug: "n2",
              },
              {
                __typename: "TagModelRecord",
                id: "3",
                name: "name3",
                slug: "n3",
              },
            ],
            category: {
              __typename: "CategoryModelRecord",
              id: "2",
              name: "name2",
            },
          },
        ],
      },
    },
  },
];
describe("Index", () => {
  it("renders a heading", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Index />
      </MockedProvider>,
    );
    const title1 = await screen.findByText("title1");
    expect(title1).not.toBeNull();
    const title2 = await screen.findByText("title2");
    expect(title2).not.toBeNull();
  });
});
