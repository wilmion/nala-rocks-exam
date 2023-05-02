import React from "react";

import { PrimordialLayoutStyled } from "./styles/Layouts/primordial-layout.styled";

import { Header } from "./components/Header";
import { TableActions } from "./components/TableActions";
import { TableTotal } from "./components/Table/TableTotal";
import { TableCustom } from "./components/Table";

function App() {
  return (
    <div>
      <Header />
      <PrimordialLayoutStyled>
        <TableActions />
        <TableCustom />
        <TableTotal />
      </PrimordialLayoutStyled>
    </div>
  );
}

export default App;
