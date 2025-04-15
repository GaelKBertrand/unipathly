import { Img, Text } from "./..";
import React from "react";
import { SubMenu, MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar21({ ...props }) {
  return (
    <Sidebar
      {...props}
      width="220px !important"
      className={`${props.className} flex-col h-screen pt-5 bg-white-a700 !sticky overflow-auto`}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: "4px 4px 4px 14px",
            color: "#000000",
            fontWeight: 400,
            fontSize: "13px",
            gap: "10px",
            borderColor: "transparent",
            borderRightWidth: "1px",
            borderStyle: "solid",
            [`&:hover, &.ps-active`]: {
              color: "#ffffff",
              borderColor: "#a5a5a5",
              backgroundColor: "#06005c !important",
            },
          },
        }}
        className="w-full self-stretch"
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
        <SubMenu
          suffix={<Img src="images/img_polygon_7.svg" alt="Polygonsix" className="h-[14px] w-[14px] self-end" />}
          label="PROFILE BUILDER"
        >
          <div className="flex flex-col gap-1.5">
            <MenuItem>Academics Hub</MenuItem>
            <MenuItem>Explore Learning Opportunities</MenuItem>
            <MenuItem>Explore Work Opportunities</MenuItem>
            <MenuItem>Extracurricular Tracker</MenuItem>
            <MenuItem>My Resume</MenuItem>
            <MenuItem>More Resources</MenuItem>
          </div>
        </SubMenu>
        <SubMenu label="UNIVERSITY FINDER">
          <MenuItem>Submenu Item</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}
