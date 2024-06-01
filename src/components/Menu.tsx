import { FC, ReactNode } from 'react';

interface props {
  icon: ReactNode;
  text: string;
  onClick: VoidFunction;
}

const Menu: FC<props> = ({ icon, text, onClick }) => {
  return (
    <div className="flex gap-2 items-center transition-all duration-500 shadow-sm text-left px-2 py-1 text-black/70 font-semibold hover:bg-black/10 text-nowrap">
      {icon}
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default Menu;
