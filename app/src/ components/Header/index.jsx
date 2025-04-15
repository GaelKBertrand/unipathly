import { CloseSVG } from "../Input/close";
import { Img, Text, Input } from "./..";
import React from "react";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props} className={`${props.className} flex items-center px-[30px] sm:px-5`}>
      <div className="mx-auto flex w-full max-w-[1212px] items-center justify-between gap-5 md:flex-col">
        <Img
          src="images/img_unipathly_logo_2.png"
          alt="Unipathlylogo"
          className="h-[84px] w-[14%] object-contain md:w-full"
        />
        <div className="flex w-[80%] items-center justify-between gap-5 md:w-full md:flex-col">
          <Text size="text4xl" as="p" className="mb-1 self-end text-[20px] font-normal !text-indigo-900">
            Hi, Scarlet!
          </Text>
          <div className="flex w-[60%] items-center justify-between gap-5 md:w-full sm:flex-col">
            <Input
              shape="round"
              name="search"
              value={searchBarValue}
              onChange={(e) => setSearchBarValue(e.target.value)}
              suffix={
                searchBarValue?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue("")} height={28} width={28} fillColor="#000000ff" />
                ) : (
                  <Img src="images/img_search.svg" alt="Search" className="h-[28px] w-[28px] object-contain" />
                )
              }
              className="w-[58%] gap-4 rounded-[10px] sm:w-full"
            />
            <div className="flex w-[20%] justify-center gap-6 sm:w-full">
              <div className="flex h-[46px] w-[44px] flex-col items-center justify-center bg-[url(/public/images/img_group_613.svg)] bg-cover bg-no-repeat md:h-auto">
                <Text
                  size="textlg"
                  as="p"
                  className="mb-6 h-[22px] w-[22px] rounded-[10px] bg-red-a700_01 px-1.5 text-[14px] font-normal !text-white-a700"
                >
                  3
                </Text>
              </div>
              <a href="#">
                <Img src="images/img_user.svg" alt="User" className="h-[46px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
