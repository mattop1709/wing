import { connect } from "react-redux";
import TravelForm from "./TravelForm";
import Request from "../RequestHome/Request";

import {
	setDestination,
	setTravelType,
	setJustificationText
} from "../../redux/request/action";

const mapStateToProps = state => {
	return {};
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
		},
		setTravelFrom: date => {
			dispatch(setTravelFrom(date));
			console.log(date);
		},
		setJustificationText: caption => {
			dispatch(setJustificationText(caption));
			console.log(caption);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TravelForm);
