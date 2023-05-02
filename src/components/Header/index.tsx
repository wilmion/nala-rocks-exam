import React from "react";

import { HeaderStyled } from "../../styles/components/header.styled";

import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

export const Header = () => {
  return (
    <HeaderStyled>
      <img className="h-logo" src="/nala-logo.svg" alt="Go to main page" />

      <FormControl>
        <InputLabel id="">Languaje</InputLabel>
        <Select
          labelId=""
          id=""
          label=""
          className="h-control-select"
          value={1}
        >
          <MenuItem value={1}>English</MenuItem>
          <MenuItem value={2}>Spanish</MenuItem>
        </Select>
      </FormControl>
    </HeaderStyled>
  );
};
