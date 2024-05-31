import { PiCurrencyBtcThin } from 'react-icons/pi';
import Button from '../components/Button';
import Input from '../components/Input';
import userStore from '../store/userStore';

const calculatorButton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const human = (nama: string) => () => nama;

console.log(human('david'));

const HomePage = () => {
  const { username, password, handleOpen } = userStore();

  const handleAngka = (val: number) => () => {
    console.log(val);
    console.log(username, password);
  };
  return (
    <div className="flex flex-col gap-2 m-2">
      <Input icon={<PiCurrencyBtcThin />} placeholder="Angka" type="number" onChange={() => null} />
      <div className="grid grid-cols-3 gap-2">
        {calculatorButton.map((val) => (
          <Button onPencet={handleAngka(val)}>{val}</Button>
        ))}
        <Button onPencet={() => null}>=</Button>
        <Button onPencet={() => null}>+</Button>
        <Button onPencet={() => handleOpen()}>-</Button>
      </div>
    </div>
  );
};

export default HomePage;
