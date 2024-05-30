import { FC, ReactNode } from 'react';

interface props {
  children: ReactNode;
  onPencet: VoidFunction;
}

const Button: FC<props> = ({ children, onPencet }) => {
  return (
    <button
      className="bg-blue-700 rounded-md text-white h-7 shadow-md shadow-blue-700 px-4"
      onClick={onPencet}
    >
      {children}
    </button>
  );
};

export default Button;
