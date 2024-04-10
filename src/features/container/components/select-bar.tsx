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
    ['sunrise','from the earliest sunrise',true],
    ['sunrise','from the latest sunrise',false],
    ['sunset','from the earliest sunset',true],
    ['sunset','from the latest sunset',false]
]

export const SelectBar = () => {
    const handleChange = (event: SelectChangeEvent) => {
        console.log(JSON.parse(event.target.value)); // Parsowanie wartości do tablicy
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort by:</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Sort by:"
                    onChange={handleChange}
                >
                    {SELECT_PROPERTIES.map((property, index) => (
                        <MenuItem key={index} value={JSON.stringify(property) || []}>{property[1]}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
