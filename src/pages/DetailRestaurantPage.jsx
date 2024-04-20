import { useParams } from "react-router-dom";
import { useQueryDetailRestaurant } from "../features/detail-restaurant/hooks/useQueryDetailRestaurant";
import {
  DescriptionRestorant,
  HeaderApp,
  ListDrinks,
  ListFoods,
} from "../features/detail-restaurant/components";
import { Loader } from "../components/Loader";

const DetailRestaurantPage = () => {
  const { id } = useParams();
  const { data: restaurant, error, isLoading } = useQueryDetailRestaurant(id);

  return (
    <>
      <HeaderApp />

      <main className='container pt-5'>
        {error && <p>Restaurant Tidak ditemukan</p>}
        {isLoading ? (
          <div className='flex justify-center items-center min-h-[50vh]'>
            <Loader />
          </div>
        ) : (
          <>
            {/* detail restaurant */}
            <section className='pb-5'>
              <h1 className='text-2xl font-semibold'>Detail Restaurant</h1>
              <DescriptionRestorant
                pictureId={restaurant.pictureId}
                address={restaurant.address}
                categories={restaurant.categories}
                city={restaurant.city}
                description={restaurant.description}
                name={restaurant.name}
                rating={restaurant.rating}
              />
            </section>

            <hr className='bg-slate-500' />
            {/* list menu */}
            <section className='pt-5 pb-10'>
              <h1 className='text-center text-2xl font-semibold md:text-3xl'>
                Daftar Menu
              </h1>

              <div className='md:flex md:gap-6 md:justify-evenly md:pt-6 lg:gap-0'>
                <ListFoods foods={restaurant?.menus?.foods} />

                <ListDrinks drinks={restaurant?.menus?.drinks} />
              </div>
            </section>
          </>
        )}
      </main>
    </>
  );
};

export default DetailRestaurantPage;
