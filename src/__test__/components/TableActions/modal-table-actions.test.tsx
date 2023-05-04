import React from "react";

import { English } from "@constant/languaje.constant";

import { ModalTableActions } from "@components/TableActions/ModalTableActions";

import { fireEvent, render, screen } from "@testing-library/react";

describe("<ModalTableActions />", () => {
  it("Should be languaje texts", () => {
    render(
      <ModalTableActions
        la={English}
        open={true}
        preview=""
        handleCloseModal={() => null}
        handleConfirm={() => null}
      />
    );

    const btn1 = screen.getByText(/Yes/i);
    const btn2 = screen.getByText(/Nope/i);

    expect(btn1).toBeInTheDocument();
    expect(btn2).toBeInTheDocument();
  });

  it("Should be show preview", () => {
    render(
      <ModalTableActions
        la={English}
        open={true}
        preview="It's a preview for test"
        handleCloseModal={() => null}
        handleConfirm={() => null}
      />
    );

    const preview = screen.getByText(/It's a preview for test/i);

    expect(preview).toBeInTheDocument();
  });

  it("Should be execute 1 times handleConfirm()", () => {
    const handleConfirm = jest.fn();

    render(
      <ModalTableActions
        la={English}
        open={true}
        preview=""
        handleCloseModal={() => null}
        handleConfirm={handleConfirm}
      />
    );

    const btn = screen.getByText(/Yes/i);

    fireEvent.click(btn);

    expect(handleConfirm).toBeCalledTimes(1);
  });

  it("Should be execute 1 times handleClose()", () => {
    const handleClose = jest.fn();

    render(
      <ModalTableActions
        la={English}
        open={true}
        preview=""
        handleCloseModal={handleClose}
        handleConfirm={() => null}
      />
    );

    const btn = screen.getByText(/Nope/i);

    fireEvent.click(btn);

    expect(handleClose).toBeCalledTimes(1);
  });
});
