import LoginForm from "@/components/features/auth/components/LoginForm";
import { useState } from "react";

export default function LoginPage() {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100%" }}>
      <LoginForm />
    </div>
  );
}
