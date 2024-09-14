import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export interface ModalHandle {
  open: () => void;
}

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = forwardRef<ModalHandle, ModalProps>(function Modal(
  { children, onClose },
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);

  // Expose upwards
  useImperativeHandle(ref, () => {
    return {
      open() {
        if (dialog.current) {
          console.log("Opening Modal");
          dialog.current.showModal();
        }
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="modal" onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
