import { SearchBar } from "../../search/components/search-bar";
import { useFormik } from 'formik';
import { useState, useEffect } from "react"; 
import { useFetchWeather } from "../api/use-fetch-weather";
import { Loading } from "../../../shared/components/loading";
import Swal from "sweetalert2"

export const Container = () => {
    const [location, setLocation] = useState('');
    const { data, isError, error, refetch, isLoading } = useFetchWeather(location);

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

    useEffect(() => {
        if(isError) {
            Swal.fire({
                title: "Error",
                text: error.message,
                icon: "error",
                confirmButtonText: "Ok"
            })
        }
    
    },[isError, error])
    
    return (
        <div className="bg-gradient-to-r from-indigo-400 to-cyan-400 h-[100vh] w-full bg-center bg-no-repeat">
            <SearchBar formik={formik} />
            {isLoading ? (
                <Loading size={100} />
            ) : (
                <div>{data && JSON.stringify(data)}</div>
            )}
        </div>
    );
};