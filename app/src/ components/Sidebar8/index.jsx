import { Img, Text } from "./..";
import React from "react";
import { MenuItem, SubMenu, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar8({ ...props }) {
  return (
    <Sidebar
      {...props}
      width="220px !important"
      className={`${props.className} flex flex-col h-screen pt-5 top-0 !border-blue_gray-400_c6 !border-r !border-solid bg-white-a700 !sticky overflow-auto`}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: 0,
            color: "#000000",
            fontWeight: 400,
            fontSize: "16px",
            paddingLeft: "14px",
            marginTop: "8px",
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
        <SubMenu label="PROFILE BUILDER">
          <MenuItem>Submenu Item</MenuItem>
        </SubMenu>
        <SubMenu
          suffix={<Img src="images/img_polygon_7.svg" alt="Polygonseven" className="h-[14px] w-[14px] self-end" />}
          label="UNIVERSITY FINDER"
        >
          <div className="flex flex-col gap-2">
            <MenuItem>Find Universities</MenuItem>
            <MenuItem>Compare Universities</MenuItem>
            <MenuItem>Shortlisted Universities</MenuItem>
          </div>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}
