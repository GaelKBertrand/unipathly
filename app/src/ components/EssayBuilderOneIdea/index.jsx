import { Text, Img } from "./..";
import React from "react";

export default function EssayBuilderOneIdea({
  ideaGenerator = "images/img_light_bulb_svgrepo_com.svg",
  ideagenerator = "Idea Generator ",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[32%] md:w-full gap-11 p-3 md:px-5 border-black-900_01 border-[0.3px] border-solid bg-white-a700 cursor-pointer rounded-[10px] hover:border-black-900_3f hover:border hover:border-solid hover:shadow-sm`}
    >
      <Img src={ideaGenerator} alt="Idea Generator" className="mx-1.5 mt-2 h-[160px] w-[66%] object-contain" />
      <Text size="text5xl" as="p" className="text-[24px] font-normal">
        {ideagenerator}
      </Text>
    </div>
  );
}
