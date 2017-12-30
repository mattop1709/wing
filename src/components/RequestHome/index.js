import { connect } from "react-redux";
import Request from "./Request";

// import { newRequest } from "../../redux/request/action";

// const mapStateToProps = (state, ownProps) => {
// 	return {
// 		requestDetails: state.request,
// 		user: state.user,
// 		taskDetails: state.task
// 	};
// };
//
// const mapDispatchToProps = dispatch => {
// 	return {
// 		newRequest: user => {
// 			dispatch(newRequest(user));
// 			console.log(user);
// 		}
// 	};
// };

export default connect()(Request);
