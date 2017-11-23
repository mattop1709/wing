// export const setDestination = text => {
// 	alert(text);
// 	return {
// 		type: "SET_DESTINATION",
// 		text
// 	};
// };

export const setTravelType = value => {
	// alert(travelTypeText.date);
	return {
		type: "SET_TRAVEL_TYPE",
		value
	};
};

export const newRequest = ticketNumber => {
	return {
		type: "NEW_REQUEST",
		ticketNumber: 2
	};
};

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
