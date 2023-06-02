import { FC, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { usePopup } from 'hooks/use-popup';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  value?: string;
  onChange?: (_: string) => void;
  placeholder?: string;
  className?: string;
  options?: Option[]
}

const Select: FC<SelectProps> = ({ value, onChange, placeholder, className = '', options = [] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isOpen, toggleDropdown, closeDropdown } = usePopup(containerRef);

  const selectOption = (option: Option) => {
    if (onChange) {
      onChange(option.value);
    }
    closeDropdown();
  };

  const resetValue = () => {
    if (onChange) {
      onChange('');
    }
  }

  return (
    <div ref={containerRef} className={`sm:w-44 xs:w-full ${className}`}>
      <div className="flex items-center h-9 border border-blue-dark bg-white rounded overflow-hidden" onClick={toggleDropdown}>
        <div className="flex-1 px-2 relative group">
          {!value ?
            <span className="font-bold text-gray-500">{placeholder}</span>
            : <span className="font-bold">{value}</span>
          }

          {
            value &&
            <div onClick={resetValue} className="hidden cursor-pointer group-hover:flex absolute right-1 top-0 w-5 h-5 rounded-full bg-gray-100 items-center justify-center">
              <FontAwesomeIcon className="text-xxs" icon={icon({ name: 'x' })} />
            </div>
          }
        </div>
        <div className="border-l border-blue-dark bg-gray-100 flex items-center h-full px-2">
          <FontAwesomeIcon className={`text-sm transition duration-100 ease-in-out ${isOpen ? 'rotate-180' : ''}`} icon={icon({ name: 'caret-down' })} />
        </div>
      </div>
      {isOpen &&
      <div className="relative w-full">
        <div className="absolute w-full py-1 bg-white rounded shadow">
          {
            options.map((option, index) => (
              <div
                key={`option-${index}`}
                className="cursor-pointer hover:bg-gray-100 px-2 py-1"
                onClick={() => selectOption(option)}
              >
                <span>{option.label}</span>
              </div>
            ))
          }
        </div>
      </div>
      }
    </div>
  );
};

export default Select;
