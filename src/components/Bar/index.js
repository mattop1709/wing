import { connect } from "react-redux";
import RequestHeader from "./RequestHeader";

const mapStateToProps = (state, ownProps) => {
	const formId = ownProps.navigation.state.params.formId,
	return {
		requestDetails: state.request.filter(
			f => f.id === formId
		)[0]
	};
};

export default connect(mapStateToProps)(RequestHeader);
