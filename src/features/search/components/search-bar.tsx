import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

export const SearchBar = () => {
    const handleSearch = () => {
        console.log('Searching...');
    };

    return (
        <div className="flex justify-center items-center pt-5">
            <OutlinedInput
                placeholder="Search your location ..."
                fullWidth
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton onClick={handleSearch}>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
                sx={{
                    width: '80%',
                    maxWidth: '500px',
                    borderRadius: '999px',
                    backgroundColor: 'white',
                    '& input': {
                        padding: '10px 20px',
                    },
                }}
            />
        </div>
    );
};


