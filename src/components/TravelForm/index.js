import { connect } from "react-redux";
import TravelForm from "./TravelForm";
import Request from "../RequestHome/Request";

import { setDestination, setTravelType } from "../../redux/request/action";

const mapStateToProps = state => {
	return {
		requestForm: state.request[0],
		user: state.user
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setDestination: text => {
			dispatch(setDestination(text));
			console.log(text);
		},
		setTravelType: value => {
			dispatch(setTravelType(value));
			console.log(value);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TravelForm);
