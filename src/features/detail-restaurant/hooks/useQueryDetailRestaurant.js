import { useEffect, useState } from "react"

const useQueryDetailRestaurant = (idRestaurant) => {
    const [data, seData] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const getRestaurantById = async (idRestaurant) => {
        try {
            setIsLoading(true)
            const response = await fetch(`https://restaurant-api.dicoding.dev/detail/${idRestaurant}`);

            const responseJson = await response.json();

            seData(responseJson.restaurant);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        getRestaurantById(idRestaurant);
    }, [idRestaurant]);

    return { data, error, isLoading }
}

export { useQueryDetailRestaurant }