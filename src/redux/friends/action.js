export const addFriends = (staffName, staffDivision) => {
	return {
		type: "ADD_FRIEND_NAME",
		name: staffName,
		div: staffDivision
	};
};

export const removeFriends = id => {
	return {
		type: "REMOVE_FRIEND_NAME",
		id
	};
};
