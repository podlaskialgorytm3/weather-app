export const WeatherCard = ({index,forecast} : {index:number,forecast: object}) => (
    <div key={index} className="bg-white bg-opacity-50 p-5 rounded-lg m-5">
            {JSON.stringify(forecast)}
    </div>
)