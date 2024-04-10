import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
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
         
        </Box>
      </Modal>
    </div>
  );
}