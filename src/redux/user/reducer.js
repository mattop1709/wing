const initialState = {
	name: "Mohammad Hafiz bin Burhan",
	staffID: "TM35438",
	division: "Group Digital Centre",
	authentication: "true",
	submitRequest: "true",
	receiveTask: "true",
	authenticated: "true"
};

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
