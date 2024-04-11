export const CountryIcon = ({country}: {country: string}) => {
    return(
        <img 
            src={`https://flagcdn.com/128x96/${country.toLowerCase()}.png`} 
            className="mr-3"
            alt={country} 
            width={30} 
        />
    )
}