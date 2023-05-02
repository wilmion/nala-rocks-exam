import React from "react";

import { TableActionsStyled } from "../../styles/components/table-actions.styled";

import { Button } from "@material-ui/core";

export const TableActions = () => {
  return (
    <TableActionsStyled>
      <h1 className="t-a-title">NALA Organigram</h1>
      <div className="t-a-btns">
        <Button className="t-a-btns__btn" variant="outlined">
          Print
        </Button>
        <Button className="t-a-btns__btn" variant="outlined">
          Export as CSV
        </Button>
        <Button className="t-a-btns__btn" variant="contained">
          Import CSV
        </Button>
      </div>
    </TableActionsStyled>
  );
};
