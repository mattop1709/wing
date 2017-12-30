import React from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	ScrollView,
	TouchableOpacity,
	Alert,
	FlatList
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import Send from "react-native-vector-icons/MaterialIcons";

class CalltoAction extends React.Component {
	handlePressRevert() {
		Alert.alert("Revert Request", "Confirm to revert this Request?", [
			{
				text: "Back",
				onPress: () => console.log("Ask"),
				style: "default"
			},
			{
				text: "Revert",
				onPress: () => navigate("Task"),
				style: "default"
			}
		]);
	}
	handlePress() {
		Alert.alert("Approve Request", "Wish to approve this Request?", [
			{
				text: "Back",
				onPress: () => console.log("Ask"),
				style: "default"
			},
			{
				text: "Confirm",
				onPress: e => {
					if (task.eeiuName == info.name) {
						null;
					} else if (task.nominatorName == info.name) {
						null;
					} else if (task.nominator2Name == info.name) {
						null;
					} else if (task.endorserName == info.name) {
						null;
					} else null;
					navigate("Task");
				},
				style: "default"
			}
		]);
	}
	render() {
		const { navigate, checkAuth, task, info } = this.props;
		return (
			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					paddingVertical: 8
				}}
			>
				<TouchableOpacity
					onPress={() => this.handlePressRevert()}
					style={{
						alignItems: "center",
						borderColor: "grey"
					}}
				>
					<Text style={{ fontSize: 16, color: "red", padding: 16 }}>
						Revert
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => this.handlePress()}
					style={{
						alignItems: "center",
						borderColor: "grey",
						backgroundColor: "#4cd964",
						paddingVertical: 16,
						paddingHorizontal: 32,
						borderRadius: 100,
						marginLeft: 32
					}}
				>
					<Text
						style={{
							fontSize: 16
						}}
					>
						{checkAuth}
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default CalltoAction;
