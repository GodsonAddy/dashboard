import React from "react";
import AdminDashboard from "../Admin/admin-dashboard";

const withDashboard = (WrappedComponent) => {
  function HOC(){
    return (
      <>
        <AdminDashboard />
        <WrappedComponent />
      </>
    )
  }
  return HOC;
};

export default withDashboard;