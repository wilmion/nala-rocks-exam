import React from "react";

import { AdviceCSVStyled } from "@styles/components/advice-csv.styled";

import { FindInPage } from "@mui/icons-material";

interface Props {
  readonly text: string;
}

export const AdviceCSV = ({ text }: Props): JSX.Element => {
  return (
    <AdviceCSVStyled>
      <FindInPage className="a-csv-icon" />
      <p className="a-csv-text">{text}</p>
    </AdviceCSVStyled>
  );
};
