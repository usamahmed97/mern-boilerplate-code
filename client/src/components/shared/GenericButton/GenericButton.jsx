import { Button, Spin } from "antd";
import React from "react";

const GenericButton = ({
  label = null,
  icon,
  size,
  shape,
  className,
  onClick,
  buttonWidth,
  isLoading,
  disabled,
  iconLeftAlign = false,
}) => {
  return (
    <Button
      className={`${className ? className : "bg-dullGrey"}`}
      type="primary"
      shape={shape}
      size={size}
      onClick={onClick}
      disabled={disabled}
    >
      <div
        className={`flex items-center justify-around ${
          buttonWidth ? buttonWidth : "w-auto"
        }`}
      >
        {isLoading ? (
          <Spin clasName=" w-4 h-4" />
        ) : iconLeftAlign ? (
          <>
            {icon}
            <p className="ml-1">{label}</p>
          </>
        ) : (
          <>
            <p className="mr-1">{label}</p>
            {icon}
          </>
        )}
      </div>
    </Button>
  );
};

export default GenericButton;
