import { Button, Text } from "./..";
import React from "react";

export default function CounsellorCenterRowduration({
  duration = "30 minutes",
  price = "$30",
  book = "Book",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex justify-between items-end self-stretch gap-5 flex-1`}>
      <Text size="texts" as="p" className="self-start text-[12px] font-light">
        {duration}
      </Text>
      <Text size="texts" as="p" className="text-[12px] font-light">
        {price}
      </Text>
      <Button color="indigo_900" size="xs" className="mt-1 min-w-[60px] rounded-[5px] px-4">
        {book}
      </Button>
    </div>
  );
}
