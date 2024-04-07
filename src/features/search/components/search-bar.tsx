import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

import { HandleChange, HandleSubmit } from '../types/search-bar';

export const SearchBar = ({handleChange,handleSubmit}:{handleChange: HandleChange, handleSubmit: HandleSubmit}) => {
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


