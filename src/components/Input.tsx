import { FC } from 'react';

interface Props {
    input: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

const Input: FC<Props> = ({ input, onChange }) => {
    return (
        <input
            className="bg-slate-500 rounded-md px-4 py-2 text-white"
            value={input} 
            onChange={onChange}
        />
    );
}

export default Input;
