import { connect } from "react-redux";
import RequestHeader from "./RequestHeader";

const mapStateToProps = (state, ownProps) => {
	return {
		formId: ownProps.navigation.state.params.formId,
		requestDetails: state.request.filter(
			f => f.ticketNumber == ownProps.navigation.state.params.formId
		)[0]
	};
};

export default connect(mapStateToProps)(RequestHeader);
