import { FC } from 'react';

interface Props {
    text: string;
    onPencet: VoidFunction;
}

const Button: FC<Props> = ({ text, onPencet }) => {
    return <button onClick={onPencet} className="bg-cyan-700 hover:bg-slate-400  px-4 py-2 text-white rounded-[20px] " >{text}</button>;

}

export default Button;