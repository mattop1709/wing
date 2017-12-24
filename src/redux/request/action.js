export const newRequest = user => {
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
	return (dispatch, getState) => {
		const userInfoName = getState().user.name;
		const userInfoDivision = getState().user.division;
		dispatch({
			type: "NEW_REQUEST",
			ticketNumber: ticket,
			requestorName: userInfoName,
			requestorDivision: userInfoDivision,
			status: "Draft"
		});
	};
};

export const setDestination = destinationText => {
	return {
		type: "SET_DESTINATION",
		destinationText
	};
};

export const setTravelType = value => {
	return {
		type: "SET_TRAVEL_TYPE",
		value
	};
};

export const setJustificationText = justificationText => {
	return {
		type: "SET_JUSTIFICATION_TEXT",
		justificationText
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

export const setTravelFrom = dateFrom => {
	return {
		type: "SET_TRAVEL_FROM",
		dateFrom
	};
};

export const setTravelUntil = dateUntil => {
	return {
		type: "SET_TRAVEL_UNTIL",
		dateUntil
	};
};

export const addNominator = staffName => {
	return {
		type: "ADD_NOMINATOR_NAME",
		staffName
	};
};

export const addNominator2 = staffName => {
	return {
		type: "ADD_NOMINATOR_2_NAME",
		staffName
	};
};

export const addEndorser = staffName => {
	return {
		type: "ADD_ENDORSER_NAME",
		staffName
	};
};

export const addApprover = staffName => {
	return {
		type: "ADD_APPROVER_NAME",
		staffName
	};
};

export const submitRequest = status => {
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
