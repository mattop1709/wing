import { connect } from "react-redux";
import TaskStatus from "./TaskStatus";

import {
	eeiuApprove,
	nominatorApprove,
	nominator2Approve,
	endorserApprove,
	approverApprove
} from "../../redux/task/action";

const mapStateToProps = (state, ownProps) => {
	const taskId = ownProps.navigation.state.params.taskId;
	return {
		taskDetails: state.task.filter(taskDetail => taskDetail.id == taskId)[0],
		userDetails: state.user
		// friendsDetails: state.task.filter(t => t.ticketNumber == taskId)[0].friends,
		// taskDetails: state.task[0]
	};
};

const mapDispatchToProps = dispatch => {
	return {
		eeiuApprove: e => {
			dispatch(eeiuApprove(e));
			console.log(e);
		},
		nominatorApprove: e => {
			dispatch(nominatorApprove(e));
			console.log(e);
		},
		nominator2Approve: e => {
			dispatch(nominator2Approve(e));
			console.log(e);
		},
		endorserApprove: e => {
			dispatch(endorserApprove(e));
			console.log(e);
		},
		approverApprove: e => {
			dispatch(approverApprove(e));
			console.log(e);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskStatus);
