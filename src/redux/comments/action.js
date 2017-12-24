export const addComment = (texts, name) => {
	return (dispatch, getState) => {
		const userInfo = getState().user.name;
		const timeNow = Date.now();
		dispatch({
			type: "ADD_COMMENT",
			caption: "Hi",
			author: userInfo,
			id: "5",
			time: timeNow
		});
	};
};

// export const addComment = (texts, author) => {
// 	const timeNow = Date.now();
// 	return {
// 		type: "ADD_COMMENT",
// 		caption: "Hi",
// 		author: "Cristiano Ronaldo",
// 		id: "5",
// 		time: timeNow
// 	};
// };
