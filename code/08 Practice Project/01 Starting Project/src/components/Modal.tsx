import {
  ComponentPropsWithoutRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { createPortal } from "react-dom";

interface ModalHandle {
  open: () => void;
}

interface ModalProps extends ComponentPropsWithoutRef<"dialog"> {
  open: boolean;
  onClose: () => void;
}

const Modal = forwardRef<ModalHandle, ModalProps>(function Modal(
  { open, children, onClose, className = "" }: ModalProps,
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);
  const modal = dialog.current;

  useEffect(() => {
    if (open && modal) modal.showModal();

    return () => {
      if (modal) modal.close();
    };
  }, [open]);

  // Expose upwards
  useImperativeHandle(ref, () => {
    return {
      open() {
        console.log("Opening Modal");
        modal?.showModal();
      },
    };
  });

  return createPortal(
    <>
      <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
        {children}
      </dialog>
    </>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
