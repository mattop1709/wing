import { connect } from "react-redux";
import ApprovalForm from "./ApprovalForm";

import { submitRequest } from "../../redux/request/action";

const mapStateToProps = (state, ownProps) => {
	return {
		approverDetails: state.request[0]
	};
};

const mapDispatchToProps = dispatch => {
	return {
		submitRequest: () => {
			dispatch(submitRequest());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ApprovalForm);
