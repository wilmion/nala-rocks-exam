import styled from "styled-components";

export const TableStyled = styled.section`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 8px;
  padding: 24px;

  & .MuiTableCell-head {
    background-color: #1e2432;
    color: white;
  }

  .t-row-body:nth-of-type(odd) {
    background-color: rgba(30, 36, 50, 0.1);
  }

  .t-row-body-mtd {
    font-size: 12px;
    font-weight: 600;
  }

  .t-row-body-el {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }

  .t-row-body-img {
    width: 32px;
    height: 32px;
    border-radius: 100%;
    border: solid 1px #1e2432;
    cursor: pointer;
  }
`;

export const TableTotalStyled = styled.section`
  width: fit-content;
  display: flex;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 8px;

  .t-t-label {
    font-size: 20px;
    font-weight: bold;
    padding: 24px;
  }

  .t-t-value {
    font-size: 18px;
    font-weight: bolder;
    padding: 24px;
    background-color: #1e2432;
    color: white;
    border-radius: 0 8px 8px 0;
  }
`;
