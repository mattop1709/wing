const initialState = {
	name: "Mohammad Hafiz bin Burhan",
	staffID: "TM35438",
	division: "Group Digital Centre",
	authentication: "true",
	receiveRequest: "true",
	receiveTask: "true"
};

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
