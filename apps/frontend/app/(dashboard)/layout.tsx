"use client";

import { Box } from "@mui/material";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import Navbar from "@/components/layout/navbar/Navbar";
import { useState } from "react";
interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar onMenuClick={handleMenuClick} isMenuOpen={sidebarOpen} />

      <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <Sidebar isOpen={sidebarOpen} />

        <Box
          sx={{
            flex: 1,
            overflow: "auto",
            bgcolor: "#f8fafc",
            p: 3,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
