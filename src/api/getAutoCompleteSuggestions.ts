const ENDPOINT = 'http://localhost:3000';

const getAutoCompleteSuggestions = async (value: string): Promise<string[]> => {
	try {
		const response = await fetch(`${ENDPOINT}/autocomplete/${value}`);

		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const json: string[] = await response.json();
		return json;
	} catch (error) {
		console.error(error);
        return [];
	}
};

export default getAutoCompleteSuggestions;
