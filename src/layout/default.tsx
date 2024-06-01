import { Outlet, useNavigate } from 'react-router-dom';
import mainBg from '../assets/bg.jpg';
import Menu from '../components/Menu';
import { FiMenu } from 'react-icons/fi';
import { HiHome } from 'react-icons/hi';
import { MdAccountBalance } from 'react-icons/md';
import { BiCalculator, BiLogOut } from 'react-icons/bi';
import userStore from '../store/userStore';

const DefaultLayout = () => {
  const { open, handleOpen } = userStore();
  const navigate = useNavigate();

  const handleRedirect = (to: string) => () => {
    navigate(to);
  };
  return (
    <section
      className="h-screen bg-cover bg-no-repeat flex flex-col text-white"
      style={{
        backgroundImage: `url("${mainBg}")`,
      }}
    >
      <div className="flex-grow flex">
        <div className="bg-[rgb(249,221,69)] shadow-md shadow-[rgb(249,221,69)] transition-all flex flex-col gap-2">
          <div className="flex gap-2 items-center px-4 py-2 text-black shadow-md mb-5">
            <button className="hover:bg-black/20 p-1 rounded-full" onClick={handleOpen}>
              <FiMenu />
            </button>
            {open && <p className="font-bold">Training App</p>}
          </div>
          {open && (
            <>
              <Menu icon={<HiHome />} text="Home" onClick={handleRedirect('/')} />
              <Menu
                icon={<MdAccountBalance />}
                text="Account Management"
                onClick={handleRedirect('account')}
              />
              <Menu
                icon={<BiCalculator />}
                text="Calculator"
                onClick={handleRedirect('/calculator')}
              />

              <Menu icon={<BiLogOut />} text="Logout" onClick={handleRedirect('/login')} />
            </>
          )}
        </div>
        <main className="w-full max-h-[calc(100vh-18px)] overflow-auto">
          <Outlet />
        </main>
      </div>
      <footer className="h-[18px] bg-[rgb(92,173,192)] text-center font-thin text-xs">
        Training 2024
      </footer>
    </section>
  );
};

export default DefaultLayout;
