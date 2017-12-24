const initialState = [
	{
		id: "1001",
		completed: true,
		status: "Submit",
		notification: "new",
		timeStamp: "1 Jan 2017, 8.00am",
		destination: "Singapore",
		travelFrom: "1/1/2017",
		travelUntil: "31/1/2017",
		travelType: "Site Survey",
		justificationText:
			"I would like to Experience the ka-cing ka-cing while experiencing the magnificent of Alain Ducasse Le Louis XV Dinner",
		requestorName: "Mohammad Hafiz bin Burhan",
		requestorDivision: "Group Brand and Communication",
		cost: "12000",
		budget: "34000",
		costCategory: "EEIU",
		costCentre: "BMCE02",
		dialogBox: "Hi",
		commentTextLatest: "Ali, What is your name?",
		friendId1Name: "Mohammad Hafiz bin Burhan",
		friendId1Division: "Group Digital Centre",
		eeiuName: "Abu bin Awang",
		nominatorName: "Jusoh bin Ali",
		nominator2Name: "Check Check, Rock Rock",
		endorserName: "Ali bin Awang",
		approverName: "Kabil bin Ali"
	}
];

export default (state = initialState, action) => {
	switch (action.type) {
		case "NEW_REQUEST":
			return [
				...state,
				Object.assign(
					{},
					{
						id: action.ticketNumber,
						status: action.status,
						requestorName: action.requestorName,
						requestorDivision: action.requestorDivision
					}
				)
			];

		case "SET_DESTINATION":
			return [Object.assign(...state, { destination: action.destinationText })];
		case "SET_TRAVEL_TYPE":
			return [
				Object.assign(...state, {
					travelType: action.value
				})
			];

		case "SET_TRAVEL_FROM":
			return [
				Object.assign(...state, {
					travelFrom: action.dateFrom
				})
			];
		case "SET_TRAVEL_UNTIL":
			return [
				Object.assign(...state, {
					travelUntil: action.dateUntil
				})
			];
		case "SET_JUSTIFICATION_TEXT":
			return [
				Object.assign(...state, {
					justificationText: action.justificationText
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

		case "ADD_NOMINATOR_NAME":
			return [
				Object.assign(...state, {
					nominatorName: action.staffName
				})
			];
		case "ADD_NOMINATOR_2_NAME":
			return [
				Object.assign(...state, {
					nominator2Name: action.staffName
				})
			];
		case "ADD_ENDORSER_NAME":
			return [
				Object.assign(...state, {
					endorserName: action.staffName
				})
			];
		case "ADD_APPROVER_NAME":
			return [
				Object.assign(...state, {
					approverName: action.staffName
				})
			];
		case "SUBMIT_REQUEST":
			return [
				Object.assign(...state, {
					status: action.status,
					timeStamp: action.timeStamp
				})
			];
		default:
			return state;
	}
};

// case "ADD_FRIEND_NAME":
// 	return [
// 		Object.assign(...state, {
// 			friends: [
// 				...state,
// 				{
// 					staffName: action.name,
// 					staffDivision: action.div
// 				}
// 			]
// 		})
// 	];

// function friends(state = initialState, action) {
// 	switch (action.type) {
// 		case "ADD_FRIEND_NAME":
// 			return state.map(friend => {
// 				return [
// 					Object.assign({}, friend, {
// 						staffName: action.name,
// 						staffDivision: action.div
// 					})
// 				];
// 			});
// 	}
// }

// const requestData = combineReducers({
// 	requests
// });
//
// export default requestData;

//try based on Redux tutorial
// import { VisibilityFilter } from "./action";
// import visibilityFilter from "./reducerTest1";
// import { combineReducers } from "redux";
//
// const initialState = {
// 	visibilityFilter: "",
// 	requests: [
// 		{
// 			text: "Hi"
// 		},
// 		{
// 			text: "Ho"
// 		}
// 	]
// };
//
// function requests(state = [], action) {
// 	let request = {};
// 	switch (action.type) {
// 		case "ADD_REQUEST":
// 			return [...state, {}];
//
// 			return { ...state };
// 			return [
// 				...state,
// 				{
// 					id: "JHG",
// 					ticketNumber: action.ticketNumber,
// 					status: action.status,
// 					completed: false
// 				}
// 			];
// 		case "TOGGLE_REQUEST":
// 			return state.map((request, index) => {
// 				if (index === action.index) {
// 					return Object.assign({}, request, {
// 						completed: !request.completed
// 					});
// 				}
// 				return request;
// 			});
// 		case "SET_DESTINATION":
// 			return state.map((request, index) => {
// 				return Object.assign({}, request, {
// 					destination: action.text
// 				});
// 			});
// 		case "SET_TRAVEL_TYPE":
// 			return state.map((request, index) => {
// 				return Object.assign({}, request, {
// 					travelType: action.value
// 				});
// 			});
// 		case "SET_TRAVEL_FROM":
// 			return state.map((request, index) => {
// 				return Object.assign({}, request, {
// 					travelFrom: action.date
// 				});
// 			});
// 		case "SET_TRAVEL_UNTIL":
// 			return state.map((request, index) => {
// 				return Object.assign({}, request, {
// 					travelUntil: action.date2
// 				});
// 			});
// 		case "SET_JUSTIFICATION_TEXT":
// 			return state.map((request, map) => {
// 				return Object.assign({}, request, {
// 					justificationText: action.caption
// 				});
// 			});
// 		case "SET_COST_VALUE":
// 			return state.map((request, map) => {
// 				return Object.assign({}, request, {
// 					cost: action.costValue
// 				});
// 			});
//
// 		case "SET_BUDGET_VALUE":
// 			return state.map((request, index) => {
// 				return Object.assign({}, request, {
// 					budget: action.budgetValue
// 				});
// 			});
// 		case "SET_COST_CATEGORY":
// 			return state.map((request, index) => {
// 				return Object.assign({}, request, {
// 					costCategory: action.value
// 				});
// 			});
// 		case "SET_NOMINATOR":
// 			return state.map((request, index) => {
// 				return Object.assign({}, request, {
// 					nominatorName: action.name1
// 				});
// 			});
// 		case "SET_ENDORSER":
// 			return state.map((request, index) => {
// 				return Object.assign({}, request, {
// 					endorserName: action.name2
// 				});
// 			});
// 		case "SET_APPROVER":
// 			return state.map((request, index) => {
// 				return Object.assign({}, request, {
// 					approverName: action.name3
// 				});
// 			});
// 		case "SET_ADD_FRIEND":
// 			return state.map((request, index) => {
// 				return Object.assign({}, request, {
// 					friends: [
// 						{
// 							id: action.id,
// 							staffName: action.staffName,
// 							staffDivision: action.staffDivision
// 						}
// 					]
// 				});
// 			});
//
// 		default:
// 			return state;
// 	}
// }
//
// function visibilityFilter(state = "SHOW_ALL", action) {
// 	switch (action.type) {
// 		case "SET_VISIBILITY_FILTER":
// 			return action.filter;
// 		default:
// 			return state;
// 	}
// }
//
// const requestData = combineReducers({
// 	requests,
// 	visibilityFilter
// });
//
// export default requestData;
