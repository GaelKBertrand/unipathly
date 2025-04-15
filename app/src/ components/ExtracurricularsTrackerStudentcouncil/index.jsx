import { Text, Heading } from "./..";
import React from "react";

export default function ExtracurricularsTrackerStudentcouncil({
  studentcouncil = "Student Council",
  category = "Category: Leadership",
  hoursweekCounte = "Hours/Week: 5",
  organization = "Organization: High School",
  duration = "Weeks/Year:30",
  gradeCounter = "Grade: 11",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-start self-stretch p-4 md:mr-0 border-green-100_01 border border-solid bg-white-a700 flex-1 rounded-[10px]`}
    >
      <div className="mb-2.5 flex w-full flex-col items-start gap-1.5">
        <Heading size="heading4xl" as="h5" className="text-[20px] font-semibold !text-black-900_01">
          {studentcouncil}
        </Heading>
        <div className="flex flex-wrap justify-between gap-5 self-stretch">
          <Text size="text2xl" as="p" className="text-[16px] font-normal">
            {category}
          </Text>
          <Text size="text2xl" as="p" className="text-[16px] font-normal">
            {hoursweekCounte}
          </Text>
        </div>
        <div className="flex flex-wrap justify-between gap-5 self-stretch">
          <Text size="text2xl" as="p" className="text-[16px] font-normal">
            {organization}
          </Text>
          <Text size="text2xl" as="p" className="text-[16px] font-normal">
            {duration}
          </Text>
        </div>
        <Text size="text2xl" as="p" className="text-[16px] font-normal">
          {gradeCounter}
        </Text>
      </div>
    </div>
  );
}
