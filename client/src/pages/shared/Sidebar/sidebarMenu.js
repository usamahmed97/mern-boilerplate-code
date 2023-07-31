import { TeamOutlined } from "@ant-design/icons";
import { TEAM_MANAGEMENT } from "../../../constants/dashboardRoutes";
import { getItem } from "../../../utils";

export const sidebarMenu = [
  getItem("Team Management", TEAM_MANAGEMENT, <TeamOutlined />),
];
