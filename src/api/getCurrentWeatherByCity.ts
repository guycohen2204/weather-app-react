const ENDPOINT = 'https://api.weatherapi.com/v1';

const getCurrentWeatherByCity = async (cityName: string = 'London') => {
    try {
        const response = await fetch(
            `${ENDPOINT}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${cityName}`
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