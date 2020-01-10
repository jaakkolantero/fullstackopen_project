import React from "react";
import Router from "next/router";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import FocusLock, { MoveFocusInside } from "react-focus-lock";

interface ModalProps {
  children: React.ReactNode;
  name: string;
}

const Modal = ({ children, name }: ModalProps) => {
  return (
    <>
      {Router?.query?.modal === name ? (
        <>
          <RemoveScrollBar />
          <FocusLock>
            <MoveFocusInside>{children}</MoveFocusInside>
          </FocusLock>
        </>
      ) : null}
    </>
  );
};

export default Modal;
