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
}

export type WeatherType = {
	location: LocationType;
	current: CurrentType;
}