import React from "react";
import GenericButton from "../../../components/shared/GenericButton/GenericButton";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import { Avatar, Input } from "antd";
const { Search } = Input;

const Header = ({ siderClass, setSiderClass }) => {
  return (
    <div className="bg-white h-12 flex items-center justify-between border-t-2 border-l-2 border-b-2  border-creme p-5">
      <div className="flex items-center gap-3">
        <MenuOutlined
          className="text-themeGrey cursor-pointer"
          onClick={() => {
            if (siderClass.includes("xs:hidden")) {
              setSiderClass(
                "sidebar-container border-r-2 border-creme xs:block"
              );
            } else {
              setSiderClass(
                "sidebar-container border-r-2 border-creme xs:hidden md:block"
              );
            }
          }}
        />
        <div className="font-bold text-2xl italic text-orange-500 cursor-pointer md:hidden">
          APP
        </div>
        <div className="font-bold text-2xl italic text-orange-500 cursor-pointer hidden md:block">
          APP Name
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Search
          placeholder="Search"
          allowClear
          style={{
            width: 210,
          }}
          className="rounded-none xs:hidden md:block"
        />
        <FeedOutlinedIcon className="text-themeGrey hover:text-themeGreen hover:bg-selectedGreen cursor-pointer" />
        <NotificationsNoneIcon className="text-themeGrey hover:text-themeGreen hover:bg-selectedGreen cursor-pointer" />
        <GenericButton
          label="Need help?"
          size="small"
          icon={<HelpOutlineIcon className=" mr-1 text-themeGrey" />}
          className="text-black text-xs hover:bg-red-400 cursor-pointer"
        />
        <Avatar
          size={{
            xs: 34,
            md: 20,
            lg: 14,
          }}
          icon={<UserOutlined />}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
