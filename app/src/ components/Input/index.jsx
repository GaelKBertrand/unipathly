import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[10px]",
};

const variants = {
  fill: {
    white_A700: "bg-white-a700 text-black-900_01",
    orange_50_01: "bg-orange-50_01 text-black-900_01",
    gray_100: "bg-gray-100 text-gray-400_04",
    gray_100_03: "bg-gray-100_03 text-black-900_3f",
    blue_gray_100: "bg-blue_gray-100",
  },
};

const sizes = {
  sm: "h-[36px] px-[18px] text-[12px]",
  md: "h-[38px] px-[18px] text-[15px]",
  lg: "h-[48px] px-2.5 text-[20px]",
  xl: "h-[54px] px-3 text-[20px]",
  xs: "h-[36px] pl-[18px] pr-2.5",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "xs",
      color = "blue_gray_100",
      ...restProps
    },
    ref,
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text  ${shape && shapes[shape]} ${variant && (variants[variant]?.[color] || variants[variant])} ${size && sizes[size]}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
        {!!suffix && suffix}
      </label>
    );
  },
);
Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "orange_50_01", "gray_100", "gray_100_03", "blue_gray_100"]),
};

export { Input };
