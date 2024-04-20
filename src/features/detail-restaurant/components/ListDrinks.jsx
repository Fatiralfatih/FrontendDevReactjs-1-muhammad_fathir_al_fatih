import { array } from "prop-types";
import { BiDrink } from "react-icons/bi";

const ListDrinks = ({ drinks }) => {
  return (
    <div className='pt-5 md:pt-0'>
      <h1 className='text-xl font-medium flex gap-1 items-center md:text-2xl md:justify-center'>
        Drinks
        <span>
          <BiDrink />
        </span>
      </h1>
      <div className='grid grid-cols-2 pt-3 gap-3 md:grid-cols-3 '>
        {drinks?.map((drink, index) => (
          <button
            key={index + 1}
            className='border-2 py-2 px-3 rounded-lg hover:bg-slate-500 hover:text-white'
          >
            {drink.name}
          </button>
        ))}
      </div>
    </div>
  );
};

ListDrinks.propTypes = {
  drinks: array,
};

export { ListDrinks };
