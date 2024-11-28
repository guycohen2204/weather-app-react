const ENDPOINT = 'http://localhost:3000';

const getHourlyForecastByCityName = async (cityName: string = 'London') => {
    try {
        const response = await fetch(
            `${ENDPOINT}/hourly/${cityName}`
        );

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
};

export default getHourlyForecastByCityName;