import { FC } from 'react';

interface Props {
    text: string;
    onPencet: VoidFunction;
}

const ButtonMenu: FC<Props> = ({ text, onPencet }) => {
    return <button onClick={onPencet} className="bg-cyan-700 hover:bg-slate-400 px-[10vh] py-2 text-white rounded-md w-full " >{text}</button>;

}

export default ButtonMenu;