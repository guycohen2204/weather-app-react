export const capitalize = (s: string): string => {
	if (!s) return '';
	return s
		.split(/ |-/)
		.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};
