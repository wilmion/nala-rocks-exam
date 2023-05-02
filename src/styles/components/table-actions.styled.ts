import styled from "styled-components";

export const TableActionsStyled = styled.section`
  width: 100%;
  padding: 24px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .t-a-title {
    font-size: 26px;
    font-weight: bolder;
    text-transform: uppercase;
    color: #1e2432;
  }

  .t-a-btns {
    display: flex;
    column-gap: 18px;
  }

  .t-a-control-select {
    width: 120px;
  }
`;
