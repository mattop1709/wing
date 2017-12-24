import { combineReducers } from "redux";

import activityLog from "./activityLog/reducer";
import addFriend from "./addFriend/reducer";
import guideline from "./guideline/reducer";
import user from "./user/reducer";
import request from "./request/reducer";
import task from "./task/reducer";
import friends from "./friends/reducer";
import comments from "./comments/reducer";

const wingApp = combineReducers({
	activityLog,
	addFriend,
	user,
	task,
	guideline,
	request,
	friends,
	comments
});

export default wingApp;
