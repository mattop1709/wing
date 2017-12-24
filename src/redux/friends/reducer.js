const initialState = [
	// {
	// 	id: 1,
	// 	deleted: false,
	// 	staffName: "Engku Fariez bin Engku Azahan",
	// 	staffDivision: "Group Digital Centre"
	// },
	// {
	// 	id: 2,
	// 	deleted: false,
	// 	staffName: "Nur Izzati binti Amir Amzah",
	// 	staffDivision: "Group Procurement"
	// },
	// {
	// 	id: 3,
	// 	deleted: false,
	// 	staffName: "Choo Chia Pooh",
	// 	staffDivision: "Group Brand and Communicatin"
	// },
	// {
	// 	id: 4,
	// 	deleted: false,
	// 	staffName: "Roaida binti Abdullah",
	// 	staffDivision: "Group Procurement"
	// }
];

export default (state = initialState, action) => {
	switch (action.type) {
		case "ADD_FRIEND_NAME":
			return [
				...state,
				Object.assign(
					{},
					{
						staffName: action.name,
						staffDivision: action.div
					}
				)
			];
		case "REMOVE_FRIEND_NAME":
			return state.map(
				state =>
					state.id === action.id ? { ...state, deleted: !state.deleted } : state
			);

		default:
			return state;
	}
};

// return state.map(friend => friend.id === action.id, {
// 	...state,
// 	deleted: !state.deleted
// });

// return [
// 	...state,
// 	Object.assign(
// 		{},
// 		{
// 			deleted: action.remove
// 		}
// 	)
// ];
