import userStore from '../store/userStore';
import Input from '../components/Input';
import Button from '../components/Button';
import mainBg from '../assets/bg.jpg';
import { FaUserLock } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { handleUser } = userStore();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/');
  };
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-no-repeat bg-center "
      style={{
        backgroundImage: `url("${mainBg}")`,
      }}
    >
      <div className="bg-black/65 flex flex-col gap-[7px] rounded-md px-2 py-8 shadow-2xl shadow-yellow-600">
        <p className="text-xl text-white font-bold text-center">Login</p>
        <Input
          icon={<FaUserLock />}
          type="text"
          placeholder="username"
          onChange={handleUser('username')}
        />
        <Input
          icon={<FaLock />}
          type="password"
          placeholder="password"
          onChange={handleUser('password')}
        />
        <Button onPencet={handleSubmit}>Login</Button>
      </div>
    </div>
  );
};

export default LoginPage;
