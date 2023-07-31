import React, { useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Sider from "antd/es/layout/Sider";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import DashboardRouter from "../../../routes/DashboardRouter";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [siderClass, setSiderClass] = useState(
    "sidebar-container border-r-2 border-creme xs:hidden md:block"
  );
  return (
    <Layout>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme="light"
        breakpoint="lg"
        className={siderClass}
      >
        <Sidebar />
      </Sider>
      <Layout className="bg-dashboardBackground">
        <Header setSiderClass={setSiderClass} siderClass={siderClass} />
        <Content className="bg-dashboardBackground">
          <DashboardRouter />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
