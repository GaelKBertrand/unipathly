import { Text, Img } from "./..";
import React from "react";

export default function EssayBuilderOneGather({
  gatherFeedback = "images/img_speech_bubble_svgrepo_com.svg",
  gatherfeedback = "Gather Feedback",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-end w-[50%] md:w-full gap-5 px-[42px] py-[26px] md:px-5 sm:p-5 border-black-900_01 border-[0.3px] border-solid bg-white-a700 shadow-sm rounded-[10px]`}
    >
      <Img src={gatherFeedback} alt="Gather Feedback" className="mr-4 h-[146px] w-[84%] object-contain" />
      <Text size="text5xl" as="p" className="mb-2.5 text-[24px] font-normal">
        {gatherfeedback}
      </Text>
    </div>
  );
}
