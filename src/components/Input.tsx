import { FC } from "react";

interface props {
    placeholder: string;
    type: 'text' | 'password';
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<props> = ({ type, placeholder, value, onChange }) => {

    return <input className=" rounded-[10px]  px-[90px] py-[15px] shadow-2xl"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
}


export default Input;