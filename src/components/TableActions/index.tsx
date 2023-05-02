import React, { memo, useCallback } from "react";

import { TableActionsStyled } from "../../styles/components/table-actions.styled";

import { Button } from "@material-ui/core";

interface Props {
  readonly onLoadCsv?: (csv: Array<string[]>) => void;
  readonly existCSV?: boolean;
}

export const TableActions = memo<Props>(({ onLoadCsv, existCSV }) => {
  const handleImportCsv = useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".csv";

    const reader = new FileReader();

    reader.onload = function () {
      const results: Array<string[]> = [];

      const data = reader.result as string;
      const lines = data.split("\n");

      lines.forEach((line) => {
        if (line.length === 0) return;

        const information = line.split(",");
        results.push(information);
      });

      if (onLoadCsv) onLoadCsv(results);
    };

    input.onchange = function (event) {
      const files = input.files as FileList;

      if (!files[0]) return;

      reader.readAsText(files[0]);
    };

    input.click();
  }, [onLoadCsv]);

  return (
    <TableActionsStyled>
      <h1 className="t-a-title">NALA Organigram</h1>
      <div className="t-a-btns">
        <Button
          className="t-a-btns__btn"
          variant="outlined"
          disabled={!existCSV}
        >
          Print
        </Button>
        <Button
          className="t-a-btns__btn"
          variant="outlined"
          disabled={!existCSV}
        >
          Export as CSV
        </Button>

        {!existCSV && (
          <Button
            className="t-a-btns__btn"
            variant="contained"
            onClick={handleImportCsv}
          >
            Import CSV
          </Button>
        )}
      </div>
    </TableActionsStyled>
  );
});

TableActions.displayName = "TableActions";
