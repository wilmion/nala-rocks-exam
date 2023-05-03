import { useCallback, useState } from "react";

export function useModal() {
  const [open, setOpen] = useState(false);

  const handleOpenModal = useCallback(() => setOpen(true), []);
  const handleCloseModal = useCallback(() => setOpen(false), []);
  const toogleModal = useCallback(() => setOpen((current) => !current), []);

  return {
    open,
    handleOpenModal,
    handleCloseModal,
    toogleModal,
  };
}
