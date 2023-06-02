import React, { ReactElement, useMemo } from 'react';

type ButtonVariant = 'outlined' | 'text' | 'contained';
type ButtonBgColor = 'primary' | 'secondary';

interface ButtonProps {
  onClick?: () => void;
  label: string;
  variant?: ButtonVariant;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  bgColor?: ButtonBgColor;
  classnames?: string;
}

const Button: React.FC<ButtonProps> = ({
  classnames = '',
  onClick,
  label,
  variant = 'contained',
  leftIcon,
  rightIcon,
  bgColor = 'primary'
}) => {
  const buttonTheme = useMemo(() => {
    const classes: string[] = [];
    switch (variant) {
      case 'contained':
        if (bgColor === 'primary') {
          classes.push('bg-blue-dark text-yellow');
        } else {
          classes.push('');
        }
        break;
      case 'text':
        if (bgColor === 'primary') {
          classes.push('');
        } else {
          classes.push('');
        }
        break;
      case 'outlined':
        if (bgColor === 'primary') {
          classes.push('');
        } else {
          classes.push('');
        }
        break; 
    }
    return classes;
  }, [variant]);

  return (
    <button
      onClick={onClick}
      className={`w-full py-2 outline-none font-semibold ${buttonTheme} ${classnames}`}
    >
      {
        !!leftIcon && leftIcon
      }
      {label}
      {
        !!rightIcon && rightIcon
      }
    </button>
  );
};

export default Button;
