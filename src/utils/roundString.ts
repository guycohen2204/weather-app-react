export const roundString = (s?: string): string => {
	if (s)
		return Math.round(+s).toString();
	return '0'
}