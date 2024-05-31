import mainBg from './assets/bg.png';
import './App.css';
import userStore from './store/userStore';
import Button from './components/Button';

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
        <input
          type="text"
          placeholder="Username"
          onChange={handleUser('username')}
          style={{
            backgroundColor: 'GrayText',
            color: 'white',
          }}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={handleUser('password')}
          style={{
            backgroundColor: 'GrayText',
            color: 'white',
          }}
        />
        <Button input="Login" />
        <Button input="Register" />
      </div>
    </div>
  );
};

export default App;
