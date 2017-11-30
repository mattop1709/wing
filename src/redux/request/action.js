export const setDestination = text => {
	return {
		type: "SET_DESTINATION",
		text
	};
};

export const setTravelType = value => {
	return {
		type: "SET_TRAVEL_TYPE",
		value
	};
};

export const newRequest = (ticketNumber, status) => {
	// let newTicket = "1000";
	return {
		type: "NEW_REQUEST",
		ticketNumber: "999",
		status: "Draft"
	};
};

export const setJustificationText = caption => {
	return {
		type: "SET_JUSTIFICATION_TEXT",
		caption
	};
};

export const setCostValue = costValue => {
	return {
		type: "SET_COST_VALUE",
		costValue
	};
};

export const setBudgetValue = budgetValue => {
	return {
		type: "SET_BUDGET_VALUE",
		budgetValue
	};
};

export const setCostCategory = value => {
	return {
		type: "SET_COST_CATEGORY",
		value
	};
};

export const submitRequest = (status, timeStamp) => {
	// var date = new Date();
	return {
		type: "SUBMIT_REQUEST",
		status: "Submit",
		timeStamp
	};
};

export const setTravelFrom = date => {
	return {
		type: "SET_TRAVEL_FROM",
		date
	};
};

export const setTravelUntil = date2 => {
	return {
		type: "SET_TRAVEL_UNTIL",
		date2
	};
};

export const newFriendId = (friendId1Name, friendId1Division) => {
	alert(friendId1Division);
	return (dispatch, getState) => {
		const { addFriend } = getState();
		dispatch({
			type: "ADD_FRIEND_INFO",
			friendId1Name: addFriend.staffName,
			friendId1Division: addFriend.staffDivision
		});
	};
};
