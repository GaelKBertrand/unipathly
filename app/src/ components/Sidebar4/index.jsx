import { Img, Text } from "./..";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar4({ ...props }) {
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
      className={`${props.className} flex flex-col h-screen pt-5 top-0 border-blue_gray-400_c6 border-solid bg-white-a700 !sticky overflow-auto`}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: "8px 8px 8px 14px",
            color: "#000000",
            fontWeight: 400,
            fontSize: "13px",
            gap: "10px",
          },
        }}
        className="w-full self-stretch pb-1"
      >
        <div className="flex flex-col gap-[0.71px]">
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
        <div className="mt-5 flex items-center justify-between gap-5 border-r border-solid border-gray-500 bg-indigo-900 px-2.5">
          <Text size="text2xl" as="p" className="ml-1.5 text-[16px] font-normal !text-white-a700">
            PROFILE BUILDER
          </Text>
          <Img src="images/img_polygon_7.svg" alt="Polygonsix" className="h-[14px]" />
        </div>
        <div className="flex flex-col gap-[0.70px]">
          <MenuItem>Academics Hub</MenuItem>
          <MenuItem>Explore Learning Opportunities</MenuItem>
          <MenuItem>Explore Work Opportunities</MenuItem>
          <MenuItem>Extracurricular Tracker</MenuItem>
          <MenuItem>My Resume</MenuItem>
          <MenuItem>More Resources</MenuItem>
        </div>
        <div className="ml-4 mr-2.5 mt-3 flex items-start justify-between gap-5">
          <Text size="text2xl" as="p" className="mb-3 self-center text-[16px] font-normal">
            UNIVERSITY FINDER
          </Text>
          <Img src="images/img_overflow_menu.svg" alt="Overflowmenu" className="h-[14px]" />
        </div>
        <div className="ml-4 mr-2.5 mt-1.5 flex items-start justify-between gap-5">
          <Text size="text2xl" as="p" className="mb-1.5 self-center text-[16px] font-normal">
            ESSAY SUPPORT
          </Text>
          <Img src="images/img_overflow_menu.svg" alt="Overflowmenu" className="h-[14px]" />
        </div>
        <div className="flex flex-col gap-[0.71px]">
          <MenuItem>COUNSELLOR CENTRE</MenuItem>
          <MenuItem>APP TRACKER</MenuItem>
          <MenuItem>MY PREFERENCES</MenuItem>
        </div>
      </Menu>
    </Sidebar>
  );
}
