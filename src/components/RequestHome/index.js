import { connect } from "react-redux";
import Request from "./Request";

import { setTravelType, newRequest } from "../../redux/request/action";

const mapStateToProps = (state, ownProps) => {
	return {
		requestHome: state.request,
		user: state.user
	};
};

const mapDispatchToProps = dispatch => {
	return {
		newRequest: t => {
			dispatch(newRequest(t));
			console.log(t);
		},
		setTravelType: data1 => {
			dispatch(setTravelType(data1));
			console.log(data1);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Request);
