import { Img, Text } from "./..";
import React from "react";
import { SubMenu, MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar11({ ...props }) {
  return (
    <Sidebar
      {...props}
      width="242px !important"
      className={`${props.className} flex flex-col h-screen pt-[18px] top-0 !sticky overflow-auto`}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: "10px 10px 10px 16px",
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "16px",
            gap: "13px",
          },
        }}
        className="w-full self-stretch"
      >
        <MenuItem
          icon={<Img src="images/img_house_icon_2.png" alt="Houseicontwo" className="h-[22px] w-[20px] object-cover" />}
        >
          Student Profile
        </MenuItem>
        <MenuItem>SmartAdmit</MenuItem>
        <MenuItem
          icon={<Img src="images/img_chat_icon_1.png" alt="Chaticonone" className="h-[18px] w-[20px] object-cover" />}
        >
          Chat
        </MenuItem>
        <SubMenu label="Profile Builder">
          <MenuItem>Submenu Item</MenuItem>
        </SubMenu>
        <SubMenu label="University Finder">
          <MenuItem>Submenu Item</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}
