const initialState = [
	{
		status: "Nomination",
		notification: "new",
		ticketNumber: "1",
		ref: "1001",
		timeStamp: "30 Sept 2018, 9.32am",
		destination: "Jakarta, Indonesia",
		travelFrom: "16 April",
		travelUntil: "18 April",
		travelType: "Conference",
		justificationText: "Pekena Pesomboq!",
		requestorName: "Mohammad Hafiz bin Burhan",
		requestorDivision: "Group Brand and Communication",
		additionalTravellerName1: "Nur Sahidah binti Rahmat",
		additionalTravellerDivision1: "Group Procurement",
		additionalTravellerName2: "Nur Izzati binti Amir Hamzah",
		additionalTravellerDivision2: "Group Brand and Communication",
		additionalTravellerName3: "Ahmad Nasharuddin bin Ahmad Aizuddin",
		additionalTravellerDivision3: "IT&NT",
		eeiuName: "Zaleena binti Abu Zareem",
		nominatorName: "Jusoh bin Ali",
		endorserName: "Ali bin Awang",
		approverName: "Kabil bin Ali",
		cost: "5780",
		budget: "6000",
		costCategory: "EEIU",
		costCentre: "BMCE02",
		requestorDesignation: "Big Bawwsss",
		commentTextLatest: "Ali, What is your name?",
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
				commentText:
					"Hold your horses my comrad, a good man is a man that can hold their lust without giving them up! Conquer your desire and become a great leader like Khairold!",
				timeStamp: "21 September 2017, 11.33pm"
			}
		]
	},
	{
		status: "approval",
		ticketNumber: "2",
		ref: "2",
		timeStamp: "1 Jan 2017, 8.00am",
		destination: "Santa Cruz, Peru",
		travelFrom: "21 Oct",
		travelUntil: "10 Nov",
		travelType: "Site Survey",
		justificationText:
			"I would like to Experience the ka-cing ka-cing while experiencing the magnificent of Alain Ducasse Le Louis XV Dinner",
		requestorName: "Mohammad Hafiz bin Burhan",
		requestorDivision: "Group Brand and Communication",
		additionalTravellerName1: "Abu bin Ah Beng",
		additionalTravellerDivision1: "IT&NT",
		additionalTravellerName2: "Abu bin Ah Ngah",
		additionalTravellerDivision2: "IT&NT",
		additionalTravellerName3: "Abu bin Ah Teng",
		additionalTravellerDivision3: "IT&NT",
		eeiuName: "Abu bin Awang",
		nominatorName: "Jusoh bin Abu",
		endorserName: "Ali bin Awang",
		approverName: "Kabil bin Ali",
		cost: "12000",
		budget: "34000",
		costCategory: "EEIU",
		costCentre: "BMCE02",
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
		]
	},
	{
		status: "approval",
		ticketNumber: "2",
		ref: "3",
		timeStamp: "1 Jan 2017, 8.00am",
		destination: "Santa Cruz, Peru",
		travelFrom: "21 Oct",
		travelUntil: "10 Nov",
		travelType: "Site Survey",
		justificationText:
			"I would like to Experience the ka-cing ka-cing while experiencing the magnificent of Alain Ducasse Le Louis XV Dinner",
		requestorName: "Mohammad Hafiz bin Burhan",
		requestorDivision: "Group Brand and Communication",
		additionalTravellerName1: "Abu bin Ah Beng",
		additionalTravellerDivision1: "IT&NT",
		additionalTravellerName2: "Abu bin Ah Ngah",
		additionalTravellerDivision2: "IT&NT",
		additionalTravellerName3: "Abu bin Ah Teng",
		additionalTravellerDivision3: "IT&NT",
		eeiuName: "Abu bin Awang",
		nominatorName: "Jusoh bin Alim",
		endorserName: "Ali bin Awang",
		approverName: "Kabil bin Ali",
		cost: "12000",
		budget: "34000",
		costCategory: "EEIU",
		costCentre: "BMCE02",
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
		]
	}
];

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
