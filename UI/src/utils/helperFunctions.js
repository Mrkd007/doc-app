export const getLS = (key) => {
	return localStorage.getItem(key);
};

export const userLoggedIn = () => {
	const user = getLS("user");
	const token = getLS("auth");
	const role = getLS("role");

	if (!(user || token || role)) {
		return false;
	}
	return true;
};
