import React from "react";
import { Route, Routes } from "react-router-dom";
import TeamManagement from "../pages/shared/TeamManagement/TeamManagement";

const DashboardRouter = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path={"team-management"} element={<TeamManagement />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardRouter;
