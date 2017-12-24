import { connect } from "react-redux";
import AddFriends from "./AddFriends";

import {
	addNominator,
	addNominator2,
	addEndorser,
	addApprover
} from "../../redux/request/action";
import { addFriends } from "../../redux/friends/action";

const mapStateToProps = state => {
	return {
		add: state.addFriend
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addNominator: staffName => {
			dispatch(addNominator(staffName));
			console.log(staffName);
		},
		addNominator2: staffName => {
			dispatch(addNominator2(staffName));
			console.log(staffName);
		},
		addEndorser: staffName => {
			dispatch(addEndorser(staffName));
			console.log(staffName);
		},
		addApprover: staffName => {
			dispatch(addApprover(staffName));
			console.log(staffName);
		},
		addFriends: (staffName, staffDivision) => {
			dispatch(addFriends(staffName, staffDivision));
			console.log(staffName, staffDivision);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFriends);
