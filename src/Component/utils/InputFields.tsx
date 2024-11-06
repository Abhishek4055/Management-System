import React, { forwardRef } from "react";

interface InputProps {
  //   ref: unknown;
  className: string;
  inputType: string | undefined;
  name?: string | undefined;
  value: string | undefined;
  placeHolder?: string | undefined;
  isDisabled?: boolean | undefined;
  onChangeInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // autoComplete?: boolean;
  ref?: React.LegacyRef<HTMLInputElement> | undefined;
}

const InputField: React.FC<InputProps> = forwardRef(
  (
    {
      inputType,
      name,
      value,
      placeHolder,
      isDisabled,
      onChangeInput,
      className,
      // autoComplete = false,
    },
    ref
  ) => {
    return (
      <>
        <input
          ref={ref}
          className={className}
          type={inputType}
          name={name}
          value={value}
          placeholder={placeHolder}
          disabled={isDisabled}
          onChange={onChangeInput}
          // autoComplete={autoComplete}
        />
      </>
    );
  }
);
export default InputField;
