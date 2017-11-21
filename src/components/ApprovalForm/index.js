import { connect } from "react-redux";
import ApprovalForm from "./ApprovalForm";

const mapStateToProps = (state, ownProps) => {
	return {
		approverDetails: state.request[0]
	};
};

export default connect(mapStateToProps)(ApprovalForm);
