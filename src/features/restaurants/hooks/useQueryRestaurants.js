import { useEffect, useState } from "react"

export const useQueryRestaurant = ({ category }) => {
    const [data, seData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const getAllRestaurants = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(`https://restaurant-api.dicoding.dev/search?q=${category}`);

            const responseJson = await response.json();

            seData(responseJson);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        getAllRestaurants();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    return { data, error, isLoading }
}