import { expect, test, describe } from "vitest";
import { render } from "@testing-library/react";
import Results from "./index";
import "@testing-library/jest-dom";

describe("Results component", () => {
  test("renders loading state", () => {
    const wrapper = render(<Results loading={true} />);
    const loadingText = wrapper.getByText("Loading...");
    expect(loadingText).toBeTruthy();
  });
});
