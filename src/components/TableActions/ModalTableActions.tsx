import React from "react";

import { ModalTableActionsStyled } from "@styles/components/table-actions.styled";

import { ModalCustom } from "../Modal";
import { Button } from "@mui/material";
import { ILanguaje } from "@interface/app.interfaces";

interface Props {
  readonly open: boolean;
  readonly preview: string;
  readonly handleCloseModal: () => void;
  readonly handleConfirm: () => void;
  readonly la: ILanguaje;
}

export const ModalTableActions = ({
  open,
  handleCloseModal,
  preview,
  handleConfirm,
  la,
}: Props) => {
  return (
    <ModalCustom
      title={la.tableActionsModalTitle}
      open={open}
      handleClose={handleCloseModal}
    >
      <ModalTableActionsStyled>
        <p className="m-t-a-preview">{preview}</p>
        <div className="m-t-a-btns">
          <Button
            type="button"
            color="primary"
            variant="contained"
            onClick={handleConfirm}
          >
            {la.tableActionsModalbtn1}
          </Button>
          <Button
            type="button"
            color="secondary"
            variant="outlined"
            onClick={handleCloseModal}
          >
            {la.tableActionsModalbtn2}
          </Button>
        </div>
      </ModalTableActionsStyled>
    </ModalCustom>
  );
};
