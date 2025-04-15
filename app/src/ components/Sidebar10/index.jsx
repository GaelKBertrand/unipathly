import { Img, Text, Heading } from "./..";
import React from "react";
import { MenuItem, SubMenu, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar10({ ...props }) {
  return (
    <Sidebar
      {...props}
      width="220px !important"
      rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 12 } }}
      className={`${props.className} flex flex-col h-screen pt-5 gap-3 top-0 bg-cyan-400 !sticky overflow-auto`}
    >
      <Heading size="heading2xl" as="h6" className="ml-[42px] text-[16px] font-bold !text-white-a700">
        Student Profile
      </Heading>
      <Menu
        menuItemStyles={{
          button: {
            padding: "8px 8px 8px 14px",
            color: "#ffffff",
            fontWeight: 400,
            fontSize: "16px",
            gap: "9px",
            [`&:hover, &.ps-active`]: { color: "#000000" },
          },
        }}
        className="w-full self-stretch"
      >
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
        <SubMenu label="Essay Support">
          <MenuItem>Submenu Item</MenuItem>
        </SubMenu>
        <MenuItem>Counsellor Centre</MenuItem>
        <MenuItem>App Tracker</MenuItem>
        <MenuItem>My Preferences</MenuItem>
      </Menu>
    </Sidebar>
  );
}
