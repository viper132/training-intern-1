import { FC } from 'react';
import { Info } from '../../types/info';

interface props {
  info: Info;
}

const InfoCard: FC<props> = ({ info }) => {
  return (
    <div className={`flex flex-col gap-2 px-4 py-2 rounded-md shadow-md ${info.className}`}>
      <div className="flex flex-grow">
        <div className="flex flex-col flex-grow">
          <p>{info.title}</p>
          <p className="font-bold mb-4 text-4xl max-xl:text-xl">{info.total}</p>
        </div>
        <info.icon className="text-white/50 min-w-[40px] max-sm:invisible" />
      </div>
      <div className="font-thin border-t text-xs">{info.percentage}</div>
    </div>
  );
};

export default InfoCard;
