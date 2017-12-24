import { connect } from "react-redux";
import ProfileForm from "./ProfileForm";

import { removeFriends } from "../../redux/friends/action";

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.user,
		// friendsInformation: state.request[0].friends
		friendsInformation: state.friends,
		// friendsInformation: state.friends.filter(f => f.deleted === false),
		requestDetails: state.request[0]
	};
};

const mapDispatchToProps = dispatch => {
	return {
		removeFriends: id => {
			dispatch(removeFriends(id));
			console.log(id);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
