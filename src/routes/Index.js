import React from "react";
import Drawer from "./Drawer";
import Login from "../components/Login";

import { connect } from "react-redux";

const mapStateToProps = state => {
	return {
		user: state.user
	};
};

class Index extends React.Component {
	render() {
		const { user } = this.props;
		if (user.authenticated == "false") return <Login />;
		else return <Drawer />;
	}
}

export default connect(mapStateToProps)(Index);
