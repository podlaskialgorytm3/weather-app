import OutlinedInput from '@mui/material/OutlinedInput';

export const SearchBar = () => {
    return (
        <div className="flex justify-center items-center pt-5">
            <OutlinedInput
                placeholder="Search your location ..."
                fullWidth
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
    )
}
