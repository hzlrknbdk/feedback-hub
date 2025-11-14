import React, { FC, ReactNode } from "react";

interface FormsLayoutProps {
  children: ReactNode;
}

const FormsLayout: FC<FormsLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default FormsLayout;
