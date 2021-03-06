const initialState = {
	name: "Mohammad Hafiz bin Burhan",
	staffID: "TM35438",
	division: "IT & Network Technology",
	authentication: "bbS1992",
	submitRequest: true,
	receiveTask: true,
	authenticated: true
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				authenticated: true,
				staffID: "",
				authentication: ""
			};
		case "LOGOUT":
			return {
				...state,
				authenticated: false,
				staffID: "",
				authentication: ""
			};
		case "SUBMIT_REQUEST":
			return {
				...state,
				submitRequest: action.submit
			};
		case "ADD_REQUEST_ID":
			return [...state, Object.assign({}, state, {})];
		default:
			return state;
	}
};
