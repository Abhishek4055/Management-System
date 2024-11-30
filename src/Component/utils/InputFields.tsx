import React, { forwardRef } from "react";

interface InputProps {
  //   ref: unknown;
  id?: string;
  className: string;
  inputType: string | undefined;
  name?: string | undefined;
  value: string | undefined;
  placeHolder?: string | undefined;
  isDisabled?: boolean | undefined;
  onChangeInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // autoComplete?: boolean;
  ref?: React.LegacyRef<HTMLInputElement> | undefined;
  required?: boolean | undefined;
  pattern?: any;
}

const InputField: React.FC<InputProps> = forwardRef(
  (
    {
      id,
      inputType,
      name,
      value,
      placeHolder,
      isDisabled,
      onChangeInput,
      className,
      // autoComplete = false,
      required,
    },
    ref
  ) => {
    return (
      <>
        <input
          id={id}
          ref={ref}
          className={className}
          type={inputType}
          name={name}
          value={value}
          placeholder={placeHolder}
          disabled={isDisabled}
          onChange={onChangeInput}
          required={required}
          // autoComplete={autoComplete}
        />
      </>
    );
  }
);
export default InputField;
