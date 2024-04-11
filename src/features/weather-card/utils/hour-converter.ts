export const hourConverter = (time: number,timezone: number) => {
    const sunriseTimestamp = time * 1000 - 7200000 + timezone * 1000;
    const sunriseDate = new Date(sunriseTimestamp);
    const sunriseHour = sunriseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return sunriseHour;
}