export const login = (staffID, authentication) => {
	// alert("authenticated");
	return {
		type: "LOGIN",
		staffID: staffID,
		authentication: authentication
	};
};

export const logout = () => {
	// alert("authenticated");
	return {
		type: "LOGOUT"
	};
};
