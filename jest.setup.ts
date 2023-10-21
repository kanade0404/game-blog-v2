import "@testing-library/jest-dom";

// routerのモック
// https://github.com/scottrippey/next-router-mock#dynamic-routes
jest.mock("next/router", () => require("next-router-mock"));
jest.mock("next/dist/client/router", () => require("next-router-mock"));
