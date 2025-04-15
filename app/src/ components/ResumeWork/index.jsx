import { Button, Text, Heading } from "./..";
import React from "react";

export default function ResumeWork({
  workexperience = "Work Experience",
  dataanalyst = "Data Analyst Intern | Tech Analytics Firm (July 2023 – Present)",
  description = "&lt;&gt;Conducting market research and data visualization for investment projects.&lt;br /&gt;Built predictive models to analyze customer behavior, improving accuracy by 15%.&lt;br /&gt;Collaborated with a team of 5 to develop financial insights for clients.&lt;/&gt;",
  edit = "Edit",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-start self-stretch gap-3 flex-1`}>
      <div className="flex flex-col items-start gap-0.5 self-stretch sm:gap-0.5">
        <Heading size="heading5xl" as="h4" className="text-[24px] font-bold !text-black-900_01 sm:text-[20px]">
          {workexperience}
        </Heading>
        <Heading size="heading2xl" as="h6" className="text-[16px] font-semibold !text-black-900_01 sm:text-[13px]">
          {dataanalyst}
        </Heading>
        <Text size="text2xl" as="p" className="text-[16px] font-normal leading-[21px] sm:text-[13px]">
          {description}
        </Text>
      </div>
      <Button color="indigo_900" size="lg" shape="round" className="min-w-[66px] rounded-[10px] px-3.5 font-semibold">
        {edit}
      </Button>
    </div>
  );
}
