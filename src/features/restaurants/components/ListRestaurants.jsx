import { BsStar, BsStarFill } from "react-icons/bs";
import { formatRupiah } from "../../../utils";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { bool, number, string } from "prop-types";

const ListRestaurants = ({
  id,
  pictureId,
  name,
  rating,
  price,
  city,
  status,
}) => {
  return (
    <div>
      {/* thumbnail */}
      <figure className='h-[150px] w-full md:h-[200px]'>
        <img
          src={`https://restaurant-api.dicoding.dev/images/small/${pictureId}`}
          alt={`restaurant`}
          className='w-full h-full bg-contain aspect-auto rounded-lg'
        />
      </figure>

      {/* name restaurants */}
      <h3 className='text-lg font-medium pt-1 max-h-[60px]'>{name}</h3>

      {/* ratings */}
      <div className='flex gap-1 pt-2 items-center'>
        {Array.from({ length: parseInt("5" || "0") }, (_, index) => {
          if (parseInt(rating) < index + 1) {
            return (
              <BsStar
                key={index}
                className='text-yellow-400'
              />
            );
          }
          return (
            <BsStarFill
              key={index}
              className='text-yellow-400'
            />
          );
        })}
        <small className='ps-2'>( {rating} )</small>
      </div>

      {/* kota */}
      <p className='pt-3'>{city}</p>

      {/* price and status */}
      <div className='flex flex-col justify-between pt-2 gap-2 md:flex-row'>
        <h2 className='text-lg font-semibold'>{formatRupiah(price)}</h2>
        {status ? (
          <p className='flex items-center gap-1 text-sm'>
            <span>
              <RiCheckboxBlankCircleFill className='text-green-500' />
            </span>
            Open now
          </p>
        ) : (
          <p className='flex items-center gap-1 text-sm'>
            <span>
              <RiCheckboxBlankCircleFill className='text-red-500' />
            </span>
            Closed
          </p>
        )}
      </div>

      <Link to={`/detail/${id}`}>
        <button className='w-full p-2 mt-4 text-sm bg-indigo-500 hover:bg-indigo-700 text-white rounded-lg'>
          Learn More
        </button>
      </Link>
    </div>
  );
};

ListRestaurants.propTypes = {
  id: string.isRequired,
  pictureId: string.isRequired,
  name: string.isRequired,
  rating: number.isRequired,
  price: number.isRequired,
  city: string.isRequired,
  status: bool,
};

export { ListRestaurants };
