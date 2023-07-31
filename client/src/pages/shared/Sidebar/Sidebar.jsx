import React from "react";
import "./Sidebar.css";

import { sidebarMenu } from "./sidebarMenu";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  return (
    <Menu
      className="w-60 h-max pb-24"
      theme="white"
      mode="inline"
      selectedKeys={[location.pathname.split("/").pop()]}
      items={sidebarMenu}
      onClick={handleMenuClick}
    />
  );
};

export default Sidebar;
