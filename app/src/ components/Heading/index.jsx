import React from "react";

const sizes = {
  text3xl: "text-[18px] font-medium",
  headingxs: "text-[11px] font-bold",
  headings: "text-[12px] font-semibold",
  headingmd: "text-[13px] font-bold",
  headinglg: "text-[14px] font-bold",
  headingxl: "text-[15px] font-bold",
  heading2xl: "text-[16px] font-bold",
  heading3xl: "text-[18px] font-bold",
  heading4xl: "text-[20px] font-semibold",
  heading5xl: "text-[24px] font-bold md:text-[22px]",
  heading6xl: "text-[32px] font-semibold md:text-[30px] sm:text-[28px]",
  heading7xl: "text-[36px] font-semibold md:text-[34px] sm:text-[32px]",
  heading8xl: "text-[48px] font-bold md:text-[44px] sm:text-[38px]",
  heading9xl: "text-[50px] font-bold md:text-[46px] sm:text-[40px]",
  heading10xl: "text-[64px] font-bold md:text-[48px]",
};

const Heading = ({ children, className = "", size = "text3xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900_01 font-lexend ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
