import { ChangeEvent, FC, ReactNode } from 'react';

interface InputProps {
  value?: string;
  leftIcon?: ReactNode;
  onChange?: (_: string) => void;
  placeholder?: string;
  className?: string;
}

const Input: FC<InputProps> = ({ value, onChange, leftIcon, placeholder, className = '' }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={`sm:w-44 xs:w-full flex items-center h-9 border border-blue-dark bg-white rounded overflow-hidden ${className}`}>
      <div className="px-2">
        {leftIcon}
      </div>
      <div className="">
        <input className="outline-none leading-1" type="text" value={value} onChange={handleChange} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default Input;