"use client";
import { SetStateAction, useCallback, useMemo, useState } from "react";
import { Box, Fade } from "@mui/material"; // Add this import
import { BaseModal } from "../BaseModal";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: SetStateAction<boolean>) => void;
};

export type AuthType = "sign-in" | "sign-up";

export const AuthModal = ({ isOpen, setIsOpen }: Props) => {
  const [authType, setAuthType] = useState<AuthType>("sign-up");

  const authForm = useMemo(
    () =>
      authType === "sign-in" ? (
        <SignInForm setAuthType={setAuthType} />
      ) : (
        <SignUpForm setAuthType={setAuthType} />
      ),
    [authType],
  );

  return (
    <BaseModal open={isOpen} onClose={() => setIsOpen(false)}>
      <Fade in={true} key={authType + Math.random()}>
        <Box>{authForm}</Box>
      </Fade>
    </BaseModal>
  );
};
