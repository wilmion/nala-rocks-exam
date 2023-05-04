import React from "react";

import { TableBodyRowCell } from "@components/Table/TableBodyRowCell";

import { render, screen } from "@testing-library/react";

describe("<TableBodyRowCell />", () => {
  it("Should content and not img when the index is diferent to 1", () => {
    render(<TableBodyRowCell content="CONTENT TEST" index={0} />);

    expect(screen.getByText(/CONTENT TEST/i)).toBeInTheDocument();
  });

  it("Should show img when the index is 1", () => {
    render(<TableBodyRowCell content="CONTENT TEST" index={1} />);

    const img = screen.getByTestId("image-row-body");

    expect(img).toBeInTheDocument();
  });
});
