const initialState = {
	name: "Mohammad Hafiz bin Burhan",
	staffID: "TM35438",
	division: "Group Digital Centre",
	authentication: "bbS1992",
	submitRequest: "true",
	receiveTask: "true",
	authenticated: "true"
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				authenticated: "true",
				staffID: "",
				authentication: ""
			};
		case "LOGOUT":
			return {
				...state,
				authenticated: "false",
				staffID: "",
				authentication: ""
			};
		default:
			return state;
	}
};
