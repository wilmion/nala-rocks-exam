import React from "react";

import { ModalStyled } from "@styles/components/modal.styled";

import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";

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
