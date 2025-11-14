import React, { FC } from "react";
import { Typography } from "@mui/material";

interface DashboardPageProps {}

const DashboardPage: FC<DashboardPageProps> = () => {
  return (
    <div>
      <Typography variant="h4">Dashboard</Typography>
      <Typography>Welcome back! Here's what's happening.</Typography>
    </div>
  );
};

export default DashboardPage;
