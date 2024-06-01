import { HiOutlineArrowCircleUp, HiOutlineArrowCircleDown } from 'react-icons/hi';
import { Info } from '../types/info';

const infoData: Info[] = [
  {
    title: 'New Projects',
    icon: HiOutlineArrowCircleUp,
    percentage: '13% Increase',
    total: '94',
    className: 'shadow-[rgb(33,151,240)] bg-[rgb(33,151,240)]',
  },
  {
    title: 'Team Members',
    icon: HiOutlineArrowCircleUp,
    percentage: '4% Increase',
    total: '5,990',
    className: 'shadow-[rgb(102,185,46)] bg-[rgb(102,185,46)]',
  },
  {
    title: 'Total Budget',
    icon: HiOutlineArrowCircleDown,
    percentage: '21% Decrease',
    total: '$80,890',
    className: 'shadow-[rgb(218,147,44)] bg-[rgb(218,147,44)]',
  },
  {
    title: 'New Customers',
    icon: HiOutlineArrowCircleDown,
    percentage: '13% Decrease',
    total: '3',
    className: 'shadow-[rgb(255,73,73)] bg-[rgb(255,73,73)]',
  },
];

export default infoData;
