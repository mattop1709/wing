const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
		case "ADD_COMMENT":
			return [
				...state,
				Object.assign(
					{},
					{
						ticketNumber: action.id,
						senderId: "101",
						commentText: action.caption,
						senderName: action.author,
						timeStamp: action.time
					}
				)
			];
		default:
			return state;
	}
};
