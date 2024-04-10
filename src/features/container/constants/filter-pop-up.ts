export const popupStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 600,
    bgcolor: 'background.paper',
    borderRadius: 6,
    boxShadow: 24,
    p: 4,
  };
  
export const FILTER_PROPERTIES = [
      ['temp',0,100],
      ['pressure',0,2000],
      ['humidity',0,100],
      ['wind',0,100],
  ]