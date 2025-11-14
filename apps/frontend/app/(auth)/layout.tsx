import React, { FC, ReactNode } from "react";
import AuthLayout from "@/components/layout/AuthLayout";

interface AuthSegmentLayoutProps {
  children: ReactNode;
}

const AuthSegmentLayout: FC<AuthSegmentLayoutProps> = ({ children }) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default AuthSegmentLayout;
