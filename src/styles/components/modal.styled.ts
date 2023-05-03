import styled from "styled-components";

export const ModalStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;

  .m-title {
    font-size: 24px;
    text-align: center;
  }
`;
