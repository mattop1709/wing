import { connect } from "react-redux";
import ProfileForm from "./ProfileForm";

import { newFriendId } from "../../redux/request/action";

const mapStateToProps = (state, ownProps) => {
	return {
		requestForm: state.request,
		friend1: state.request[0].friends,
		user: state.user,
		friendId: ownProps.navigation.state.params.friendId,
		friendDetails: state.addFriend.filter(
			f => f.ref == ownProps.navigation.state.params.friendId
		)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		newFriendId: friendId1 => {
			dispatch(newFriendId(friendId1));
			console.log(friendId1);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
