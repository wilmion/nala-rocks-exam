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

export const ModalTableActionsStyled = styled.section`
  display: flex;
  flex-direction: column;

  .m-t-a-preview {
    font-size: 14px;
    line-height: 28px;
    padding: 24px;
    width: fit-content;
  }

  .m-t-a-btns {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 24px;
  }
`;
