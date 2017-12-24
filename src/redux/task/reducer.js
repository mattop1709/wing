const initialState = [
	{
		ticketNumber: "1001",
		completed: true,
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
		eeiuApproved: false,
		nominatorName: "Salam bin Awang",
		nominatorApproved: false,
		nominator2Name: "Check Check, Rock Rock",
		nominator2Approved: true,
		endorserName: "Mohammad Hafiz bin Burhan",
		endorserApproved: false,
		approverName: "Kabil bin Ali",
		approverApproved: false,
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
		],
		friends: [
			{
				ref: "1",
				staffName: "Engku Fariez bin Engku Azahan",
				staffDivision: "Group Strategy"
			},
			{
				ref: "2",
				staffName: "Ali Muhd Wasil bin Ali Absar",
				staffDivision: "Group Brand & Communication"
			}
		]
	}
];

export default (state = initialState, action) => {
	switch (action.type) {
		case "EEIU_APPROVED":
			return [
				Object.assign(...state, {
					eeiuApproved: action.eeiu
				})
			];
		case "NOMINATOR_APPROVED":
			return [
				Object.assign(...state, {
					nominatorApproved: action.nominator
				})
			];
		case "NOMINATOR_2_APPROVED":
			return [
				Object.assign(...state, {
					nominator2Approved: action.nominator2
				})
			];
		case "ENDORSER_APPROVED":
			return [
				Object.assign(...state, {
					endorserApproved: action.endorser
				})
			];
		case "APPROVER_APPROVED":
			return [
				Object.assign(...state, {
					approverApproved: action.approver
				})
			];
		default:
			return state;
	}
};
