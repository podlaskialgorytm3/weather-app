export const WeatherProperty = ({property, value} : {property: string, value: string}) => {
    return(
        <div className="m-3 flex flex-col justify-center items-center">
            <p className=" text-xl font-bold">{value}</p>
            <p>{property}</p>
        </div>
    )
}