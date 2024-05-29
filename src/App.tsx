import { useState } from 'react';
import mainBg from './assets/bg.png';
import './App.css';
import '../src/components/input'
import Input from '../src/components/input';


console.log(mainBg);
const App = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = () => {
    console.log(user);
  };

  const handleUser =
    (type: 'username' | 'password') => (ev: React.ChangeEvent<HTMLInputElement>) => {
      setUser({ ...user, [type]: ev.target.value });
    };
  return (
    <div
      className={`flex items-center justify-center h-screen bg-cover bg-no-repeat`}
      style={{
        backgroundImage: `url("${mainBg}")`,
      }}
    >
      <div className="flex flex-col gap-[5px] rounded-[20px] p-[10px] shadow-2xl">
        <Input placeholder='username' type='text'
        />
        <Input placeholder='password' type='password'
        />
        <button className="hover:bg-red-500 active:bg-red-400" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
