import React from "react";

import { TableStyled } from "../../styles/components/table.styled";

import {
  Paper,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TableBody,
  TableCell,
} from "@material-ui/core";
import { TableMetadata } from "./TableMetadata";

import type { IMetadataCsv } from "../../interface/app.interfaces";
import { TableImage } from "./TableImage";

interface Props {
  readonly headers: string[];
  readonly bodyData: Array<string[]>;
  readonly metadata: IMetadataCsv[];
  readonly onUpdateHeaders?: (headers: string[]) => void;
}

export const TableCustom = ({
  headers,
  bodyData,
  metadata,
  onUpdateHeaders,
}: Props) => {
  const findMetadata = (text: string) => {
    const contain = metadata.find((meta) => meta.key === text);

    return contain;
  };

  const handleChangeHeader =
    (text: string): React.FocusEventHandler =>
    (event) => {
      const newText = event.target.textContent;
      const headersCopy = [...headers];
      const headerIndex = headers.findIndex((header) => header === text);

      if (headerIndex === -1) return;

      headersCopy[headerIndex] = newText?.trim() || "";

      if (onUpdateHeaders) onUpdateHeaders(headersCopy);
    };

  return (
    <TableStyled id="nala-table">
      <TableContainer component={Paper}>
        <Table aria-label="asdaw">
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell
                  key={`table-cell-header-${header}-${index}`}
                  align={index !== 0 ? "right" : "left"}
                  contentEditable
                  onBlur={handleChangeHeader(header)}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {bodyData.map((data, iBData) => (
              <TableRow key={`table-row-body-${iBData}`} className="t-row-body">
                {data.map((bodyText, iBDCell) => (
                  <TableCell
                    key={`table-row-body-${iBData}-cell-${bodyText}-${iBDCell}`}
                    align={iBDCell !== 0 ? "right" : "left"}
                  >
                    <TableImage index={iBDCell} content={bodyText} />
                    <TableMetadata metadata={findMetadata(bodyText)} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableStyled>
  );
};
