import { Img, Text } from "./..";
import React from "react";
import { SubMenu, MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar2({ ...props }) {
  return (
    <Sidebar
      {...props}
      width="220px !important"
      className={`${props.className} flex flex-col h-screen pt-5 top-0 bg-white-a700 !sticky overflow-auto`}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: "8px 8px 8px 14px",
            color: "#000000",
            fontWeight: 400,
            fontSize: "16px",
            gap: "10px",
          },
        }}
        className="w-full self-stretch pb-1.5"
      >
        <MenuItem icon={<Img src="images/img_home.svg" alt="Home" className="h-[18px] w-[18px]" />}>
          Student Profile
        </MenuItem>
        <MenuItem icon={<Img src="images/img_calculator.svg" alt="Calculator" className="h-[22px] w-[18px]" />}>
          SmartAdmit
        </MenuItem>
        <MenuItem icon={<Img src="images/img_television.svg" alt="Television" className="h-[18px] w-[18px]" />}>
          Chat
        </MenuItem>
        <SubMenu label="PROFILE BUILDER">
          <MenuItem>Submenu Item</MenuItem>
        </SubMenu>
        <SubMenu label="UNIVERSITY FINDER">
          <MenuItem>Submenu Item</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}
