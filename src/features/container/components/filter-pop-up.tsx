import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Slider from '@mui/material/Slider';
import { popupStyle } from '../constants/filter-pop-up';
import { PropertyProps } from '../types/property';

export const FilterPopUp = ({filterTools} : {filterTools: PropertyProps}) => {
  const [open, setOpen] = useState(false);
  const {properties, changeProperty, handleFilter, resetFilter} = filterTools;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined" color="primary">set filter</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={popupStyle}>
            <div className='w-[400px]'>
                {properties.map((property, index) => (
                    <div key={index}>
                        <h3 className='text-xl font-bold'>{property[0]} ({property[3]})</h3>
                        <Slider
                            defaultValue={[Number(property[4]),Number(property[5])]}
                            getAriaValueText={(value) => `${value}`}
                            name={String(property[0])}
                            valueLabelDisplay="auto"
                            onChange={(event: any, newValue:any) => changeProperty(event,newValue)}
                            step={1}
                            min={Number(property[1])}
                            max={Number(property[2])}
                        />
                    </div>
                ))}
            </div>
            <div className='flex justify-around w-[200px]'>
                <Button 
                    onClick={() => (handleFilter(), handleClose())} 
                    variant="outlined"
                    color="primary"
                    sx={{marginTop: 3}}
                >confirm</Button>
                <Button
                    onClick={() => (resetFilter(), handleClose())}
                    variant="outlined"
                    color="primary"
                    sx={{marginTop: 3}}
                >reset</Button>
            </div>
        </Box>
      </Modal>
    </div>
  );
}