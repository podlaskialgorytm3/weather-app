import { SearchBar } from "../../search/components/search-bar";
import { useFormik } from 'formik';
import { useState, useEffect } from "react"; 
import { useFetchWeather } from "../api/use-fetch-weather";

export const Container = () => {
    const [location, setLocation] = useState('');
    const { data, refetch, isLoading } = useFetchWeather(location);

    const formik = useFormik({
        initialValues: {
            location: '',
        },
        onSubmit: (values: { location: string }): void => {
            setLocation(values.location);
        },
    });

    useEffect(() => {
        if (location) {
            refetch();
        }
    }, [location, refetch]);

    return (
        <div className="bg-gradient-to-r from-indigo-400 to-cyan-400 h-[100vh] w-full bg-center bg-no-repeat">
            <SearchBar formik={formik} />
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div>{data && JSON.stringify(data)}</div>
            )}
        </div>
    );
};