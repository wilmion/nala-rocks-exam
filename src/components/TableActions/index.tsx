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

import type { ILanguaje, IMetadataCsv } from "../../interface/app.interfaces";

interface Props {
  readonly onLoadCsv?: (csv: Array<string[]>) => void;
  readonly onLoadMetadata?: (metadata: IMetadataCsv[]) => void;
  readonly existCSV?: boolean;
  readonly la: ILanguaje;
}

export const TableActions = memo<Props>(
  ({ onLoadCsv, existCSV, onLoadMetadata, la }) => {
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

    const handleFilterMonth = useCallback(
      (customMonth?: string) => {
        const monthToUse = customMonth || month;

        const result = csvData.filter((data) => data[0] === monthToUse);
        const data = [[...csvData[0]], ...result];

        return data;
      },
      [csvData, month]
    );

    const handleChangeMonthEffect = useCallback(() => {
      const data = handleFilterMonth();
      const monthIndex = months.findIndex((m) => m === month);

      if (monthIndex === -1) return;

      const prevMonth = months[monthIndex + 1];
      const prevData = handleFilterMonth(prevMonth);

      const metadata: IMetadataCsv[] = [];

      data.forEach((el) => {
        const employer = prevData.find((prev) => prev[2] === el[2]);

        if (!employer) {
          return metadata.push({
            key: el[1],
            value: "New employer",
            color: "#2d68d4",
          });
        }

        if (employer[4] !== el[4]) {
          const prevAmount = Number(employer[4]);
          const amount = Number(el[4]);

          return metadata.push({
            key: employer[1],
            value: prevAmount < amount ? "promoted" : "reduced",
            color: prevAmount < amount ? "#019131" : "#dd0c0c",
          });
        }
      });

      if (onLoadMetadata) onLoadMetadata(metadata);
      if (onLoadCsv && data[1]) onLoadCsv(data);
    }, [handleFilterMonth, month, months, onLoadCsv, onLoadMetadata]);

    useEffect(() => {
      if (months[0]) setMonth(months[0]);
    }, [months]);

    useEffect(handleChangeMonthEffect, [handleChangeMonthEffect]);

    return (
      <TableActionsStyled>
        <h1 className="t-a-title">{la.tableActionsTitle}</h1>
        <div className="t-a-btns">
          <Button
            className="t-a-btns__btn"
            variant="outlined"
            disabled={!existCSV}
          >
            {la.tableActionsBtn1}
          </Button>
          <Button
            className="t-a-btns__btn"
            variant="outlined"
            disabled={!existCSV}
          >
            {la.tableActionsBtn2}
          </Button>

          {existCSV && (
            <FormControl>
              <InputLabel id="month-select-label">
                {la.tableActionsLabelMonth}
              </InputLabel>
              <Select
                labelId="month-select-label"
                id="month-select"
                label={la.tableActionsLabelMonth}
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
              {la.tableActionsBtn3}
            </Button>
          )}
        </div>
      </TableActionsStyled>
    );
  }
);

TableActions.displayName = "TableActions";
