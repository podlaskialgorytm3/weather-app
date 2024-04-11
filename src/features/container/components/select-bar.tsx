import { SELECT_PROPERTIES } from '../constants/select-bar';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem } from '@mui/material';
import { FormControl, InputLabel } from '@mui/material';
import Box from '@mui/material/Box';

export const SelectBar = ({handleSort}: {handleSort: (event: SelectChangeEvent) => void}) => {
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort by:</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    sx={{ width: '250px' }}
                    id="demo-simple-select"
                    label="Sort by:"
                    onChange={handleSort}
                    defaultValue={JSON.stringify(SELECT_PROPERTIES[0])}
                >
                    {SELECT_PROPERTIES.map((property, index) => (
                        <MenuItem key={index} value={JSON.stringify(property) || []}>{property[1]}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
