"use client";

import React, { FC, useState, ReactNode } from "react";
import { Box } from "@mui/material";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import Navbar from "@/components/layout/navbar/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleItemClick = () => {
    setSidebarOpen(false);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar onMenuClick={handleMenuClick} isMenuOpen={sidebarOpen} />

      <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <Sidebar isOpen={sidebarOpen} onItemClick={handleItemClick} />

        <Box sx={{ flex: 1, overflow: "auto", bgcolor: "#f8fafc", p: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
