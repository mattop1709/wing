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
	// const ticket = Math.floor(Date.now() / 100000000);
	const generateTicket = function() {
		return (
			"WINGS" +
			"-" +
			Math.random()
				.toString(36)
				.substr(2, 5)
				.toUpperCase()
		);
	};
	const ticket =
		"WINGS" +
		"-" +
		Math.random()
			.toString(36)
			.substr(2, 5)
			.toUpperCase();
	return {
		type: "NEW_REQUEST",
		ticketNumber: ticket,
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

export const submitRequest = status => {
	// const date = Date.now();
	// if (!Date.now) {
	// 	Date.now = function now() {
	// 		return new Date().getTimezoneOffset().toString();
	// 	};
	// }
	// const date1 = new Date();
	function convertUTCDateToLocalDate(date) {
		const newDate = new Date(
			date.getTime() + date.getTimezoneOffset() * 60 * 1000
		);

		const offset = date.getTimezoneOffset() / 60;
		const hours = date.getHours();

		newDate.setHours(hours + offset + 8);

		return newDate;
	}
	const dateSubmit = convertUTCDateToLocalDate(new Date());
	return {
		type: "SUBMIT_REQUEST",
		status: "Submit",
		timeStamp: dateSubmit
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
