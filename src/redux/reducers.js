import { combineReducers } from "redux";

import activityLog from "./activityLog/reducer";
import guideline from "./guideline/reducer";
import user from "./user/reducer";

const wingApp = combineReducers({
	activityLog,
	user,
	guideline
});

export default wingApp;
