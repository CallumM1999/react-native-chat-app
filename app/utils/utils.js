export const capitalize = string => {
	const start = string.substring(0, 1);
	const end = string.substring(1);
	return start.toUpperCase() + end;
};