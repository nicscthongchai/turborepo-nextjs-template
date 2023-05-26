import * as React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = props => {
  const { children, className, ...attr } = props;
  return (
    <button
      {...attr}
      className={twMerge('rounded border px-3 py-1', className)}
    >
      {children}
    </button>
  );
};
