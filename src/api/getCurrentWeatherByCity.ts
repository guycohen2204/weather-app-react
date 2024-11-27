const ENDPOINT = 'http://localhost:3000';

const getCurrentWeatherByCity = async (cityName: string = 'London') => {
    try {
        const response = await fetch(
            `${ENDPOINT}/current/${cityName}`
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

export default getCurrentWeatherByCity;