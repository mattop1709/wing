import { connect } from "react-redux";
import AddFriends from "./AddFriends";

import { newFriendId } from "../../redux/request/action";

const mapStateToProps = state => {
	return {
		add: state.addFriend
	};
};

const mapDispatchToProps = dispatch => {
	return {
		newFriendId: (friendId1Name, friendId1Division) => {
			dispatch(newFriendId(friendId1Name, friendId1Division));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFriends);
