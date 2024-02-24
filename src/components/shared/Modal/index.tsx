"use client";

import styles from "./styles.module.css";
import SignInForm from "@/components/SignInForm";
import SignUpForm from "@/components/SignUpForm";
import { CloseIcon } from "@/components/icons";
import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function Modal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const modalRef = useRef<HTMLDialogElement>(null);

  const modal = searchParams.get("modal");
  const isModalOpen = modal === "signin" || modal === "signup";

  useEffect(() => {
    if (isModalOpen) modalRef?.current?.showModal();
    else modalRef?.current?.close();
  }, [isModalOpen, modalRef]);

  return (
    <dialog
      ref={modalRef}
      className={styles.modal}
      onClose={() => router.replace("/")}
    >
      <div className={styles.modalBox}>
        <form method="dialog" className={styles.modalCloseBtn}>
          <button>
            <CloseIcon />
          </button>
        </form>
        {modal === "signin" && <SignInForm />}
        {modal === "signup" && <SignUpForm />}
      </div>
    </dialog>
  );
}

export default Modal;
