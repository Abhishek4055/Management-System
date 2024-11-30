import React from "react";

interface ButtonProps {
  children: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const Button: React.FC<ButtonProps> = React.memo(
  ({
    children,
    type = "button", // Default button type
    disabled = false,
    style,
    ...rest
  }) => {
    return (
      <button disabled={disabled} style={style} {...rest}>
        {children}
      </button>
    );
  }
);

export default Button;
