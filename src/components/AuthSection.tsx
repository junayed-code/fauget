"use client";

import { useRef } from "react";
import Link from "next/link";
import Modal from "./shared/Modal";
import Button from "./shared/Button";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import { useSearchParams, useRouter } from "next/navigation";

function AuthSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const modalRef = useRef<HTMLDialogElement>(null);
  const modal = searchParams.get("modal");
  const isModalOpen = modal === "signin" || modal === "signup";

  return (
    <div className="hidden lg:flex items-center gap-x-3">
      <Link href="/?modal=signin" replace>
        <Button>Sign in</Button>
      </Link>
      <Link href="/?modal=signup" replace>
        <Button styleRole="secondary">Sign up</Button>
      </Link>

      <Modal
        open={isModalOpen}
        modalRef={modalRef}
        onClose={() => router.replace(`/`)}
      >
        {modal === "signin" && <SignInForm />}
        {modal === "signup" && <SignUpForm />}
      </Modal>
    </div>
  );
}

export default AuthSection;
