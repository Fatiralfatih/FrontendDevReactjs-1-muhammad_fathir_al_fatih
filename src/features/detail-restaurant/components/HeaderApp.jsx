import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const HeaderApp = () => {
  return (
    <header className='container mt-6'>
      {/* navigation to home */}
      <Link to={"/"}>
        <button className='border-2 py-2 px-4 flex items-center gap-3 rounded-lg hover:bg-slate-500 hover:text-white'>
          <span>
            <IoArrowBack className='text-xl' />
          </span>
          Back To Home
        </button>
      </Link>
    </header>
  );
};

export { HeaderApp };
