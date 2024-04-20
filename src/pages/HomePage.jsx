import { Loader } from "../components";
import {
  FilterSection,
  HeaderApp,
  ListRestaurants,
} from "../features/restaurants/components";
import { useQueryRestaurant } from "../features/restaurants/hooks/useQueryRestaurants";
import { useState } from "react";

const HomePage = () => {
  const [limitCount, setLimitCount] = useState(6);
  const [filtered, setFiltered] = useState({
    price: 0,
    category: "",
    status: false,
  });

  const { data, isLoading, error } = useQueryRestaurant({
    category: filtered.category,
  });

  // create mock price and status in data restaurant
  const listRestaurants = data.restaurants?.map((restaurant) => {
    const mockPrice = Math.floor(Math.random() * 1000000);

    const mockStatus = (Math.round(Math.random()) * 5) % 2 === 0;

    return {
      ...restaurant,
      price: mockPrice,
      status: mockStatus,
    };
  });

  // filter restorant by price and status
  const filteredRestaurants = listRestaurants?.filter((resto) =>
    filtered.status
      ? resto.price > filtered.price && resto.status
      : resto.price > filtered.price
  );

  const handleChangeCategory = (event) => {
    setFiltered((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  const handleChangePrice = (event) => {
    setFiltered((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };

  const handleChangeStatus = (event) => {
    setFiltered((prevState) => ({
      ...prevState,
      status: event.target.checked,
    }));
  };

  return (
    <>
      <HeaderApp />
      <main className='container pt-8'>
        <hr className='bg-slate-800' />
        {/* filter bar */}
        <FilterSection
          handleChangeCategory={handleChangeCategory}
          handleChangePrice={handleChangePrice}
          handleChangeStatus={handleChangeStatus}
          setFiltered={setFiltered}
        />
        <hr className='bg-slate-800' />

        {/* list resturant */}
        {error && <p>{error.message}</p>}
        {isLoading ? (
          <div className='flex justify-center items-center min-h-[50vh]'>
            <Loader />
          </div>
        ) : (
          <section className='pt-4 pb-10'>
            <h1 className='text-2xl font-medium'>All Restaurants</h1>
            <div className='grid grid-cols-2 gap-x-4 gap-y-6 mt-5 md:grid-cols-3 lg:grid-cols-4 '>
              {filteredRestaurants?.slice(0, limitCount).map((restaurant) => (
                <ListRestaurants
                  key={restaurant.id}
                  {...restaurant}
                />
              ))}
            </div>

            {limitCount < filteredRestaurants?.length && (
              <div className='flex justify-center mt-8 '>
                <button
                  onClick={() => setLimitCount((prevState) => prevState + 8)}
                  className='border px-24 py-3 hover:bg-slate-500 rounded-lg hover:text-white'
                >
                  Load More
                </button>
              </div>
            )}
          </section>
        )}
      </main>
    </>
  );
};

export { HomePage };
