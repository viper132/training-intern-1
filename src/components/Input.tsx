import { FC } from 'react';

interface props {
  type: 'text' | 'password';
  placeholder: string;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<props> = ({ type, placeholder, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      style={{
        backgroundColor: 'GrayText',
        color: 'white',
      }}
    />
  );
};

export default Input;
