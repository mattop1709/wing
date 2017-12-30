import { connect } from "react-redux";
import ApprovalForm from "./ApprovalForm";
//
// const mapStateToProps = (state, ownProps) => {
// 	const friendId = ownProps.navigation.state.params.friendId;
// 	return {
// 		approverDetails: state.request[0],
// 		approverInfo: state.request.filter(a => a.ticketNumber == friendId)
// 	};
// };

export default connect()(ApprovalForm);
