export type CurrentType = {
	temp: string;
	uvIndex: string;
	conditionIcon: string;
	condition: string;
	windStatus: string;
	windDir: string;
	humidity: string;
	visibility: string;
	air_quality: string;
}

export type LocationType = {
	name: string;
	country: string;
	localTime: string;
	lat: string;
	lon: string;
}

export type WeatherType = {
	location: LocationType;
	current: CurrentType;
}

export type HourlyWeatherType = {
	location: LocationType,
	hourlyForecast: HourlyType[]
}


/////////


export type HourlyType = {
	time: string;
	temp: string;
	imageUrl: string
}

export type DailyType = {
	date: string;
	max_temp: string;
	min_temp: string;
	imageUrl: string;
}