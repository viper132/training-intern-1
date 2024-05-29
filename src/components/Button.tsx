import { FC } from 'react';

interface props {
  text: string;
  onPencet: VoidFunction;
}

const Button: FC<props> = ({ text, onPencet }) => {
  return (
    <button className="bg-blue-400 rounded-md px-4 py-2 text-white" onClick={onPencet}>
      {text}
    </button>
  );
};

export default Button;
