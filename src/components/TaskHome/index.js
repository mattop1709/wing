import { connect } from "react-redux";
import Task from "./Task";

const mapStateToProps = (state, ownProps) => {
	return {
		taskHome: state.task,
		user: state.user
	};
};

export default connect(mapStateToProps)(Task);
