import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

import { useState } from 'react';

export const SearchBar = () => {
    const [searchLocations, setSearchLocations] = useState<{searchLocations: string[]}>({searchLocations: []});
    const [location, setLocation] = useState<string>('');

    const handleChange = (e: { target: { value: string; }; }) => {
        setLocation(e.target.value);
    };
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setSearchLocations({searchLocations: [...searchLocations.searchLocations, location]});
        setLocation('');
    }

    return (
        <div className="flex justify-center items-center pt-5">
           <form onSubmit={handleSubmit}>
                <OutlinedInput
                    placeholder="Search your location ..."
                    fullWidth
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    sx={{
                        width: '500px',
                        borderRadius: '999px',
                        backgroundColor: 'white',
                        '& input': {
                            padding: '10px 20px',
                        },
                    }}
                />
           </form>
        </div>
    );
};


