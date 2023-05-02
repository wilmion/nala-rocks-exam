import React, { useMemo, useState } from "react";

import { English } from "./constant/languaje.constant";

import { PrimordialLayoutStyled } from "./styles/Layouts/primordial-layout.styled";

import { Header } from "./components/Header";
import { TableActions } from "./components/TableActions";
import { TableTotal } from "./components/Table/TableTotal";
import { TableCustom } from "./components/Table";

import type { ILanguaje, IMetadataCsv } from "./interface/app.interfaces";

function App() {
  /* CSV */
  const [data, setData] = useState<string[][]>([[]]);
  const [headers, setHeaders] = useState<string[]>([]);

  const [metadata, setMetadata] = useState<IMetadataCsv[]>([]);
  const [languaje, setLanguaje] = useState<ILanguaje>(English);

  const existCSV = useMemo(() => {
    return data[0] && data[0].length > 0;
  }, [data]);

  const total: number = useMemo(() => {
    if (!existCSV) return 0;

    const salaries = data.map((data) => Number(data[4]) || 0);

    return salaries.reduce((s1, s2) => s1 + s2);
  }, [data, existCSV]);

  return (
    <div>
      <Header onChangeLanguaje={setLanguaje} la={languaje} />
      <PrimordialLayoutStyled>
        <TableActions
          onLoadCsv={setData}
          existCSV={existCSV}
          onLoadMetadata={setMetadata}
          la={languaje}
          headers={headers}
          setHeaders={setHeaders}
        />
        <TableCustom
          headers={headers}
          bodyData={data}
          onUpdateHeaders={setHeaders}
          metadata={metadata}
        />
        <TableTotal total={total} la={languaje} />
      </PrimordialLayoutStyled>
    </div>
  );
}

export default App;
