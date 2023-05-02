import React, { useState } from "react";

import { PrimordialLayoutStyled } from "./styles/Layouts/primordial-layout.styled";

import { Header } from "./components/Header";
import { TableActions } from "./components/TableActions";
import { TableTotal } from "./components/Table/TableTotal";
import { TableCustom } from "./components/Table";

function App() {
  const [data, setData] = useState<string[][]>([[]]);

  const bodyData = data.filter((_, i) => i !== 0);

  return (
    <div>
      <Header />
      <PrimordialLayoutStyled>
        <TableActions onLoadCsv={setData} />
        <TableCustom headers={data[0]} bodyData={bodyData} />
        <TableTotal />
      </PrimordialLayoutStyled>
    </div>
  );
}

export default App;
