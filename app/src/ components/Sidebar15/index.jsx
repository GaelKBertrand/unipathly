import { Img, Text } from "./..";
import React from "react";
import { MenuItem, SubMenu, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar15({ ...props }) {
  return (
    <Sidebar
      {...props}
      width="220px !important"
      className={`${props.className} flex-col h-screen pt-5 top-0 !sticky bg-yellow-900 overflow-auto`}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: "14px",
            gap: "9px",
            color: "#000000",
            fontWeight: 400,
            fontSize: "16px",
          },
        }}
        className="w-full self-stretch"
      >
        <div>
          <div>
            <div>
              <div>
                <MenuItem icon={<Img src="images/img_home.svg" alt="Home" className="h-[18px] w-[18px]" />}>
                  Student Profile
                </MenuItem>
                <MenuItem icon={<Img src="images/img_home.svg" alt="Home" className="h-[18px] w-[18px]" />}>
                  Student Profile
                </MenuItem>
              </div>
              <div>
                <div>
                  <MenuItem icon={<Img src="images/img_home.svg" alt="Home" className="h-[18px] w-[18px]" />}>
                    Student Profile
                  </MenuItem>
                  <MenuItem icon={<Img src="images/img_home.svg" alt="Home" className="h-[18px] w-[18px]" />}>
                    Student Profile
                  </MenuItem>
                </div>
                <div>
                  <MenuItem icon={<Img src="images/img_home.svg" alt="Home" className="h-[18px] w-[18px]" />}>
                    Student Profile
                  </MenuItem>
                  <MenuItem icon={<Img src="images/img_home.svg" alt="Home Eleven" className="h-[18px] w-[18px]" />}>
                    Student Profile
                  </MenuItem>
                </div>
              </div>
            </div>
            <div>
              <div>
                <MenuItem icon={<Img src="images/img_calculator.svg" alt="Calculator" className="h-[22px] w-[18px]" />}>
                  SmartAdmit
                </MenuItem>
                <MenuItem icon={<Img src="images/img_calculator.svg" alt="Calculator" className="h-[22px] w-[18px]" />}>
                  SmartAdmit
                </MenuItem>
              </div>
              <div>
                <div>
                  <MenuItem
                    icon={<Img src="images/img_calculator.svg" alt="Calculator" className="h-[22px] w-[18px]" />}
                  >
                    SmartAdmit
                  </MenuItem>
                  <MenuItem
                    icon={<Img src="images/img_calculator.svg" alt="Calculator" className="h-[22px] w-[18px]" />}
                  >
                    SmartAdmit
                  </MenuItem>
                </div>
                <div>
                  <MenuItem
                    icon={<Img src="images/img_calculator.svg" alt="Calculator" className="h-[22px] w-[18px]" />}
                  >
                    SmartAdmit
                  </MenuItem>
                  <MenuItem
                    icon={<Img src="images/img_calculator.svg" alt="Calculator" className="h-[22px] w-[18px]" />}
                  >
                    SmartAdmit
                  </MenuItem>
                </div>
              </div>
            </div>
            <div>
              <div>
                <MenuItem icon={<Img src="images/img_television.svg" alt="Television" className="h-[18px] w-[18px]" />}>
                  Chat
                </MenuItem>
                <MenuItem icon={<Img src="images/img_television.svg" alt="Television" className="h-[18px] w-[18px]" />}>
                  Chat
                </MenuItem>
              </div>
              <div>
                <div>
                  <MenuItem
                    icon={<Img src="images/img_television.svg" alt="Television" className="h-[18px] w-[18px]" />}
                  >
                    Chat
                  </MenuItem>
                  <MenuItem
                    icon={<Img src="images/img_television.svg" alt="Television" className="h-[18px] w-[18px]" />}
                  >
                    Chat
                  </MenuItem>
                </div>
                <div>
                  <MenuItem
                    icon={<Img src="images/img_television.svg" alt="Television" className="h-[18px] w-[18px]" />}
                  >
                    Chat
                  </MenuItem>
                  <MenuItem
                    icon={<Img src="images/img_television.svg" alt="Television" className="h-[18px] w-[18px]" />}
                  >
                    Chat
                  </MenuItem>
                </div>
              </div>
            </div>
            <SubMenu label="Profile Builder">
              <div>
                <div>
                  <div>
                    <MenuItem
                      suffix={
                        <Img
                          src="images/img_overflow_menu_teal_500.svg"
                          alt="Overflowmenu"
                          className="h-[14px] w-[14px] self-end"
                        />
                      }
                    >
                      Profile Builder
                    </MenuItem>
                    <MenuItem
                      suffix={
                        <Img
                          src="images/img_overflow_menu_teal_500.svg"
                          alt="Overflowmenu"
                          className="h-[14px] w-[14px] self-end"
                        />
                      }
                    >
                      Profile Builder
                    </MenuItem>
                  </div>
                  <div>
                    <MenuItem
                      suffix={
                        <Img
                          src="images/img_overflow_menu_teal_500.svg"
                          alt="Overflowmenu"
                          className="h-[14px] w-[14px] self-end"
                        />
                      }
                    >
                      Profile Builder
                    </MenuItem>
                    <div>
                      <MenuItem
                        suffix={
                          <Img
                            src="images/img_overflow_menu_teal_500.svg"
                            alt="Overflowmenu"
                            className="h-[14px] w-[14px] self-end"
                          />
                        }
                      >
                        Profile Builder
                      </MenuItem>
                      <MenuItem
                        suffix={
                          <Img
                            src="images/img_overflow_menu_teal_500.svg"
                            alt="Overflowmenu"
                            className="h-[14px] w-[14px] self-end"
                          />
                        }
                      >
                        Profile Builder
                      </MenuItem>
                    </div>
                  </div>
                </div>
              </div>
            </SubMenu>
          </div>
          <SubMenu label="University Finder">
            <div>
              <div>
                <div>
                  <MenuItem
                    suffix={
                      <Img
                        src="images/img_overflow_menu_teal_500.svg"
                        alt="Overflowmenu"
                        className="h-[14px] w-[14px] self-end"
                      />
                    }
                  >
                    University Finder
                  </MenuItem>
                  <MenuItem
                    suffix={
                      <Img
                        src="images/img_overflow_menu_teal_500.svg"
                        alt="Overflowmenu"
                        className="h-[14px] w-[14px] self-end"
                      />
                    }
                  >
                    University Finder
                  </MenuItem>
                </div>
                <div>
                  <MenuItem
                    suffix={
                      <Img
                        src="images/img_overflow_menu_teal_500.svg"
                        alt="Overflowmenu"
                        className="h-[14px] w-[14px] self-end"
                      />
                    }
                  >
                    University Finder
                  </MenuItem>
                  <div>
                    <MenuItem
                      suffix={
                        <Img
                          src="images/img_overflow_menu_teal_500.svg"
                          alt="Overflowmenu"
                          className="h-[14px] w-[14px] self-end"
                        />
                      }
                    >
                      University Finder
                    </MenuItem>
                    <MenuItem
                      suffix={
                        <Img
                          src="images/img_overflow_menu_teal_500.svg"
                          alt="Overflowmenu"
                          className="h-[14px] w-[14px] self-end"
                        />
                      }
                    >
                      University Finder
                    </MenuItem>
                  </div>
                </div>
              </div>
            </div>
          </SubMenu>
        </div>
      </Menu>
    </Sidebar>
  );
}
