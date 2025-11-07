import { Box } from "@mui/material";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      <Box sx={{ display: "flex", flexGrow: 1, overflow: "hidden" }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            overflow: "auto",
            bgcolor: "#f8fafc",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
