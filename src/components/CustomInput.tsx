import React, { ChangeEventHandler } from 'react';

interface CustomInputProps {
  label: string;
  placeholder: string;
  errorText?: string;
  value: string;
  type?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  name: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  errorText = '',
  value,
  type = 'text',
  onChange,
  name
}) => {
  return (
    <div className="relative flex flex-col">
      <label className="mb-3 font-semibold">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full outline-none p-2 placeholder:text-xl placeholder:font-bold"
      />
      {
        errorText &&
          <p className="text-[red]">
            {errorText}
          </p>
      }
    </div>
  );
}

export default CustomInput;
