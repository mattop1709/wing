const initialState = [
	{
		ticketNumber: "1",
		status: "Nominate",
		notification: "new",
		ref: "1001",
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
		requestorDesignation: "Big Bawwsss",
		commentTextLatest: "Ali, What is your name?",
		comments: [
			{
				senderId: "1",
				senderName: "Ali Muhd Wasil bin Ali Absar",
				commentText:
					"Hafiz, where can we have all beautiful shawties around that area? I want them like right now!",
				timeStamp: "13 September 2017, 3.20pm"
			}
		],
		friends: [
			{
				staffName: "Engku Fariez bin Engku Azahan",
				staffDivision: "Group Digital Centre"
			},
			{
				staffName: "Nur Izzati binti Amir Amzah",
				staffDivision: "Group Procurement"
			}
		]
	}
];

export default (state = initialState, action) => {
	switch (action.type) {
		case "SET_DESTINATION":
			return [...state, { ref: "1002", destination: action.data }];
		case "SET_TRAVEL_TYPE":
			return [
				...state,
				{
					ref: "1002",
					status: "Draft",
					ticketNumber: "2",
					travelType: action.travelTypeText.travelTypeInput,
					destination: action.travelTypeText.destinationInput,
					travelFrom: action.travelTypeText.date,
					travelUntil: action.travelTypeText.date2,
					justificationText: action.travelTypeText.justificationInput,
					cost: action.travelTypeText.cost1
				}
			];
		case "NEW_REQUEST":
			return [
				...state,
				{
					ref: "1003",
					status: "Draft"
				}
			];
		default:
			return state;
	}
};
