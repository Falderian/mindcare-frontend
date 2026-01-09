"use client";
import { SetStateAction, useCallback, useMemo, useState } from "react";
import { BaseModal } from "../BaseModal";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: SetStateAction<boolean>) => void;
};

export const AuthModal = ({ isOpen, setIsOpen }: Props) => {
  const [authType, setAuthType] = useState<"sign-in" | "sign-up">("sign-up");

  const authForm = useMemo(
    () => (authType === "sign-in" ? <SignInForm /> : <SignUpForm />),
    [authType]
  );

  return (
    <BaseModal open={isOpen} onClose={() => setIsOpen(false)}>
      {authForm}
    </BaseModal>
  );
};
