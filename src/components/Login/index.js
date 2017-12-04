import { connect } from "react-redux";
import Login from "./Login";

import { login } from "../../redux/user/action";

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {
		login: (staffID, authentication) => {
			dispatch(login(staffID, authentication));
			console.log(staffID, authentication);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
