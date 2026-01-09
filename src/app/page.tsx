"use client";
import { AuthModal } from "@/components/forms/AuthModal";
import { Button } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>auth</Button>
      <AuthModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
