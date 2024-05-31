
import { Outlet, useNavigate } from 'react-router-dom';
import ButtonMenu from '../components/menu';

const DefaultLayout = () => {
    const handleSubmit = () => {
        navigate("/login");
    };
    const navigate = useNavigate();
    return (
        <div className='bg-slate-400 h-screen flex justify-stretch'>
            <div className='bg-slate-200 w-[5vh] hover:w-[40vh] transition-all duration-1000 ease-linear text-white flex flex-col gap-5 py-[30px]'>
                <ButtonMenu text='Submit' onPencet={handleSubmit} />
                <ButtonMenu text='Submit' onPencet={handleSubmit} />
            </div>
            <div className='flex flex-col flex-grow'>
                <div className='bg-white h-[50px]'>Navigation bar</div>
                <div className='flex-grow'>
                    <Outlet />
                </div>
                <div className='bg-white h-[150px]'>Footer bar</div>
            </div>
        </div>
    )
}

export default DefaultLayout