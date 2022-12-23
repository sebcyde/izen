export const push = (route = '') => {
	location.assign(`http://localhost:3000//${route}`);
};
