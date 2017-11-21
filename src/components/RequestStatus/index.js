import { connect } from "react-redux";
import RequestStatus from "./RequestStatus";

const mapStateToProps = (state, ownProps) => {
	return {
		userDetails: state.user,
		formId: ownProps.navigation.state.params.formId,
		requestDetails: state.request.filter(
			requestDetail =>
				requestDetail.ticketNumber == ownProps.navigation.state.params.formId
		)[0],
		friendsDetails: state.request.filter(
			friendsDetail =>
				friendsDetail.ticketNumber == ownProps.navigation.state.params.formId
		)[0].friends
	};
};

export default connect(mapStateToProps)(RequestStatus);
