import { connect } from "react-redux";
import Request from "./Request";

import { newRequest } from "../../redux/request/action";

const mapStateToProps = (state, ownProps) => {
	return {
		requestHome: state.request,
		user: state.user
	};
};

const mapDispatchToProps = dispatch => {
	return {
		newRequest: ticketNumber => {
			dispatch(newRequest(ticketNumber));
			console.log(ticketNumber);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Request);
