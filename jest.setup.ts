import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

// routerのモック
// https://github.com/scottrippey/next-router-mock#dynamic-routes
jest.mock("next/router", () => require("next-router-mock"));
jest.mock("next/dist/client/router", () => require("next-router-mock"));
