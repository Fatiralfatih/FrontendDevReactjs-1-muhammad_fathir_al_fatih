import { array, number, string } from "prop-types";
import { BsStar, BsStarFill } from "react-icons/bs";

const DescriptionRestorant = ({
  pictureId,
  name,
  rating,
  address,
  city,
  description,
  categories,
}) => {
  return (
    <div className='pt-5 lg:flex lg:gap-8  lg:pt-8'>
      <figure className='w-full h-full lg:min-w-[500px]'>
        <img
          src={`https://restaurant-api.dicoding.dev/images/large/${pictureId}`}
          alt={`thumbnail-${name}`}
          className='w-full h-full aspect-auto rounded-lg'
        />
      </figure>
      <div className='pt-4 lg:pt-0'>
        <div className='flex justify-between lg:flex-col'>
          {/* name restaurant */}
          <h1 className='text-2xl font-medium md:text-3xl'>{name}</h1>

          {/* ratings restaurant */}
          <div className='flex gap-1 pt-2 text-sm flex-wrap'>
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
            <small>( {rating} )</small>
          </div>
        </div>
        {/* address */}
        <div className='flex gap-1'>
          <p className='pt-2 font-medium'>{address}</p>
          <p className='pt-2 font-medium'>{city}</p>
        </div>
        {/* description */}
        <p className='mt-4'>{description}</p>

        {/* category */}
        <div className='space-x-3 mt-4'>
          {categories?.map((category, index) => (
            <button
              key={index + 1}
              className='border py-2 px-5 hover:bg-slate-500 hover:text-white rounded-lg cursor-default'
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

DescriptionRestorant.propTypes = {
  pictureId: string,
  name: string,
  rating: number,
  address: string,
  city: string,
  description: string,
  categories: array,
};

export { DescriptionRestorant };
