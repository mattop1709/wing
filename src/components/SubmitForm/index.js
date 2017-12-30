import { connect } from "react-redux";
import SubmitForm from "./SubmitForm";

// import { submitRequest } from "../../redux/request/action";
// import { userSubmit } from "../../redux/user/action";
//
// const mapStateToProps = (state, ownProps) => {
// 	const formDraftId = ownProps.navigation.state.params.formDraftId;
// 	return {
// 		userDetails: state.user,
// 		requestDetails: state.request.filter(
// 			requestDetail => requestDetail.id == formDraftId
// 		)[0],
// 		friendsInfo: state.friends
// 		// requestDetails: state.request[0]
// 	};
// };
//
// const mapDispatchToPros = dispatch => {
// 	return {
// 		submitRequest: status => {
// 			dispatch(submitRequest(status));
// 			console.log(status);
// 		}
// 	};
// };

export default connect()(SubmitForm);
