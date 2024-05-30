
import mainBg from '../assets/bg.png';
import '../App.css';
import Input from '../components/input';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';


console.log(mainBg);
const LoginPage = () => {
    // const [user, setUser] = useState({
    //     username: '',
    //     password: '',
    // });

    const handleSubmit = () => {
        navigate("/");
    };

    // const handleUser =
    //     (type: 'username' | 'password') => (ev: React.ChangeEvent<HTMLInputElement>) => {
    //         setUser({ ...user, [type]: ev.target.value });
    //     };

    const navigate = useNavigate();


    return (
        <div
            className={`flex items-center justify-center h-screen bg-cover bg-no-repeat`}
            style={{
                backgroundImage: `url("${mainBg}")`,
            }}
        >
            <div className="bg-cyan-500/20  flex flex-col gap-[20px] rounded-[20px] p-[1px] px-[40px] py-[20px] shadow-2xl">
                <div className='text-center text-white font-bold text-[40px]'>Login</div>
                <Input placeholder='username' type='text'
                />
                <Input placeholder='password' type='password'
                />
                <Button text='Submit' onPencet={handleSubmit} />
            </div>
        </div>
    );
};

export default LoginPage;
