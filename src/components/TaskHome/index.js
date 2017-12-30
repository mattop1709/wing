import { connect } from "react-redux";
import Task from "./Task";

// const mapStateToProps = (state, ownProps) => {
// 	return {
// 		taskDetails: state.task,
// 		user: state.user
// 	};
// };

export default connect()(Task);
