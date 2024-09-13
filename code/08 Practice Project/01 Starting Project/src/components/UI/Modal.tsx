import {
  ComponentPropsWithoutRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { createPortal } from "react-dom";

export interface ModalHandle {
  open: () => void;
}

interface ModalProps extends ComponentPropsWithoutRef<"dialog"> {
  onClose: () => void;
}

const Modal = forwardRef<ModalHandle, ModalProps>(function Modal(
  { children, onClose, className = "" }: ModalProps,
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);
  const modal = dialog.current;

  // Expose upwards
  useImperativeHandle(ref, () => {
    return {
      open() {
        if (modal) {
          console.log("Opening Modal");
          modal.showModal();
        }
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
