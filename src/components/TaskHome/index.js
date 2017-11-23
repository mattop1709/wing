import { connect } from "react-redux";
import Task from "./Task";

const mapStateToProps = (state, ownProps) => {
	return {
		taskHome: state.task,
		user: state.user,
		task1: state.task.filter(t => t.nominatorName == "Jusoh bin Ali")[0]
	};
};

export default connect(mapStateToProps)(Task);
