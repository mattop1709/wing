const wingData = {
	users: {
		TM35438: {
			staffID: "TM35438",
			staffName: "Mohammad Hafiz bin Burhan",
			staffDivision: "Group Digital Centre",
			authenticated: true,
			submitRequest: true,
			receiveTask: true,
			approval: [],
			requests: ["123"],
			comments: []
		},
		S12344: {
			staffID: "S12344",
			staffName: "Latiffah binti Agus",
			staffDivision: "Group Strategy",
			authenticated: true,
			submitRequest: true,
			receiveTask: true,
			approval: ["PIO65"],
			requests: [],
			comments: ["456MB"]
		},
		S19785: {
			staffID: "S19785",
			staffName: "Yusoff bin Abdul Amin",
			staffDivision: "CEO Office",
			authenticated: true,
			submitRequest: true,
			receiveTask: true,
			approval: ["QWS33"],
			requests: [],
			comments: []
		},
		S21445: {
			staffID: "S21445",
			staffName: "Rahman bin Khalid",
			staffDivision: "CEO Office",
			authenticated: true,
			submitRequest: true,
			receiveTask: true,
			approval: ["HBD12"],
			requests: [],
			comments: ["123UA"]
		}
	},
	requests: {
		"123": {
			ticketNumber: "123",
			complete: true,
			status: "Draft",
			notification: true,
			timeStamp: "21 January 2017",
			destination: "Singapore",
			travelFrom: "21 Oct",
			travelUntil: "10 Nov",
			travelType: "Site Survey",
			justificationText:
				"I would like to Experience the ka-cing ka-cing while experiencing the magnificent of Alain Ducasse Le Louis XV Dinner",
			cost: "12000",
			budget: "34000",
			costCategory: "EEIU",
			costCentre: "BMCE02",
			author: ["TM35438"],
			comments: ["123UA", "456MB"],
			friends: ["S15653", "S12211", "S11566"],
			approval: ["HBD12", "PIO65", "QWS33"]
		}
	},
	comments: {
		"123UA": {
			id: "123UA",
			author: "S21445",
			commentText: "What are you doing there my brother?",
			timeStamp: "2 August 2017"
		},
		"456MB": {
			id: "456MB",
			author: "S12344",
			commentText: "I am with my love, my dear",
			timeStamp: "7 August 2017"
		}
	},
	approval: {
		HBD12: {
			id: "HBD12",
			author: "S21445",
			approveStatus: true,
			timeStamp: "3 August 2017"
		},
		PIO65: {
			id: "PIO65",
			author: "S12344",
			approveStatus: true,
			timeStamp: "4 August 2017"
		},
		QWS33: {
			id: "QWS33",
			author: "S19785",
			approveStatus: true,
			timeStamp: "5 August 2017"
		}
	}
};

//dipatch request
//how to dispatch userName state?

function addRequest(userName) {
	return {
		type: "ADD_REQUEST",
		ticketNumber: ticket,
		status: "Draft",
		author: userName,
		complete: false
	};
}

//dispatch the rest of request state
...function,
