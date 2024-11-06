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
    onClick,
    type = "button", // Default button type
    disabled = false,
    style,
    className = "",
  }) => {
    return (
      <button
        type={type}
        disabled={disabled}
        style={style}
        className={className}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);

export default Button;
