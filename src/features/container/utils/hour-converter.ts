export const hourConverter = (time: number) => {
    const sunriseTimestamp = time * 1000; // Przyjmuję, że wartość to np. 1678954321000 (timestamp)
    const sunriseDate = new Date(sunriseTimestamp);
    const sunriseHour = sunriseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return sunriseHour;
}