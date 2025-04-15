import { Helmet } from "react-helmet";
import { Button, Text, Img } from "../../components";
import Home1Rowyourpathto from "./Home1Rowyourpathto";
import React from "react";

export default function Home1Page() {
  return (
    <>
      <Helmet>
        <title>Bertrand&#39;s Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-a700">
        <header className="flex items-start border-b border-solid border-gray-400_01 bg-indigo-900 p-1.5">
          <div className="mx-auto mb-2.5 flex w-full max-w-[1242px] items-center justify-between gap-5 md:flex-col">
            <Img
              src="images/img_unipathly_logo_2.png"
              alt="Unipathlylogo"
              className="h-[98px] w-[16%] object-contain md:w-full"
            />
            <div className="flex items-center md:flex-col">
              <ul className="flex flex-wrap gap-[50px] self-end">
                <li>
                  <a href="#">
                    <Text size="text4xl" as="p" className="text-[20px] font-normal !text-white-a700">
                      About Unipathly
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                    <Text size="text4xl" as="p" className="text-[20px] font-normal !text-white-a700">
                      Student Profile
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text size="text4xl" as="p" className="text-[20px] font-normal !text-white-a700">
                      Features
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                    <Text size="text4xl" as="p" className="text-[20px] font-normal !text-white-a700">
                      Counsellor Center
                    </Text>
                  </a>
                </li>
              </ul>
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <Button
                  color="green_600_02"
                  size="3xl"
                  shape="round"
                  className="ml-[46px] min-w-[106px] rounded-[10px] px-3.5 md:ml-0"
                >
                  Sign Up!
                </Button>
              </a>
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <Button
                  color="green_600_02"
                  size="3xl"
                  shape="round"
                  className="ml-4 min-w-[92px] rounded-[10px] px-4 md:ml-0"
                >
                  Log In
                </Button>
              </a>
            </div>
          </div>
        </header>
        <Home1Rowyourpathto />
      </div>
    </>
  );
}
