import React from "react";

import { English, Spanish } from "@constant/languaje.constant";

import { Header } from "@components/Header";

import { fireEvent, render, screen, within } from "@testing-library/react";

describe("<Header />", () => {
  it("Should be languaje texts", async () => {
    render(<Header la={English} onChangeLanguaje={() => null} />);

    const labelLanguaje = await screen.findByTestId("header-label");

    expect(labelLanguaje.textContent).toBe("Languaje");
  });

  it("Should be execute onchangeLanguaje", async () => {
    const stub = jest.fn();

    render(<Header la={English} onChangeLanguaje={stub} />);

    fireEvent.mouseDown(screen.getByRole("button"));

    const listbox = within(screen.getByRole("listbox"));

    fireEvent.click(listbox.getByText(/Spanish/i));

    expect(stub).toBeCalledTimes(2);
    expect(stub).toBeCalledWith(Spanish);
  });
});
