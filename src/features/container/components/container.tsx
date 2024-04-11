import { SearchBar } from "../../search/components/search-bar";
import { WeatherCard } from "../../weather-card/components/weather-card";
import { FilterPopUp } from "./filter-pop-up";
import { SelectBar } from "./select-bar";
import { useFormik } from 'formik';
import { useState, useEffect } from "react"; 
import { Loading } from "../../../shared/components/loading";
import { useProcessingData } from "../hooks/use-processing-data";


export const Container = () => {
    const [location, setLocation] = useState('');
    const { forecasts, isLoading, refetch, handleDelete, handleSort, filterTools } = useProcessingData(location);

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
        <div className="bg-gradient-to-r from-indigo-400 to-cyan-400 h-[auto] w-full bg-center bg-no-repeat min-h-[100vh]">
            <SearchBar formik={formik} />
            <div className="flex flex-col items-center justify-center mt-10">
                <div className="flex">
                    <div className="w-[300px] bg-white bg-opacity-50 p-5 rounded-lg m-5 h-[180px] flex flex-col justify-around items-center">
                        <SelectBar handleSort={handleSort} />
                        <FilterPopUp filterTools={filterTools} />
                    </div>
                    <div className="w-[900px]">
                        {isLoading && <Loading size={100} />}
                        {
                            forecasts.map((forecast, index) => (
                                    forecast.visable && ( 
                                        <WeatherCard 
                                        key={index}
                                        forecast={forecast}
                                        onDelete={(id: string) => handleDelete(id)} 
                                        index={0}
                                        />
                                    )
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};