import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem } from '@mui/material';
import { FormControl, InputLabel } from '@mui/material';
import Box from '@mui/material/Box';

const SELECT_PROPERTIES = [
    ['temp','from the coldest',true],
    ['temp','from the hottest',false],
    ['pressure','from the lowest pressure',true],
    ['pressure','from the highest pressure',false],
    ['humidity','from the lowest humidity',true],
    ['humidity','from the highest humidity',false],
    ['wind','from the lowest wind',true],
    ['wind','from the highest wind',false],
]

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
