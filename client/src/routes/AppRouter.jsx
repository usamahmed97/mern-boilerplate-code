import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ADMIN_HOME,
  DASHBOARD,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  WEBAPP_CONFIRM_SIGNUP,
  WEBAPP_FORGOT_PASSWORD,
  WEBAPP_HOME,
  WEBAPP_RESET_PASSWORD,
  WEBAPP_SIGNIN,
} from "../constants/pageRoutes";
import Home from "../pages/webapp/Home/Home";
import Signin from "../pages/webapp/Signin/Signin";
import ConfirmSignup from "../pages/webapp/ConfirmSignup/ConfirmSignup";
import ForgotPassword from "../pages/webapp/ForgotPassword/ForgotPassword";
import ResetPasword from "../pages/webapp/ResetPassword/ResetPassword";
import AdminForgotPassword from "../pages/admin/ForgotPassword/ForgotPassword";
import AdminSignin from "../pages/admin/Signin/Signin";
import AdminResetPassword from "../pages/admin/ResetPassword/ResetPassword";
import Dashboard from "../pages/shared/Dashboard/Dashboard";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Webapp routes */}
          <Route path={WEBAPP_HOME} element={<Home />} />
          <Route path={WEBAPP_SIGNIN} element={<Signin />} />
          <Route path={WEBAPP_CONFIRM_SIGNUP} element={<ConfirmSignup />} />
          <Route path={WEBAPP_FORGOT_PASSWORD} element={<ForgotPassword />} />
          <Route path={WEBAPP_RESET_PASSWORD} element={<ResetPasword />} />
          {/* Admin routes */}
          <Route path={ADMIN_HOME} element={<AdminSignin />} />
          <Route path={FORGOT_PASSWORD} element={<AdminForgotPassword />} />
          <Route path={RESET_PASSWORD} element={<AdminResetPassword />} />
          {/* Shared Dashboard */}
          <Route path={DASHBOARD} element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
