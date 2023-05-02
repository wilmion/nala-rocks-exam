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

export const TableCustom = () => {
  return (
    <TableStyled>
      <TableContainer component={Paper}>
        <Table aria-label="asdaw">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Mes</TableCell>
              <TableCell align="right">Entry date</TableCell>
              <TableCell align="right">Division</TableCell>
              <TableCell align="right">Area</TableCell>
              <TableCell align="right">Sub-area</TableCell>
              <TableCell align="right">ID Lider</TableCell>
              <TableCell align="right">Nivel Jerarquico</TableCell>
              <TableCell align="right">Gross salary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className="t-row-body">
              <TableCell>Juan Perez</TableCell>
              <TableCell align="right">3456345336</TableCell>
              <TableCell align="right">5-2020</TableCell>
              <TableCell align="right">01/04/2019</TableCell>
              <TableCell align="right">Ventas</TableCell>
              <TableCell align="right">Marketing</TableCell>
              <TableCell align="right">Digital</TableCell>
              <TableCell align="right">32818181</TableCell>
              <TableCell align="right">Manager</TableCell>
              <TableCell align="right">800000 USD</TableCell>
            </TableRow>
            <TableRow className="t-row-body">
              <TableCell>Juan Perez</TableCell>
              <TableCell align="right">3456345336</TableCell>
              <TableCell align="right">5-2020</TableCell>
              <TableCell align="right">01/04/2019</TableCell>
              <TableCell align="right">Ventas</TableCell>
              <TableCell align="right">Marketing</TableCell>
              <TableCell align="right">Digital</TableCell>
              <TableCell align="right">32818181</TableCell>
              <TableCell align="right">Manager</TableCell>
              <TableCell align="right">800000 USD</TableCell>
            </TableRow>
            <TableRow className="t-row-body">
              <TableCell>Juan Perez</TableCell>
              <TableCell align="right">3456345336</TableCell>
              <TableCell align="right">5-2020</TableCell>
              <TableCell align="right">01/04/2019</TableCell>
              <TableCell align="right">Ventas</TableCell>
              <TableCell align="right">Marketing</TableCell>
              <TableCell align="right">Digital</TableCell>
              <TableCell align="right">32818181</TableCell>
              <TableCell align="right">Manager</TableCell>
              <TableCell align="right">800000 USD</TableCell>
            </TableRow>
            <TableRow className="t-row-body">
              <TableCell>Juan Perez</TableCell>
              <TableCell align="right">3456345336</TableCell>
              <TableCell align="right">5-2020</TableCell>
              <TableCell align="right">01/04/2019</TableCell>
              <TableCell align="right">Ventas</TableCell>
              <TableCell align="right">Marketing</TableCell>
              <TableCell align="right">Digital</TableCell>
              <TableCell align="right">32818181</TableCell>
              <TableCell align="right">Manager</TableCell>
              <TableCell align="right">800000 USD</TableCell>
            </TableRow>
            <TableRow className="t-row-body">
              <TableCell>Juan Perez</TableCell>
              <TableCell align="right">3456345336</TableCell>
              <TableCell align="right">5-2020</TableCell>
              <TableCell align="right">01/04/2019</TableCell>
              <TableCell align="right">Ventas</TableCell>
              <TableCell align="right">Marketing</TableCell>
              <TableCell align="right">Digital</TableCell>
              <TableCell align="right">32818181</TableCell>
              <TableCell align="right">Manager</TableCell>
              <TableCell align="right">800000 USD</TableCell>
            </TableRow>
            <TableRow className="t-row-body">
              <TableCell>Juan Perez</TableCell>
              <TableCell align="right">3456345336</TableCell>
              <TableCell align="right">5-2020</TableCell>
              <TableCell align="right">01/04/2019</TableCell>
              <TableCell align="right">Ventas</TableCell>
              <TableCell align="right">Marketing</TableCell>
              <TableCell align="right">Digital</TableCell>
              <TableCell align="right">32818181</TableCell>
              <TableCell align="right">Manager</TableCell>
              <TableCell align="right">800000 USD</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </TableStyled>
  );
};
