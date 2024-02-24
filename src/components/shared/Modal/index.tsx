import { useEffect, type ReactNode, type RefObject } from "react";
import styles from "./styles.module.css";

function Modal({
  open,
  children,
  modalRef,
  onClose,
}: {
  open?: boolean;
  children: ReactNode;
  modalRef?: RefObject<HTMLDialogElement>;
  onClose?: (e: any) => any;
}) {
  useEffect(() => {
    if (open) modalRef?.current?.showModal();
    else modalRef?.current?.close();
  }, [open, modalRef]);

  return (
    <dialog ref={modalRef} className={styles.modal} onClose={onClose}>
      <div className={styles.modalBox}>
        <form method="dialog" className={styles.modalCloseBtn}>
          <button>&times;</button>
        </form>
        {children}
      </div>
    </dialog>
  );
}

export const openModal = (modalRef: RefObject<HTMLDialogElement>) => {
  modalRef.current?.showModal();
};

export default Modal;
