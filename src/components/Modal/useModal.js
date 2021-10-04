import { useCallback, useContext, useEffect } from "react";
import { ModalContext } from "./ModalContext";

const useModal = (modal, closeOnOverlayClick = true) => {
  const { onPresent, onDismiss, setCloseOnOverlayClick } = useContext(ModalContext);
  const onPresentCallback = useCallback(() => {
    onPresent(modal);
  }, [modal, onPresent]);

  useEffect(() => {
    setCloseOnOverlayClick(closeOnOverlayClick);
  }, [closeOnOverlayClick, setCloseOnOverlayClick]);

  return [onPresentCallback, onDismiss];
};

export default useModal;
