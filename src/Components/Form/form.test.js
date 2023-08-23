import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from "./index.jsx";

const handleApiCallMock = jest.fn();

describe("Form component", () => {
  it("should render the form", () => {
    const { getByLabelText, getByText } = render(
      <Form handleApiCall={handleApiCallMock} loading={false} />
    );

    expect(getByLabelText("URL:")).toBeInTheDocument();
    expect(getByLabelText("GET")).toBeInTheDocument();
    expect(getByText("GO!")).toBeInTheDocument();
  });

  it("should handle form submission", () => {
    const { getByLabelText, getByText } = render(
      <Form handleApiCall={handleApiCallMock} loading={false} />
    );

    const urlInput = getByLabelText("URL:");
    fireEvent.change(urlInput, { target: { value: "https://example.com" } });

    fireEvent.submit(getByText("GO!"));

    expect(handleApiCallMock).toHaveBeenCalledWith({
      method: "GET",
      url: "https://example.com",
    });
  });

  it("should disable form elements when loading is true", () => {
    const { getByLabelText, getByText } = render(
      <Form handleApiCall={handleApiCallMock} loading={true} />
    );

    const urlInput = getByLabelText("URL:");
    const submitButton = getByText("GO!");

    expect(urlInput).toBeDisabled();
    expect(submitButton).toBeDisabled();
  });
});