import { Button, Heading } from "../../components";
import React from "react";

export default function Home1Rowyourpathto() {
  return (
    <div className="flex h-[852px] items-start justify-center bg-[url(/public/images/img_group_3.png)] bg-cover bg-no-repeat p-11 md:h-auto md:p-5">
      <div className="mb-[38px] flex w-[94%] flex-col items-start gap-[428px] md:w-full md:gap-[321px] sm:gap-[214px]">
        <Heading
          size="heading10xl"
          as="h1"
          className="!font-inter text-[64px] font-bold leading-[77px] !text-white-a700 md:text-[48px]"
        >
          <>
            Your path to <br />
            your dream <br />
            college
          </>
        </Heading>
        <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
          <Button
            color="green_600_04"
            size="11xl"
            className="min-w-[156px] self-center rounded-[20px] px-5 font-semibold"
          >
            Get Started!
          </Button>
        </a>
      </div>
    </div>
  );
}
