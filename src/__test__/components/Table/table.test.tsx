import React from "react";
import userEvent from "@testing-library/user-event";

import { TableCustom } from "@components/Table";

import { fireEvent, render, screen } from "@testing-library/react";

describe("<Table />", () => {
  let headers: string[] = [];
  let body: Array<string[]> = [[]];

  beforeEach(() => {
    headers = ["A", "B", "C"];
    body = [
      ["D", "F", "G"],
      ["H", "I", "J"],
    ];
  });

  it("Should have 3 headers elements and 2 row with 3 elements on the body", () => {
    render(<TableCustom metadata={[]} headers={headers} bodyData={body} />);

    const headersEl = screen.getAllByTestId("table-header-item");
    const elements = screen.getAllByTestId("table-body-item");

    expect(headersEl.length).toBe(3);
    expect(elements.length).toBe(6);
  });

  it("Should ejecute onUpdateHeaders() props", async () => {
    const stub = jest.fn();

    render(
      <TableCustom
        metadata={[]}
        headers={headers}
        bodyData={body}
        onUpdateHeaders={stub}
      />
    );

    const headersEl = screen.getAllByTestId("table-header-item");
    const target = headersEl[0];

    await userEvent.click(target);
    await userEvent.keyboard("gencia");
    fireEvent.blur(target);

    expect(stub).toBeCalledTimes(1);
    expect(stub).toBeCalledWith(["Agencia", "B", "C"]);
  });
});
