import React from "react";

import Modal from "@material-ui/core/Modal";
import { Typography } from "@material-ui/core";
import { ModalStyled } from "../../styles/components/modal.styled";

interface Props {
  readonly title: string;
  readonly open: boolean;
  readonly handleClose: () => void;
  readonly children?: React.ReactNode;
}

export const ModalCustom = ({ open, title, handleClose, children }: Props) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalStyled>
        <Typography variant="h6" component="h2" className="m-title">
          {title}
        </Typography>
        {children}
      </ModalStyled>
    </Modal>
  );
};
