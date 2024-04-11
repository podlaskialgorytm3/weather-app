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
  };
  
export const FILTER_PROPERTIES = [
      ['temp',-100,100,'°C',-100,100],
      ['pressure',0,2000,'hPa',0,2000],
      ['humidity',0,100,'%',0,100],
      ['wind',0,100,'m/s',0,100],
  ]