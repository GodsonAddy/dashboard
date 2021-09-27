import React from "react";
import withDashboard from "../../HOC/wrappedComponent";
import { Typography } from "@mui/material";
import AdminDashboard from "../../Admin/admin-dashboard";

function Settings() {
  return (
    <AdminDashboard>
      <Typography variant="h6" color="primary">
        Settings
      </Typography>
    </AdminDashboard>
  );
}

export default Settings;
