import React, { useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const inputVariants = cva(
  'border rounded-md w-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        outlined: 'border-gray-300 bg-white text-gray-900 focus:ring-blue-500',
        filled: 'border-transparent bg-gray-100 text-gray-900 focus:ring-blue-500',
        ghost: 'border-transparent bg-transparent text-gray-900 focus:ring-blue-500 hover:bg-gray-100',
      },
      size: {
        sm: 'px-2 py-1 text-sm',
        md: 'px-3 py-2 text-base',
        lg: 'px-4 py-3 text-lg',
      },
      invalid: {
        true: 'border-red-500 text-red-600 focus:ring-red-500',
      },
    },
    defaultVariants: {
      variant: 'outlined',
      size: 'md',
    },
  }
);

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  type?: 'text' | 'password';
  onClear?: () => void;
  showClearButton?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  className,
  variant,
  size,
  invalid,
  label,
  helperText,
  errorMessage,
  type = 'text',
  onClear,
  showClearButton = false,
  value,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <div className="relative">
        <input
          type={inputType}
          className={cn(inputVariants({ variant, size, invalid, className }), {
            'pr-10': type === 'password' || (showClearButton && value),
          })}
          value={value}
          {...props}
        />
        {type === 'password' && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        )}
        {showClearButton && value && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
            onClick={onClear}
          >
            Clear
          </button>
        )}
      </div>
      {helperText && !invalid && <p className="text-sm text-gray-500">{helperText}</p>}
      {errorMessage && invalid && <p className="text-sm text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
