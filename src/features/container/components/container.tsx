import { SearchBar } from "../../search/components/search-bar"
import { useState } from "react";

export const Container = () => {
    const [location, setLocation] = useState<string>('');
    const [searchLocations, setSearchLocations] = useState<{searchLocations: string[]}>({searchLocations: []});

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setSearchLocations(prevLocations => ({searchLocations: [...prevLocations.searchLocations, location]}));
        console.log(searchLocations)
    }

    const handleChange = (e: { target: { value: string; }; }) => {
        setLocation(e.target.value);
    };

    return(
        <div className="bg-gradient-to-r from-indigo-400 to-cyan-400 h-[100vh] w-full bg-center bg-no-repeat">
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
    )
}
