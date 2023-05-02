import React, { memo, useCallback, useEffect, useMemo, useState } from "react";

import { TableActionsStyled } from "../../styles/components/table-actions.styled";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@material-ui/core";

interface Props {
  readonly onLoadCsv?: (csv: Array<string[]>) => void;
  readonly existCSV?: boolean;
}

export const TableActions = memo<Props>(({ onLoadCsv, existCSV }) => {
  const [month, setMonth] = useState("");
  const [csvData, setCsvData] = useState<Array<string[]>>([[]]);

  const months = useMemo(() => {
    const bodyData = csvData.filter((_, i) => i !== 0);

    const result: string[] = [];

    bodyData.forEach((row) => {
      const exist = result.find((r) => r === row[0]);

      if (!exist) result.push(row[0]);
    });

    return result;
  }, [csvData]);

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

      setCsvData(results);
    };

    input.onchange = function (event) {
      const files = input.files as FileList;

      if (!files[0]) return;

      reader.readAsText(files[0]);
    };

    input.click();
  }, []);

  const handleChangeMonth: SelectProps["onChange"] = (event) => {
    setMonth(event.target.value as string);
  };

  const handleFilterMonth = useCallback(() => {
    const result = csvData.filter((data) => data[0] === month);
    const data = [[...csvData[0]], ...result];

    console.log(data);

    if (onLoadCsv && data[1]) onLoadCsv(data);
  }, [csvData, month, onLoadCsv]);

  useEffect(() => {
    if (months[0]) setMonth(months[0]);
  }, [months]);

  useEffect(handleFilterMonth, [handleFilterMonth]);

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

        {existCSV && (
          <FormControl>
            <InputLabel id="month-select-label">Month</InputLabel>
            <Select
              labelId="month-select-label"
              id="month-select"
              label="Month"
              className="t-a-control-select"
              value={month}
              onChange={handleChangeMonth}
            >
              {months.map((month) => (
                <MenuItem key={`month-select-item-${month}`} value={month}>
                  {month}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

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
