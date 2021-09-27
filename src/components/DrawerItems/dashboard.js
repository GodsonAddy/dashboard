import React from "react";
import { makeStyles, createStyles } from "@mui/styles";
import withDashboard from "../../HOC/wrappedComponent";
import { Typography } from "@mui/material";
import AdminDashboard from "../../Admin/admin-dashboard";

const useStyles = makeStyles((theme) =>
  createStyles({
    dashboard: {
      flexGrow: 1,
      padding: theme.spacing(20, 15),
    },
  })
);

const Dashboard = () => {
  const classes = useStyles();

  return (
    <AdminDashboard>
      <Typography variant="h6" color="primary">
        Today
      </Typography>
    </AdminDashboard>
  );
};

export default Dashboard;
