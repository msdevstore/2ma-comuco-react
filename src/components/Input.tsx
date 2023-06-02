import React from 'react';

interface InputProps {
  id: string;
  errorText: string;
  label: string;
  name: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ id, errorText, type, label, name, ...rest}) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={name}
        className="
          block
          rounded-md
          px-6
          pt-6
          pb-1
          w-full
          text-md
          text-black
          bg-white
          appearance-none
          focus:outline-none
          focus:ring-0
          peer
         "
        {...rest}
      />
      <label
        className="
          absolute
          text-md
          text-zinc-400
          duration-150
          transform
          -translate-y-3
          scale-75
          top-4
          z-10
          origin-[0]
          left-6
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-3
        "
        htmlFor={id}>
        {label}
      </label>
      {
        errorText &&
          <p className="text-[red]">
            {errorText}
          </p>
      }
    </div>
  );
};

export default Input;
