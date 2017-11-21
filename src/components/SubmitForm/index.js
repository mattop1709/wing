import { connect } from "react-redux";
import SubmitForm from "./SubmitForm";

import { submitComplete } from "../../redux/request/action";

const mapStateToProps = (state, ownProps) => {
	return {
		userDetails: state.user,
		formDraftId: ownProps.navigation.state.params.formDraftId,
		requestDetails: state.request.filter(
			f => f.ticketNumber == ownProps.navigation.state.params.formDraftId
		)[0],
		friendsDetails: state.request.filter(
			f => f.ticketNumber == ownProps.navigation.state.params.formDraftId
		)[0].friends
	};
};

const mapDispatchToPros = dispatch => {
	return {
		submitComplete: t => {
			dispatch(submitComplete(t));
			console.log(t);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToPros)(SubmitForm);
