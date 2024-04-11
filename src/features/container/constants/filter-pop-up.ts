import { PropertyArray } from "../types/property";

export const popupStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 400,
    bgcolor: 'background.paper',
    borderRadius: 6,
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    p: 4,
    '@media (max-width: 600px)': {
      width: '90%',
      height: '60%',
    },
  };
  
export const FILTER_PROPERTIES: PropertyArray = [
      ['temp',-50,50,'°C',-50,50],
      ['pressure',800,1200,'hPa',800,1200],
      ['humidity',0,100,'%',0,100],
      ['wind',0,40,'m/s',0,40],
  ]