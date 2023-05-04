import React from "react";

import { TableMetadata } from "@components/Table/TableMetadata";

import { render, screen } from "@testing-library/react";

describe("<TableMetadata />", () => {
  it("Should metadata in styles and text", () => {
    render(
      <TableMetadata
        metadata={{ key: "12", value: "TEST VALUE", color: "#fff" }}
      />
    );

    const span = screen.getByText(/TEST VALUE/i);

    expect(span).toBeInTheDocument();
    expect(span.style.color).toBe("rgb(255, 255, 255)");
  });
});
