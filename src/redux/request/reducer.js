const initialState = [
	{
		ticketNumber: "1001",
		status: "Submit",
		notification: "new",
		timeStamp: "1 Jan 2017, 8.00am",
		destination: "Singapore",
		travelFrom: "21 Oct",
		travelUntil: "10 Nov",
		travelType: "Site Survey",
		justificationText:
			"I would like to Experience the ka-cing ka-cing while experiencing the magnificent of Alain Ducasse Le Louis XV Dinner",
		requestorName: "Ali Muhd Wasil bin Ali Absar bin Al Amin",
		requestorDivision: "Group Brand and Communication",
		eeiuName: "Abu bin Awang",
		nominatorName: "Jusoh bin Ali",
		endorserName: "Ali bin Awang",
		approverName: "Kabil bin Ali",
		cost: "12000",
		budget: "34000",
		costCategory: "EEIU",
		costCentre: "BMCE02",
		dialogBox: "Hi",
		commentTextLatest: "Ali, What is your name?",
		friendId1Name: "Mohammad Hafiz bin Burhan",
		friendId1Division: "Group Digital Centre",
		comments: [
			{
				senderId: "1",
				senderName: "Ali Muhd Wasil bin Ali Absar",
				commentText:
					"Hafiz, where can we have all beautiful shawties around that area? I want them like right now!",
				timeStamp: "13 September 2017, 3.20pm"
			},
			{
				senderId: "2",
				senderName: "Mohammad Hafiz bin Burhan",
				commentText: "Get the boot, into the mommy house",
				timeStamp: "14 September 2017, 4.17pm"
			}
		]
	}
];

export default (state = initialState, action) => {
	switch (action.type) {
		case "NEW_REQUEST":
			return [
				...state,
				Object.assign({
					ticketNumber: action.ticketNumber,
					status: action.status
				})
			];
		case "SET_DESTINATION":
			return [Object.assign(...state, { destination: action.text })];
		case "SET_TRAVEL_TYPE":
			return [
				Object.assign(...state, {
					travelType: action.value
				})
			];
		case "SET_TRAVEL_FROM":
			return [
				Object.assign(...state, {
					travelFrom: action.date
				})
			];

		case "SET_JUSTIFICATION_TEXT":
			return [
				Object.assign(...state, {
					justificationText: action.caption
				})
			];
		case "SET_COST_VALUE":
			return [
				Object.assign(...state, {
					cost: action.costValue
				})
			];
		case "SET_BUDGET_VALUE":
			return [
				Object.assign(...state, {
					budget: action.budgetValue
				})
			];
		case "SET_COST_CATEGORY":
			return [
				Object.assign(...state, {
					costCategory: action.value
				})
			];
		case "SET_TRAVEL_UNTIL":
			return [
				Object.assign(...state, {
					travelUntil: action.date2
				})
			];
		case "SUBMIT_REQUEST":
			return [
				Object.assign(...state, {
					status: action.status
				})
			];
		case "ADD_FRIEND_INFO":
			return [
				Object.assign(...state, {
					friendId1Name: action.friendId1Name,
					friendId1Division: action.friendId1Division
				})
			];
		default:
			return state;
	}
};

// friends: [
// 	{
// 		staffName: "Engku Fariez bin Engku Azahan",
// 		staffDivision: "Group Digital Centre"
// 	},
// 	{
// 		staffName: "Nur Izzati binti Amir Amzah",
// 		staffDivision: "Group Procurement"
// 	}
// ]
