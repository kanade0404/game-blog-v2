import Index from "../pages";
import { InMemoryCache, gql } from "@apollo/client";
import { MockedProvider } from "@apollo/client/testing";
import React from "react";
import renderer from "react-test-renderer";

const cache = new InMemoryCache();
cache.writeQuery({
  query: gql`
    query Viewer {
      viewer {
        id
        name
        status
      }
    }
  `,
  data: {
    viewer: {
      __typename: "User",
      id: "Baa",
      name: "Baa",
      status: "Healthy",
    },
  },
});

describe("Index", () => {
  it("renders the html we want", async () => {
    const component = renderer.create(
      <MockedProvider cache={cache}>
        <Index />
      </MockedProvider>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
