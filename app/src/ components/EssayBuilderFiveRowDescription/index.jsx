import { Text } from "./..";
import React from "react";

export default function EssayBuilderFiveRowdescription({ description, ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-end self-stretch p-2.5 border-black-900_01 border-[0.5px] border-solid flex-1 rounded-[10px]`}
    >
      <Text
        size="text2xl"
        as="p"
        className="mt-1.5 w-[92%] text-[16px] font-normal leading-[21px] sm:w-[92%] sm:text-[13px]"
      >
        <span className="font-bold">Introduction</span>
        <span>
          <>
            : Introduce the topic and explain why sustainability matters.
            <br />
          </>
        </span>
        <span className="font-bold">Thesis Statement</span>
        <span>
          <>
            : Explain how sustainability impacts future generations.
            <br />
          </>
        </span>
        <span className="font-bold">Body Paragraph 1</span>
        <span>
          <>
            : Environmental conservation benefits.
            <br />
          </>
        </span>
        <span className="font-bold">Body Paragraph 2</span>
        <span>
          <>
            : Sustainability and improved quality of life.
            <br />
          </>
        </span>
        <span className="font-bold">Body Paragraph 3</span>
        <span>
          <>
            : Economic stability and innovation.
            <br />
          </>
        </span>
        <span className="font-bold">Conclusion: Restate importance and call for action.</span>
      </Text>
    </div>
  );
}
