import { connect } from "react-redux";
import SubmitForm from "./SubmitForm";

import { submitRequest } from "../../redux/request/action";

const mapStateToProps = (state, ownProps) => {
	return {
		userDetails: state.user,
		formDraftId: ownProps.navigation.state.params.formDraftId,
		requestDetails: state.request.filter(
			requestDetail =>
				requestDetail.ticketNumber ==
				ownProps.navigation.state.params.formDraftId
		)[0]
	};
};

const mapDispatchToPros = dispatch => {
	return {
		submitRequest: status => {
			dispatch(submitRequest(status));
			console.log(status);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToPros)(SubmitForm);
