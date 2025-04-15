import { Text, Img } from "./..";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar5({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <Sidebar
      {...props}
      width="220px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 16 } }}
      className={`${props.className} flex flex-col h-screen pt-5 gap-4 top-0 !border-blue_gray-400_c6 !border-r !border-solid bg-white-a700 !sticky overflow-auto`}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: "6px 6px 6px 14px",
            color: "#000000",
            fontWeight: 400,
            fontSize: "13px",
            gap: "10px",
          },
        }}
        className="w-full self-stretch"
      >
        <div className="flex flex-col gap-[1.30px]">
          <MenuItem icon={<Img src="images/img_home.svg" alt="Home" className="h-[18px] w-[18px]" />}>
            Student Profile
          </MenuItem>
          <MenuItem icon={<Img src="images/img_calculator.svg" alt="Calculator" className="h-[22px] w-[18px]" />}>
            SmartAdmit
          </MenuItem>
          <MenuItem icon={<Img src="images/img_television.svg" alt="Television" className="h-[18px] w-[18px]" />}>
            Chat
          </MenuItem>
        </div>
        <div className="mt-[26px] flex items-center justify-between gap-5 border-r border-solid border-gray-500 bg-indigo-900 px-2.5">
          <Text size="text2xl" as="p" className="ml-1.5 text-[16px] font-normal !text-white-a700">
            PROFILE BUILDER
          </Text>
          <Img src="images/img_polygon_7.svg" alt="Polygonsix" className="h-[14px]" />
        </div>
        <div className="flex flex-col gap-[1.31px]">
          <MenuItem>Academics Hub</MenuItem>
          <MenuItem>Explore Learning Opportunities</MenuItem>
          <MenuItem>Explore Work Opportunities</MenuItem>
          <MenuItem>Extracurricular Tracker</MenuItem>
          <MenuItem>My Resume</MenuItem>
        </div>
      </Menu>
      {!collapsed ? (
        <Text size="textmd" as="p" className="ml-4 text-[13px] font-normal">
          More Resources
        </Text>
      ) : null}
      {!collapsed ? (
        <div className="ml-4 mr-2.5 flex items-center justify-between gap-5 self-stretch">
          <Text size="text2xl" as="p" className="text-[16px] font-normal">
            UNIVERSITY FINDER
          </Text>
          <Img src="images/img_overflow_menu.svg" alt="Overflowmenu" className="h-[14px]" />
        </div>
      ) : null}
      {!collapsed ? (
        <div className="ml-4 mr-2.5 flex items-center justify-between gap-5 self-stretch">
          <Text size="text2xl" as="p" className="text-[16px] font-normal">
            ESSAY SUPPORT
          </Text>
          <Img src="images/img_overflow_menu.svg" alt="Overflowmenu" className="h-[14px]" />
        </div>
      ) : null}
      {!collapsed ? (
        <Text size="text2xl" as="p" className="ml-4 text-[16px] font-normal">
          COUNSELLOR CENTRE
        </Text>
      ) : null}
      {!collapsed ? (
        <Text size="text2xl" as="p" className="ml-4 text-[16px] font-normal">
          APP TRACKER
        </Text>
      ) : null}
      {!collapsed ? (
        <Text size="text2xl" as="p" className="ml-4 text-[16px] font-normal">
          MY PREFERENCES
        </Text>
      ) : null}
    </Sidebar>
  );
}
