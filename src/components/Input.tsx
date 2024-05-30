import { FC, ReactNode } from 'react';

interface props {
  icon: ReactNode;
  type: 'text' | 'password';
  placeholder: string;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<props> = ({ icon, type, placeholder, onChange }) => {
  return (
    <div className="flex gap-2 items-center text-gray-400 bg-slate-50 px-4 py-2 rounded-md shadow-md shadow-slate-50">
      {icon}
      <input
        className="bg-transparent text-gray-800 focus:outline-none"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
