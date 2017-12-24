import { connect } from "react-redux";
import RequestStatus from "./RequestStatus";

const mapStateToProps = (state, ownProps) => {
	const formId = ownProps.navigation.state.params.formId;
	return {
		userDetails: state.user,
		requestDetails: state.request.filter(
			requestDetail => requestDetail.id == formId
		)[0],
		friendsDetails: state.friends
		// friendsDetails: state.request.filter(
		// 	friendsDetail => friendsDetail.ticketNumber == formId
		// )[0].friends,
		// comment1: state.request.filter(
		// 	comment1 => comment1.ticketNumber == formId
		// )[0].comments
	};
};

export default connect(mapStateToProps)(RequestStatus);
