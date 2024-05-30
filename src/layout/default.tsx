import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div className="bg-blue-400 h-screen flex justify-stretch">
      <div className=" bg-black hover:w-[200px] transition-all ease-in-out duration-1000 text-white">
        Sidebar
      </div>
      <div className="flex flex-col flex-grow">
        <div className="bg-blue-700">Navigation</div>
        <div className="flex-grow">
          <Outlet />
        </div>
        <div className="bg-blue-700">Footer</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
