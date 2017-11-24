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

export const newRequest = status => {
	// let newTicket = "1000";
	return {
		type: "NEW_REQUEST",
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

export const submitRequest = text => {
	return {
		type: "SUBMIT_REQUEST"
	};
};

// export const setTravelFrom = date => {
// 	// alert(date);
// 	return {
// 		type: "SET_TRAVEL_FROM",
// 		date
// 	};
// };

// export const submitComplete = status => {
// 	if (status == "") {
// 		return {
// 			type: "SUBMIT_DONE",
// 			status
// 		};
// 	} else {
// 		return { type: "TEST" };
// 	}
// };
