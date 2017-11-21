// export const setDestination = destinationText => {
// 	return {
// 		type: "SET_DESTINATION",
// 		destinationText
// 	};
// };

export const setTravelType = travelTypeText => {
	// alert(travelTypeText.date);
	return {
		type: "SET_TRAVEL_TYPE",
		travelTypeText
	};
};

// export const newRequest = data => {
// 	return {
// 		type: "NEW_REQUEST",
// 		data
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
