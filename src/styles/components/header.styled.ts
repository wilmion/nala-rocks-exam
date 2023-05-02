import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 36px;
  border-bottom: solid 3px #0a58ca;

  .h-logo {
    width: 100px;
    height: auto;
    cursor: pointer;
  }

  .h-control-select {
    min-width: 120px;
  }
`;
