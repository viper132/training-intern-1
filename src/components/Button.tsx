import { FC } from 'react';

interface Props {
    text: string;
}

const Button: FC<Props> = ({ text }) => {
    return <button className="bg-slate-500 hover:bg-slate-400 rounded-md px-4 py-2 text-white">{text}</button>;
}

export default Button;
