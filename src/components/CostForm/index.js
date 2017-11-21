import { connect } from "react-redux";
import CostForm from "./CostForm";

import { setTravelType } from "../../redux/request/action";

const mapDispatchToProps = dispatch => {
	return {
		setTravelType: data1 => {
			dispatch(setTravelType(data1));
			console.log(data1);
		}
	};
};

export default connect(mapDispatchToProps)(CostForm);
