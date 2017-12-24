import { connect } from "react-redux";
import TravelForm from "./TravelForm";

import {
	setDestination,
	setTravelType,
	setTravelFrom,
	setTravelUntil,
	setJustificationText
} from "../../redux/request/action";

const mapStateToProps = state => {
	return {
		requestDetails: state.request[0]
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setDestination: destinationText => {
			dispatch(setDestination(destinationText));
			console.log(destinationText);
		},
		setTravelType: value => {
			dispatch(setTravelType(value));
			console.log(value);
		},
		setTravelFrom: dateFrom => {
			dispatch(setTravelFrom(dateFrom));
			console.log(dateFrom);
		},
		setTravelUntil: dateUntil => {
			dispatch(setTravelUntil(dateUntil));
			console.log(dateUntil);
		},
		setJustificationText: justificationText => {
			dispatch(setJustificationText(justificationText));
			console.log(justificationText);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TravelForm);
