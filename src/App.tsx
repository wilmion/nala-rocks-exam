import React, { useMemo, useState } from "react";

import { PrimordialLayoutStyled } from "./styles/Layouts/primordial-layout.styled";

import { Header } from "./components/Header";
import { TableActions } from "./components/TableActions";
import { TableTotal } from "./components/Table/TableTotal";
import { TableCustom } from "./components/Table";

function App() {
  const [data, setData] = useState<string[][]>([[]]);

  const existCSV = useMemo(() => {
    return data[0] && data[0].length > 0;
  }, [data]);

  const bodyData = useMemo(() => data.filter((_, i) => i !== 0), [data]);

  const total: number = useMemo(() => {
    if (!existCSV) return 0;

    const salaries = bodyData.map((data) => Number(data[4]) || 0);

    return salaries.reduce((s1, s2) => s1 + s2);
  }, [bodyData, existCSV]);

  return (
    <div>
      <Header />
      <PrimordialLayoutStyled>
        <TableActions onLoadCsv={setData} existCSV={existCSV} />
        <TableCustom headers={data[0]} bodyData={bodyData} />
        <TableTotal total={total} />
      </PrimordialLayoutStyled>
    </div>
  );
}

export default App;
