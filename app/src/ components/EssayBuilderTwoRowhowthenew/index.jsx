import { Text } from "./..";
import React from "react";

export default function EssayBuilderTwoRowhowthenew({
  howthenew = "How the new generation is making more sustainable cosmetics.",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center self-stretch px-5 py-3.5 border-black-900_01 border border-solid flex-1 rounded-[10px]`}
    >
      <Text size="text2xl" as="p" className="text-[16px] font-normal sm:text-[13px]">
        {howthenew}
      </Text>
    </div>
  );
}
