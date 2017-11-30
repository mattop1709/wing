const initialState = [
	{
		ref: "1",
		staffName: "Engku Fariez bin Engku Azahan",
		staffDivision: "Group Digital Centre"
	},
	{
		ref: "2",
		staffName: "Nur Izzati binti Amir Amzah",
		staffDivision: "Group Procurement"
	}
];

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
