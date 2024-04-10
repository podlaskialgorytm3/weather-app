import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Slider from '@mui/material/Slider';
import { popupStyle, FILTER_PROPERTIES } from '../constants/filter-pop-up';


export const FilterPopUp = () => {
  const [open, setOpen] = useState(false);
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
                {FILTER_PROPERTIES.map((property, index) => (
                    <div key={index}>
                        <h3 className='text-xl font-bold'>{property[0]} ({property[3]})</h3>
                        <Slider
                            defaultValue={[Number(property[1]),Number(property[2])]}
                            getAriaValueText={(value) => `${value}`}
                            valueLabelDisplay="auto"
                            step={1}
                            min={Number(property[1])}
                            max={Number(property[2])}
                        />
                    </div>
                ))}
            </div>
            <Button onClick={handleOpen} variant="outlined" color="primary" sx={{marginTop: 3}}>confirm</Button>
        </Box>
      </Modal>
    </div>
  );
}