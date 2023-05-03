import React, { memo, useEffect, useState } from "react";

import { English, Spanish } from "@constant/languaje.constant";

import { HeaderStyled } from "@styles/components/header.styled";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import type { ILanguaje } from "@interface/app.interfaces";

interface Props {
  readonly onChangeLanguaje: (languaje: ILanguaje) => void;
  readonly la: ILanguaje;
}

export const Header = memo<Props>(({ onChangeLanguaje, la }) => {
  const [languaje, setLanguaje] = useState(1);

  useEffect(() => {
    if (languaje === 1) onChangeLanguaje(English);
    if (languaje === 2) onChangeLanguaje(Spanish);
  }, [languaje, onChangeLanguaje]);

  return (
    <HeaderStyled>
      <img className="h-logo" src="/nala-logo.svg" alt="Go to main page" />

      <FormControl>
        <InputLabel id="languaje-select-label">{la.languajeLabel}</InputLabel>
        <Select
          labelId="languaje-select-label"
          id="languaje-select"
          label={la.languajeLabel}
          className="h-control-select"
          value={languaje}
          onChange={(e) => setLanguaje(e.target.value as number)}
        >
          <MenuItem value={1}>{la.languajeLabelOpt1}</MenuItem>
          <MenuItem value={2}>{la.languajeLabelOpt2}</MenuItem>
        </Select>
      </FormControl>
    </HeaderStyled>
  );
});

Header.displayName = "Header";
