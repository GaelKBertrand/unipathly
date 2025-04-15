import { Img, Button, Text, Heading } from "./..";
import React from "react";

export default function ExperienceRowmitsummer({
  mitsummer = "MIT Summer Research Program",
  typeresearch = "Type: Research",
  eligibility = "Eligibility: High School Juniors & Seniors",
  deadlineapril = "Deadline: April 15, 2025",
  moreInfo = "More Info",
  addTo = "Add to favorites",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-start self-stretch gap-1 flex-1 container-sm`}
    >
      <div className="flex flex-1 items-center border-b border-solid border-green-100_01 bg-gray-100_07 px-4 py-[18px] md:self-stretch">
        <div className="mb-1 flex w-[44%] flex-col items-start gap-1 sm:gap-1">
          <div className="flex flex-col items-start self-stretch">
            <Heading size="heading4xl" as="h5" className="text-[20px] font-semibold !text-black-900_01 sm:text-[17px]">
              {mitsummer}
            </Heading>
            <Text size="text2xl" as="p" className="text-[16px] font-normal sm:text-[13px]">
              {typeresearch}
            </Text>
          </div>
          <Text size="text2xl" as="p" className="text-[16px] font-normal sm:text-[13px]">
            {eligibility}
          </Text>
          <Text size="text2xl" as="p" className="text-[16px] font-normal sm:text-[13px]">
            {deadlineapril}
          </Text>
        </div>
        <div className="flex flex-1 items-center justify-end px-9 sm:px-5">
          <Button color="indigo_900" shape="round" className="min-w-[106px] rounded-[10px] px-3 font-bold">
            {moreInfo}
          </Button>
          <Button color="indigo_900" shape="round" className="ml-4 min-w-[156px] rounded-[10px] px-3.5 font-bold">
            {addTo}
          </Button>
          <Img src="images/img_thumbs_up_svgrepo_com.svg" alt="Image" className="ml-4 h-[32px]" />
          <Img src="images/img_thumbs_down_svgrepo_com.svg" alt="Image" className="ml-2.5 h-[32px] self-end" />
        </div>
      </div>
      <div className="h-[100px] w-[5px] rounded-sm bg-blue_gray-100" />
    </div>
  );
}
