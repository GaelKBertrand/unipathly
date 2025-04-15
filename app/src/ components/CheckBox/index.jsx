import React from "react";
import PropTypes from "prop-types";

const variants = {
  primary:
    "border-green-100_01 border-solid shadow-bs checked:border-black-900_26 checked:border-[0.25px] checked:border-solid checked:bg-gray-200_01 checked:focus:bg-gray-200_01 checked:focus:border-black-900_26 checked:hover:bg-gray-200_01 checked:hover:border-black-900_26",
};
const sizes = {
  xs: "text-[12px]",
  sm: "h-[14px] w-[14px] rounded-[5px]",
  md: "h-[16px] w-[16px] rounded-[5px]",
};

const CheckBox = React.forwardRef(
  (
    {
      className = "",
      name = "",
      label = "",
      id = "checkbox_id",
      onChange,
      variant = "primary",
      size = "md",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div className={className + " flex items-center gap-[5px] cursor-pointer"}>
          <input
            className={` ${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            id={id}
            {...restProps}
          />
          {!!label && <label htmlFor={id}>{label}</label>}
        </div>
      </>
    );
  },
);

CheckBox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["primary"]),
};

export { CheckBox };
