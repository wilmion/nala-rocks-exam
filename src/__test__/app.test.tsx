import React from "react";

import App from "../App";

import { render } from "@testing-library/react";

describe("<App />", () => {
  beforeEach(() => {});

  it("True", () => {
    const { container } = render(<App />);

    expect(container).toBeInTheDocument();
  });
});
