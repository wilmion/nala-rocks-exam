import React from "react";

import { English } from "@constant/languaje.constant";

import { TableTotal } from "@components/Table/TableTotal";

import { render, screen } from "@testing-library/react";

describe("<TableTotal />", () => {
  it("Should show languaje", () => {
    render(<TableTotal la={English} />);

    expect(screen.getByText(/Total in payroll/i)).toBeInTheDocument();
  });

  it("Should show price", () => {
    render(<TableTotal la={English} total={25} />);

    expect(screen.getByText(/25.00 USD/i)).toBeInTheDocument();
  });
});
