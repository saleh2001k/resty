import { expect, test, describe } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import History from "./index";

const sampleHistory = [
  { method: "GET", url: "https://example.com/api/get" },
  { method: "POST", url: "https://example.com/api/post" },
  { method: "PUT", url: "https://example.com/api/put" },
  { method: "DELETE", url: "https://example.com/api/delete" },
];

describe("History Component", () => {
  test("renders correctly", () => {
    const { container } = render(<History history={sampleHistory} />);
    expect(container.querySelector(".history")).not.toBeNull();
    expect(container.querySelectorAll(".history-item")).toHaveLength(
      sampleHistory.length
    );
  });
});
