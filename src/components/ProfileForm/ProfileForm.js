import React from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	KeyboardAvoidingView,
	ScrollView,
	TouchableOpacity,
	Alert,
	FlatList,
	ListView
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import Add from "react-native-vector-icons/Entypo";
import NavigationBar from "react-native-navbar";

import FormBar from "../Bar/FormBar";
import OtherTraveller from "./OtherTraveller";

class ProfileForm extends React.Component {
	handlePress(navigate, state, goBack) {
		if (state.params.edit !== true) {
			Alert.alert("Confirm to Exit?", "Request will be saved as Draft", [
				{
					text: "No",
					style: "destructive"
				},
				{
					text: "Yes",
					onPress: () => navigate("Home"),
					style: "default"
				}
			]);
		} else navigateTo = goBack();
	}
	render() {
		const { navigate, state, goBack } = this.props.navigation;
		const status = state.params.edit == true ? "Back" : "Exit";
		const caption = friends == "" ? null : "OTHER STAFF";
		const button =
			state.params.edit == true ? null : (
				<TouchableOpacity
					onPress={() => navigate("TravelForm", { edit: false })}
					style={styles.nextButton}
				>
					<Text>NEXT</Text>
				</TouchableOpacity>
			);
		const leftButtonConfig = {
			title: status,
			handler: () => {
				this.handlePress(navigate, state, goBack);
			}
		};
		return (
			<KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
				<NavigationBar
					style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}
					title={{ title: "New Request" }}
					leftButton={leftButtonConfig}
				/>

				<ScrollView style={{ flex: 1 }}>
					<FormBar profile={true} />
					<View style={styles.userCardStyle}>
						<View style={{ justifyContent: "center" }}>
							<Icon name="user" size={50} color="#000000" />
						</View>
						<View style={{ paddingLeft: 8 }}>
							<Text>{user1.name}</Text>
							<Text style={{ fontSize: 12 }}>{user1.staffID}</Text>
							<Text style={{ fontSize: 12 }}>{user1.division}</Text>
						</View>
					</View>
					<View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
						<Text style={{ fontSize: 12 }}>{caption}</Text>
					</View>
					<FlatList
						data={friends}
						keyExtractor={(item, index) => item.id}
						renderItem={({ item }) => (
							<OtherTraveller
								id={item.id}
								staffName={item.staffName}
								staffDivision={item.staffDivision}
							/>
						)}
					/>
					<TouchableOpacity
						onPress={() => navigate("AddFriends", { friends: true })}
						style={styles.addButton}
					>
						<Text>+ ADD TRAVELLER</Text>
					</TouchableOpacity>
				</ScrollView>
				{button}
			</KeyboardAvoidingView>
		);
	}
}

export default ProfileForm;

const styles = StyleSheet.create({
	userCardStyle: {
		backgroundColor: "#ffffff",
		flexDirection: "row",
		padding: 16,
		marginHorizontal: 16,
		marginVertical: 16,
		borderRadius: 4
	},
	addButton: {
		backgroundColor: "#dcdcdc",
		justifyContent: "center",
		flexDirection: "row",
		padding: 16,
		marginHorizontal: 16,
		marginTop: 16,
		borderRadius: 4
	},
	nextButton: {
		backgroundColor: "#ee7202",
		justifyContent: "center",
		flexDirection: "row",
		padding: 16,
		marginHorizontal: 16,
		marginVertical: 16,
		borderRadius: 100
	}
});

const friends = [
	{
		id: 1,
		deleted: false,
		staffName: "Engku Fariez bin Engku Azahan",
		staffDivision: "Group Digital Centre"
	},
	{
		id: 2,
		deleted: false,
		staffName: "Nur Izzati binti Amir Amzah",
		staffDivision: "Group Procurement"
	},
	{
		id: 3,
		deleted: false,
		staffName: "Choo Chia Pooh",
		staffDivision: "Group Brand and Communicatin"
	},
	{
		id: 4,
		deleted: false,
		staffName: "Roaida binti Abdullah",
		staffDivision: "Group Procurement"
	}
];

const user1 = {
	name: "Mohammad Hafiz bin Burhan",
	staffID: "TM35438",
	division: "IT & Network Technology",
	authentication: "bbS1992",
	submitRequest: true,
	receiveTask: true,
	authenticated: true
};
