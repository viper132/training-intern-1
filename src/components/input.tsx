import { FC } from "react";

interface props {
    placeholder: string;
    type: 'text' | 'password';
}

const Input: FC<props> = ({ type, placeholder }) => {

    return <input className="bg-orange-500 text-white rounded-md px-[8px] py-[2px] placeholder-[#FF0000]"
        type={type}
        placeholder={placeholder}

    />


}


export default Input;