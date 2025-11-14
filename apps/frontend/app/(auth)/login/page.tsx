import React, { FC } from "react";
import LoginForm from "@/components/features/auth/LoginForm";

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100%" }}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
