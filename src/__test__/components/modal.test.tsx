import React from "react";

import { ModalCustom } from "@components/Modal";

import { render, screen } from "@testing-library/react";

describe("<ModalCustom />", () => {
  it("The title can be rendered", () => {
    render(
      <ModalCustom title="Test title" open={true} handleClose={() => null} />
    );

    const title = screen.getByText(/Test title/i);

    expect(title).toBeInTheDocument();
  });
});
