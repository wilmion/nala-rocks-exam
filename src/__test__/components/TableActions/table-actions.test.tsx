import React from "react";

import { English } from "@constant/languaje.constant";

import { TableActions } from "@components/TableActions";

import { render, screen } from "@testing-library/react";

describe("<TableActions />", () => {
  it("Should show languaje", () => {
    render(<TableActions la={English} setHeaders={() => null} />);

    expect(screen.getByText(/NALA ORGANIGRAM/i)).toBeInTheDocument();
    expect(screen.getByText(/Print/i)).toBeInTheDocument();
    expect(screen.getByText(/Export as CSV/i)).toBeInTheDocument();
    expect(screen.getByText(/Import CSV/i)).toBeInTheDocument();
  });

  it("Should show select when existCSV", () => {
    render(<TableActions la={English} setHeaders={() => null} existCSV />);

    expect(screen.getByTestId("month-select")).toBeInTheDocument();
  });
});
