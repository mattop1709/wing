import { connect } from "react-redux";
import CommentsTask from "./CommentsTask";

import { addComment } from "../../redux/comments/action";

const mapStateToProps = (state, ownProps) => {
	const commentTaskId = ownProps.navigation.state.params.commentTaskId;
	return {
		taskInfo: state.task.filter(t1 => t1.id === commentTaskId)[0],
		// commentDetails: state.task.filter(t1 => t1.id === commentTaskId)[0].comments
		commentDetails: state.comments
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addComment: author => {
			dispatch(addComment(author));
			console.log(author);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsTask);
