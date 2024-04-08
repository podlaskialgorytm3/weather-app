import { SearchBar } from "../../search/components/search-bar";
import { useFormik } from 'formik';
import { useState, useEffect } from "react"; 
import { useFetchWeather } from "../api/use-fetch-weather";
import { Loading } from "../../../shared/components/loading";
import Swal from "sweetalert2"

export const Container = () => {
    const [location, setLocation] = useState('');
    const [forecasts, setForecasts] = useState([] as object[]);
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

    useEffect(() => {
        setForecasts((prevValeus) => [...prevValeus,data])
        console.log(forecasts)
    },[data,location])
    
    return (
        <div className="bg-gradient-to-r from-indigo-400 to-cyan-400 h-[auto] w-full bg-center bg-no-repeat min-h-[100vh]">
            <SearchBar formik={formik} />
            <div className="flex flex-col items-center justify-center">
                {isLoading && <Loading size={100} />}
                {forecasts && (
                    forecasts.map((forecast, index) => (
                        forecast !== undefined && (
                            <div key={index} className="bg-white bg-opacity-50 p-5 rounded-lg m-5">
                                {JSON.stringify(forecast)}
                            </div>
                        )
                    ))
                )}
            </div>
        </div>
    );
};