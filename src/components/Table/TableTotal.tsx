import React from "react";

import { TableTotalStyled } from "../../styles/components/table.styled";

export const TableTotal = () => {
  return (
    <TableTotalStyled>
      <span className="t-t-label">Total in payroll</span>
      <span className="t-t-value">$ 90,0141,41717.00 USD</span>
    </TableTotalStyled>
  );
};
