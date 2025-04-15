import { Button, Text, Img, Heading } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer {...props} className={`${props.className} flex flex-col items-end mt-[58px] px-[26px] sm:px-5`}>
      <div className="mx-auto flex w-full max-w-[982px] rounded-tl-[14px] rounded-tr-[14px] border-b border-solid border-green-100_01 bg-white-a700 px-[22px] py-2.5 md:px-5">
        <Heading size="heading4xl" as="h5" className="text-[20px] font-semibold !text-black-900_01">
          Best Fit Colleges
        </Heading>
      </div>
      <div className="relative mt-[-48px] flex w-[80%] flex-col items-center gap-[26px] rounded-[14px] bg-white-a700 p-7 shadow-sm sm:p-5">
        <div className="mx-auto mt-[72px] flex w-full max-w-[910px] gap-4 self-stretch md:flex-col">
          <div className="flex w-[34%] flex-col rounded-[10px] bg-cyan-400_16 px-5 py-2.5 md:w-full">
            <div className="flex items-start">
              <div className="mt-1.5 flex flex-1 flex-col items-start self-end">
                <Heading size="headingxl" as="p" className="text-[15px] font-bold !text-black-900_01">
                  Brown University
                </Heading>
                <Text as="p" className="text-[15px] font-normal italic">
                  Providence, Rhode Island
                </Text>
                <Text as="p" className="text-[15px] font-normal">
                  Private Ivy League
                </Text>
                <Text as="p" className="relative mt-[-4px] text-[15px] font-normal">
                  Approximately 10,000 Students
                </Text>
              </div>
              <Img src="images/img_brown_universit.png" alt="Brown" className="h-[58px] w-[14%] object-contain" />
            </div>
            <div className="mr-4 mt-1.5 flex flex-col items-start md:mr-0">
              <Text as="p" className="text-[15px] font-normal">
                <span className="font-chalkduster text-red-a700">Sm</span>
                <span className="font-chalkduster text-amber-a400_02">art</span>
                <span className="font-chalkduster text-green-600_03">Ad</span>
                <span className="font-chalkduster text-blue-400_01">mit</span>
                <span className="font-semibold text-black-900_01">&nbsp;Score: 65%</span>
              </Text>
              <div className="flex flex-wrap gap-2">
                <Text as="p" className="text-[15px] font-normal">
                  GPA:3.9
                </Text>
                <Text as="p" className="text-[15px] font-normal">
                  SAT:1500
                </Text>
                <Text as="p" className="text-[15px] font-normal">
                  ACT: 34
                </Text>
              </div>
              <div className="flex flex-wrap gap-1.5 self-stretch">
                <Text as="p" className="text-[15px] font-normal">
                  Tuition: $65,000
                </Text>
                <Text as="p" className="text-[15px] font-normal">
                  Avg Aid: $45,000
                </Text>
              </div>
            </div>
            <div className="mb-3.5 mt-4 flex gap-1.5">
              <Button
                color="deep_purple_100"
                size="sm"
                shape="round"
                className="min-w-[100px] rounded-[10px] px-1 font-bold"
              >
                View School
              </Button>
              <Button color="cyan_400" size="sm" shape="round" className="min-w-[100px] rounded-[10px] px-2 font-bold">
                Apply Now
              </Button>
            </div>
          </div>
          <div className="flex w-[34%] rounded-[10px] bg-cyan-400_16 p-1 md:w-full">
            <div className="mb-[22px] flex w-full flex-col items-start">
              <div className="flex items-start gap-4 self-stretch">
                <div className="mt-3 flex flex-1 flex-col items-start self-end">
                  <Heading size="headingxl" as="p" className="text-[15px] font-bold !text-black-900_01">
                    Princeton University
                  </Heading>
                  <Text as="p" className="text-[15px] font-normal italic">
                    Princeton, New Jersey
                  </Text>
                  <Text as="p" className="text-[15px] font-normal">
                    Private Ivy League
                  </Text>
                  <Text as="p" className="relative mt-[-4px] text-[15px] font-normal">
                    Approximately 5,700 Students
                  </Text>
                </div>
                <Img
                  src="images/img_princeton_logo_1.png"
                  alt="Princetonlogo"
                  className="h-[58px] w-[20%] object-contain"
                />
              </div>
              <Text as="p" className="mt-1.5 text-[15px] font-normal">
                <span className="font-chalkduster text-red-a700">Sm</span>
                <span className="font-chalkduster text-amber-a400_02">art</span>
                <span className="font-chalkduster text-green-600_03">Ad</span>
                <span className="font-chalkduster text-blue-400_01">mit</span>
                <span className="font-semibold text-black-900_01">&nbsp;Score: 60%</span>
              </Text>
              <div className="flex flex-wrap gap-3.5">
                <Text as="p" className="text-[15px] font-normal">
                  GPA:3.9
                </Text>
                <Text as="p" className="text-[15px] font-normal">
                  SAT:1540
                </Text>
                <Text as="p" className="text-[15px] font-normal">
                  ACT: 34
                </Text>
              </div>
              <div className="mr-7 flex flex-wrap gap-[18px] self-stretch md:mr-0">
                <Text as="p" className="text-[15px] font-normal">
                  Tuition: $60,000
                </Text>
                <Text as="p" className="text-[15px] font-normal">
                  Avg Aid: $50,000
                </Text>
              </div>
              <div className="mt-4 flex gap-1.5">
                <Button
                  color="deep_purple_100"
                  size="sm"
                  shape="round"
                  className="min-w-[108px] rounded-[10px] px-2 font-bold"
                >
                  View School
                </Button>
                <Button
                  color="cyan_400"
                  size="sm"
                  shape="round"
                  className="min-w-[108px] rounded-[10px] pl-2 pr-4 font-bold"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
          <div className="flex w-[30%] rounded-[10px] bg-cyan-400_16 p-3 md:w-full">
            <div className="mb-3.5 flex w-full flex-col items-start">
              <div className="flex items-start justify-between gap-5 self-stretch">
                <div className="flex flex-col items-start self-end">
                  <Heading size="headingxl" as="p" className="text-[15px] font-bold !text-black-900_01">
                    Cornell University
                  </Heading>
                  <Text as="p" className="text-[15px] font-normal italic">
                    Ithaca, New York
                  </Text>
                  <Text as="p" className="text-[15px] font-normal">
                    Private Ivy League
                  </Text>
                </div>
                <Img src="images/img_cornell_1.png" alt="Cornellone" className="h-[54px] w-[22%] object-contain" />
              </div>
              <Text as="p" className="relative mt-[-4px] text-[15px] font-normal">
                Approximately 26,000 Students
              </Text>
              <Text as="p" className="mt-2.5 text-[15px] font-normal">
                <span className="font-chalkduster text-red-a700">Sm</span>
                <span className="font-chalkduster text-amber-a400_02">art</span>
                <span className="font-chalkduster text-green-600_03">Ad</span>
                <span className="font-chalkduster text-blue-400_01">mit</span>
                <span className="font-semibold text-black-900_01">&nbsp;Score: 75%</span>
              </Text>
              <div className="flex flex-wrap gap-2">
                <Text as="p" className="text-[15px] font-normal">
                  GPA:3.8
                </Text>
                <Text as="p" className="text-[15px] font-normal">
                  SAT:1480
                </Text>
                <Text as="p" className="text-[15px] font-normal">
                  ACT: 34
                </Text>
              </div>
              <div className="mr-2 flex flex-wrap gap-1.5 self-stretch md:mr-0">
                <Text as="p" className="text-[15px] font-normal">
                  Tuition: $62,000
                </Text>
                <Text as="p" className="text-[15px] font-normal">
                  Avg Aid: $40,000
                </Text>
              </div>
              <div className="mt-3.5 flex gap-1.5">
                <Button
                  color="deep_purple_100"
                  size="sm"
                  shape="round"
                  className="min-w-[100px] rounded-[10px] px-1 font-bold"
                >
                  View School
                </Button>
                <Button
                  color="cyan_400"
                  size="sm"
                  shape="round"
                  className="min-w-[100px] rounded-[10px] px-2 font-bold"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Button color="cyan_400" size="8xl" shape="round" className="min-w-[174px] rounded-[10px] font-semibold">
          Build your Shortlist
        </Button>
      </div>
    </footer>
  );
}
