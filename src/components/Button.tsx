import { FC } from 'react';

interface props {
  text: string;
}

const Button: FC<props> = ({ text }) => {
  return <button className="bg-blue-400 rounded-md px-4 py-2 text-white">{text}</button>;
};

export default Button;
