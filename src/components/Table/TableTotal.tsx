import React from "react";

import { TableTotalStyled } from "../../styles/components/table.styled";

interface Props {
  readonly total?: number;
}

export const TableTotal = ({ total = 0 }: Props): JSX.Element => {
  return (
    <TableTotalStyled>
      <span className="t-t-label">Total in payroll</span>
      <span className="t-t-value">{total.toFixed(2)} USD</span>
    </TableTotalStyled>
  );
};
