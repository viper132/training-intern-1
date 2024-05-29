import mainBg from './assets/bg.png';
import './App.css';
import userStore from './store/userStore';
import Button from './components/Button';
import Input from './components/Input';

const App = () => {
  const { username, password, handleUser } = userStore();

  const handleSubmit = () => {
    console.log(username, password);
  };
  return (
    <div
      className={`flex items-center justify-center h-screen bg-cover bg-no-repeat bg-center`}
      style={{
        backgroundImage: `url("${mainBg}")`,
      }}
    >
      <div className="flex flex-col gap-[5px] rounded-[20px] p-[10px] shadow-2xl">
        <Input type="text" placeholder="username" onChange={handleUser('username')} />
        <Input type="text" placeholder="password" onChange={handleUser('password')} />
        <Button text="Login" onPencet={handleSubmit} />
      </div>
    </div>
  );
};

export default App;
