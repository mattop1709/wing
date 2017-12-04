import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

class FormBar extends React.Component {
	render() {
		return (
			<View style={{ flexDirection: "row", justifyContent: "space-around" }}>
				<Text>Hi</Text>
				<Text>Hi</Text>
				<Text>Hi</Text>
				<Text>Hi</Text>
			</View>
		);
	}
}

export default FormBar;

// class Profile1 extends React.Component {
// 	render() {
// 		return (
// 			<View
// 				style={{
// 					flexDirection: "row",
// 					borderBottomWidth: 2,
// 					borderColor: "#000000",
// 					paddingBottom: 4,
// 					flex: 0.2,
// 					justifyContent: "center"
// 				}}
// 			>
// 				<View style={{ justifyContent: "center", paddingHorizontal: 2 }}>
// 					<Icon name="user" size={24} color="#000000" />
// 				</View>
// 				<View style={{ justifyContent: "center" }}>
// 					<Text style={{ fontSize: 12, color: "#000000" }}>One</Text>
// 				</View>
// 			</View>
// 		);
// 	}
// }

// class FormBarComponent extends React.Component {
// 	render() {
// 		return (
//
// 		);
// 	}
// }

const styles = StyleSheet.create({
	formBarContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		paddingTop: 8,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: "#c4c4c4"
	}
});
