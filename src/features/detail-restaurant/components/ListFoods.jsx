import { array } from "prop-types";
import { PiBowlFood } from "react-icons/pi";

const ListFoods = ({ foods }) => {
  return (
    <div className='pt-2 md:pt-0'>
      <h1 className='text-xl font-medium flex gap-1 items-center  md:text-2xl md:justify-center'>
        Foods
        <span>
          <PiBowlFood />
        </span>
      </h1>
      <div className='grid grid-cols-2 pt-3 gap-3 md:grid-cols-3'>
        {foods?.map((food, index) => (
          <button
            key={index + 1}
            className='border-2 py-2 px-3 rounded-lg hover:bg-slate-500 hover:text-white'
          >
            {food.name}
          </button>
        ))}
      </div>
    </div>
  );
};

ListFoods.propTypes = {
  foods: array,
};

export { ListFoods };
