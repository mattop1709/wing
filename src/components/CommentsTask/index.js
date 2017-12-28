import { connect } from "react-redux";
import CommentsTask from "./CommentsTask";

const mapStateToProps = (state, ownProps) => {
	const commentTaskId = ownProps.navigation.state.params.commentTaskId;
	return {
		taskInfo: state.task.filter(t1 => t1.id === commentTaskId)[0],
		commentDetails: state.task.filter(t1 => t1.id === commentTaskId)[0].comments
	};
};

export default connect(mapStateToProps)(CommentsTask);
