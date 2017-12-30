import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import DrawerIcon from "react-native-vector-icons/Entypo";

import { connect } from "react-redux";
import { logout } from "../redux/user/action";

class DrawerContainer extends React.Component {
	userLogout() {
		this.props.logout();
	}
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={{ flex: 1 }}>
				<View style={{ flex: 1 }}>
					<TouchableOpacity
						style={{ paddingTop: 32, paddingLeft: 16, flexDirection: "row" }}
						onPress={() => navigate("Tabs")}
					>
						<View style={{ justifyContent: "center" }}>
							<DrawerIcon name="home" size={32} color="#000000" />
						</View>
						<View style={{ justifyContent: "center", paddingLeft: 16 }}>
							<Text style={{ fontSize: 16 }}>Home</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						style={{ paddingTop: 32, paddingLeft: 16, flexDirection: "row" }}
						onPress={() => navigate("GuidelineHome")}
					>
						<View style={{ justifyContent: "center" }}>
							<DrawerIcon name="book" size={32} color="#000000" />
						</View>
						<View style={{ justifyContent: "center", paddingLeft: 16 }}>
							<Text style={{ fontSize: 16 }}>Guideline</Text>
						</View>
					</TouchableOpacity>
				</View>

				<View
					style={{
						alignItems: "center",
						paddingVertical: 16
					}}
				>
					<TouchableOpacity
						onPress={() =>
							Alert.alert("Log Out", "Do you wish to Log out?", [
								{
									text: "No"
								},
								{
									text: "Yes",
									onPress: () => {
										this.userLogout();
									}
								}
							])
						}
						style={{ alignItems: "center" }}
					>
						<Text style={{ paddingTop: 4, color: "red" }}>Log Out</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {
		logout: () => {
			dispatch(logout());
			console.log();
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer);

// <TouchableOpacity
// 	style={{ paddingTop: 32, paddingLeft: 16, flexDirection: "row" }}
// 	onPress={() => navigate("ActivityLog")}
// >
// 	<View style={{ justifyContent: "center" }}>
// 		<DrawerIcon name="list" size={32} color="#000000" />
// 	</View>
// 	<View style={{ justifyContent: "center", paddingLeft: 16 }}>
// 		<Text style={{ fontSize: 16 }}>Activity Log</Text>
// 	</View>
// </TouchableOpacity>
