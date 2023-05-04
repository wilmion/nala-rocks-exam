import React from "react";

import { AdviceCSV } from "@components/AdviceCsv";

import { render } from "@testing-library/react";

describe("<AdviceCSV />", () => {
  it("Should match snapshot", () => {
    const { asFragment } = render(<AdviceCSV text="HELPER TEXT" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
