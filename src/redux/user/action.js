export const login = (staffID, authentication) => {
	return {
		type: "LOGIN",
		staffID: staffID,
		authentication: authentication
	};
};

export const logout = () => {
	return {
		type: "LOGOUT"
	};
};

export const addRequestId = () => {
	return {
		type: "ADD_REQUEST_ID",
		ticketNumber
	};
};

// export const userSubmit = () => {
// 	return {
// 		type: "SUBMIT_REQUEST",
// 		submit: true
// 	};
// };
