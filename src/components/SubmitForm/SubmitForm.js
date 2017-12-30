import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Alert,
	ScrollView,
	FlatList
} from "react-native";
import NavigationBar from "react-native-navbar";
import Icon from "react-native-vector-icons/EvilIcons";

import RequestHeader from "../Bar/RequestHeader";
import ProfileInfo from "./ProfileInfo";
import Box from "./Box";
import DateBox from "./DateBox";

class SubmitForm extends React.Component {
	handlePressDelete(goBack) {
		return Alert.alert("Delete Request", "Wish to delete your Request?", [
			{
				text: "No"
			},
			{
				text: "Yes",
				style: "destructive",
				onPress: () => goBack()
			}
		]);
	}
	handlePress(navigate, state) {
		if (state.params.saved !== true) {
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
		} else navigateTo = navigate("Home");
	}
	handleSubmit(navigate) {
		Alert.alert("Submit Request", "Ready to submit the request?", [
			{
				text: "No",
				style: "destructive"
			},
			{
				text: "Yes",
				onPress: () => {
					navigate("Request"), this.props.submitRequest();
				},
				style: "default"
			}
		]);
	}
	handleNavigateTravel(navigate) {
		navigate("TravelForm", {
			edit: true
		});
	}
	handleNavigateProfile(navigate) {
		navigate("ProfileForm", {
			edit: true
		});
	}
	handleNavigateCost(navigate) {
		navigate("CostForm", {
			edit: true
		});
	}
	handleNavigateApprover(navigate) {
		navigate("ApprovalForm", {
			edit: true
		});
	}
	renderDateBox(caption, date) {
		return <DateBox caption={caption} date={date} />;
	}
	renderBox(heading, name) {
		return <Box heading={heading} name={name} />;
	}
	render() {
		const { navigate, goBack, state } = this.props.navigation;
		const status = state.params.saved == true ? "Back" : "Exit";
		const leftButtonConfig = {
			title: status,
			handler: () => {
				this.handlePress(navigate, state);
			}
		};
		return (
			<View style={{ flex: 1 }}>
				<NavigationBar
					style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}
					title={{ title: "Confirmation" }}
					leftButton={leftButtonConfig}
				/>

				<ScrollView style={{ flex: 1, paddingHorizontal: 16 }}>
					<View style={styles.headingStyle}>
						<Text style={styles.headingText1}>DESCRIPTION</Text>
						<View style={{ flexDirection: "row", paddingVertical: 8 }}>
							<TouchableOpacity
								onPress={() => this.handleNavigateTravel(navigate)}
							>
								<Text style={{ fontSize: 12, paddingRight: 16 }}>EDIT</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => this.handlePressDelete(goBack)}>
								<Text style={{ fontSize: 12, color: "red" }}>DELETE</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View style={styles.boxContainer}>
						<Text
							style={{ fontSize: 16, fontWeight: "bold", paddingBottom: 2 }}
						>
							{request.destination}
						</Text>
						<Text style={{ fontSize: 16, paddingBottom: 2 }}>
							{request.travelType}
						</Text>
						<Text style={styles.descriptionText}>
							{request.justificationText}
						</Text>
						<View style={styles.dateBoxStyle}>
							{this.renderDateBox(
								(this.props.caption = "DEPARTURE"),
								(this.props.date = request.travelFrom)
							)}
							{this.renderDateBox(
								(this.props.caption = "ARRIVAL"),
								(this.props.date = request.travelUntil)
							)}
						</View>
					</View>

					<View style={styles.headingStyle}>
						<Text style={styles.headingText}>PROFILE</Text>
						<TouchableOpacity
							onPress={() => this.handleNavigateProfile(navigate)}
						>
							<Text style={{ fontSize: 12, paddingRight: 16 }}>EDIT</Text>
						</TouchableOpacity>
					</View>
					<View style={{ marginBottom: 8 }}>
						<ProfileInfo
							staffName={info.name}
							staffDivision={info.division}
							thumbnail="user"
						/>
						<FlatList
							data={friends}
							keyExtractor={(item, index) => item.id}
							renderItem={({ item }) => (
								<ProfileInfo
									id={item.id}
									staffName={item.staffName}
									staffDivision={item.staffDivision}
									thumbnail="plus"
								/>
							)}
						/>
					</View>

					<View style={styles.headingStyle}>
						<Text style={styles.headingText}>COSTING</Text>
						<TouchableOpacity onPress={() => this.handleNavigateCost(navigate)}>
							<Text style={{ fontSize: 12, paddingRight: 16 }}>EDIT</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.boxContainer}>
						{this.renderBox(
							(this.props.heading = "Cost"),
							(this.props.name = "RM" + " " + request.cost)
						)}
						{this.renderBox(
							(this.props.heading = "Budget"),
							(this.props.name = "RM" + " " + request.budget)
						)}
						{this.renderBox(
							(this.props.heading = "Cost Category"),
							(this.props.name = request.costCategory)
						)}
						{this.renderBox(
							(this.props.heading = "Cost Centre"),
							(this.props.name = request.costCentre)
						)}
					</View>

					<View style={styles.headingStyle}>
						<Text style={styles.headingText}>APPROVER</Text>
						<TouchableOpacity
							onPress={() => this.handleNavigateApprover(navigate)}
						>
							<Text style={{ fontSize: 12, paddingRight: 16 }}>EDIT</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.boxContainer}>
						{this.renderBox(
							(this.props.heading = "Nominator 1"),
							(this.props.name = request.nominatorName)
						)}
						{this.renderBox(
							(this.props.heading = "Nominator 2"),
							(this.props.name = request.nominator2Name)
						)}
						{this.renderBox(
							(this.props.heading = "Endorser"),
							(this.props.name = request.endorserName)
						)}
						{this.renderBox(
							(this.props.heading = "Approver"),
							(this.props.name = request.approverName)
						)}
					</View>
				</ScrollView>

				<View style={{ backgroundColor: "#f3f3f3" }}>
					<TouchableOpacity
						onPress={() => this.handleSubmit(navigate)}
						style={styles.submitButton}
					>
						<Text style={styles.submitButtonText}>Submit</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

export default SubmitForm;

const styles = StyleSheet.create({
	submitButton: {
		alignItems: "center",
		borderRadius: 100,
		backgroundColor: "#4cd964",
		marginVertical: 8,
		marginHorizontal: 60
	},
	submitButtonText: {
		paddingVertical: 16,
		paddingHorizontal: 32
	},
	headingStyle: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	headingText: {
		fontSize: 12,
		paddingBottom: 8,
		paddingHorizontal: 8
	},
	headingText1: {
		fontSize: 12,
		paddingVertical: 8,
		paddingHorizontal: 8
	},
	boxContainer: {
		paddingHorizontal: 24,
		paddingTop: 16,
		paddingBottom: 8,
		backgroundColor: "#ffffff",
		borderRadius: 4,
		marginBottom: 8
	},
	dateBoxStyle: {
		flexDirection: "row",
		justifyContent: "center",
		paddingBottom: 16
	},
	descriptionText: {
		textAlign: "justify",
		fontSize: 14,
		paddingBottom: 16,
		lineHeight: 22
	}
});

const request = {
	id: "1001",
	completed: true,
	status: "EEIU",
	notification: "new",
	timeStamp: "1 Jan 2017, 8.00am",
	destination: "Kuala Lumpur",
	travelFrom: "1/1/2017",
	travelUntil: "31/1/2017",
	travelType: "Site Survey",
	justificationText:
		"I would like to Experience the ka-cing ka-cing while experiencing the magnificent of Alain Ducasse Le Louis XV Dinner",
	requestorName: "Mohammad Hafiz bin Burhan",
	requestorDivision: "Group Brand and Communication",
	cost: "12000",
	budget: "34000",
	costCategory: "EEIU",
	costCentre: "BMCE02",
	dialogBox: "Hi",
	commentTextLatest: "Ali, What is your name?",
	friendId1Name: "Mohammad Hafiz bin Burhan",
	friendId1Division: "Group Digital Centre",
	eeiuName: "Abu bin Awang",
	nominatorName: "Jusoh bin Ali",
	nominator2Name: "Check Check, Rock Rock",
	endorserName: "Ali bin Awang",
	approverName: "Kabil bin Ali"
};

const info = {
	name: "Mohammad Hafiz bin Burhan",
	staffID: "TM35438",
	division: "IT & Network Technology",
	authentication: "bbS1992",
	submitRequest: true,
	receiveTask: true,
	authenticated: true
};

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
