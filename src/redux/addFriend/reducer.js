// exist to replicate state from GEMS
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
	},
	{
		ref: "3",
		staffName: "Choo Chia Pooh",
		staffDivision: "Group Brand and Communicatin"
	},
	{
		ref: "4",
		staffName: "Roaida binti Abdullah",
		staffDivision: "Group Procurement"
	}
];

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
