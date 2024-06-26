import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

export const SearchBar = ({formik} : {formik: any}) => {
    return (
        <div className="flex justify-center items-center pt-5">
           <form onSubmit={formik.handleSubmit}>
                <OutlinedInput
                    id="location"
                    placeholder="Search your location ..."
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.location} 
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton onClick={formik.handleSubmit}>
                                <SearchIcon  />
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
                        '@media (max-width: 600px)': {
                            width: '90%',
                        }
                    }}
                />
           </form>
        </div>
    );
};


