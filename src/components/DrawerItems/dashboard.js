import React from "react";
import { Typography } from "@mui/material";
import AdminDashboard from "../../Admin/admin-dashboard";


const Dashboard = () => {

  return (
    <AdminDashboard>
      <Typography variant="h6" color="primary">
        Today
      </Typography>
    </AdminDashboard>
  );
};

export default Dashboard;
