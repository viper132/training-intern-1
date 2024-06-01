import { BiDownload } from 'react-icons/bi';
import InfoCard from '../components/card/Info';
import infoData from '../data/info';
import { RiProgress8Fill } from 'react-icons/ri';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import useOnGoing from '../store/useOnGoing';

const HomePage = () => {
  const { onGoing, paginedOnGoing, currentPage, rowPerPage, handleRemove, handlePage } =
    useOnGoing();

  const handleStatusColor = (status: string) => {
    let result = 'text-red-500';

    switch (status) {
      case 'In Progress':
        result = 'text-blue-500';
        break;
      case 'Completed':
        result = 'text-green-500';
        break;
      case 'Pending':
        result = 'text-yellow-500';
        break;
      case 'Not Started':
        result = 'text-gray-500';
        break;
      default:
        break;
    }
    return result;
  };
  return (
    <div className="w-full flex flex-col px-4 md:px-[20%] lg:px-[10%] py-4 h-full gap-4 overflow-auto">
      <div className="grid max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-4 gap-4">
        {infoData.map((info) => (
          <InfoCard info={info} />
        ))}
      </div>
      <div className="bg-[rgb(39,49,66)] rounded-md">
        <div className="flex justify-between px-10 py-6">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold">Ongong Projects</p>
            <p className="font-thin">| {onGoing.length} Projects</p>
          </div>
          <button>
            <BiDownload />
          </button>
        </div>
        <div className="w-full h-[400px] overflow-auto text-nowrap">
          <table className="w-full">
            <thead className="bg-white/20">
              <tr className="*:text-left *:p-2">
                <th>Project</th>
                <th>Deadline</th>
                <th>Team Lead</th>
                <th>Budget</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {paginedOnGoing.map((val, key) => (
                <tr className="*:border-b *:border-white/40 *:p-2 *:hover:bg-black/10">
                  <td>
                    <div className="flex flex-col">
                      <div>{val.project.name}</div>
                      <div className="text-xs text-white/50">{val.project.company}</div>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col">
                      <div>{val.deadline.date}</div>
                      <div className="text-xs text-white/50">{val.deadline.details}</div>
                    </div>
                  </td>
                  <td>{val.teamLead}</td>
                  <td>
                    <div className="flex flex-col">
                      <div>{val.budget.total}</div>
                      <div className="text-xs text-white/50">{val.budget.details}</div>
                    </div>
                  </td>
                  <td>
                    <div className="flex gap-2 justify-between items-center">
                      <div className="flex gap-2 items-center">
                        <RiProgress8Fill className={handleStatusColor(val.status)} />
                        <p>{val.status}</p>
                      </div>
                      <button
                        className="bg-red-500 text-white shadow-sm shadow-red-500 rounded-md px-4 py-1"
                        onClick={() => handleRemove(key)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex bg-black/40">
        <button
          className="bg-[rgb(39,49,66)] text-white p-2 rounded-md disabled:bg-[rgb(6,7,10)]"
          onClick={() => handlePage('prev')}
          disabled={currentPage <= 1}
        >
          <BsArrowLeft />
        </button>
        <p className="flex-grow text-center">
          Page {currentPage} of {Number(onGoing.length / rowPerPage).toFixed(0)}
        </p>
        <button
          className="bg-[rgb(39,49,66)] text-white p-2 rounded-md disabled:bg-[rgb(6,7,10)]"
          onClick={() => handlePage('next')}
          disabled={currentPage >= Number((onGoing.length / rowPerPage).toFixed(0))}
        >
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default HomePage;
