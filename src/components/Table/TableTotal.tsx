import React from "react";

import { TableTotalStyled } from "../../styles/components/table.styled";

import type { ILanguaje } from "../../interface/app.interfaces";

interface Props {
  readonly total?: number;
  readonly la: ILanguaje;
}

export const TableTotal = ({ total = 0, la }: Props): JSX.Element => {
  return (
    <TableTotalStyled>
      <span className="t-t-label">{la.totalLabel}</span>
      <span className="t-t-value">{total.toFixed(2)} USD</span>
    </TableTotalStyled>
  );
};
