import { expect, test, describe, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Form from "./index";
import "@testing-library/jest-dom";

test("Form renders without errors", () => {
  const { getByText, getByLabelText } = render(<Form />);
  getByText("URL:");
  getByLabelText("URL:");
  getByText("GO!");
});
