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
import NavigationBar from "react-native-navbar";

import TrackingBar from "../Bar/TrackingBar";
import RequestHeader from "../Bar/RequestHeader";
import ProfileInfo from "./ProfileInfo";
import DateBox from "./DateBox";
import Box from "./Box";

class RequestStatus extends React.Component {
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
	handlePressComment(navigate, request) {
		navigate("Comments");
	}
	renderDateBox(caption, date) {
		return <DateBox caption={caption} date={date} />;
	}
	renderBox(heading, name) {
		return <Box heading={heading} name={name} />;
	}
	render() {
		const { navigate, goBack } = this.props.navigation;
		const leftButtonConfig = {
			title: "Back",
			handler: () => goBack()
		};
		const statusTracking =
			request.status === "EEIU" ? (
				<View style={styles.eeiuTrackingBar}>
					<Text>Pending EEIU Approval</Text>
				</View>
			) : (
				<TrackingBar status={request.status} />
			);
		return (
			<View style={{ flex: 1 }}>
				<NavigationBar
					style={styles.headerBar}
					title={{ title: "Request Status" }}
					leftButton={leftButtonConfig}
				/>

				<ScrollView style={{ flex: 1, paddingHorizontal: 16 }}>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<Text style={styles.headingText1}>DESCRIPTION</Text>
						<View style={{ paddingVertical: 8 }}>
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
					<Text style={styles.headingText}>STATUS</Text>
					<View style={styles.boxContainer}>{statusTracking}</View>

					<Text style={styles.headingText}>PROFILE</Text>
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
					<Text style={styles.headingText}>COSTING</Text>
					<View style={styles.boxContainer}>
						{this.renderBox(
							(this.props.heading = "Cost"),
							(this.props.name = request.cost)
						)}
						{this.renderBox(
							(this.props.heading = "Budget"),
							(this.props.name = request.budget)
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
					<Text style={styles.headingText}>APPROVERS</Text>
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
					<Text style={styles.headingText}>COMMENTS</Text>
					<View style={styles.boxContainer}>
						<Text style={{ fontWeight: "bold", paddingBottom: 4 }}>
							{request.endorserName}
						</Text>
						<Text>{request.commentTextLatest}</Text>
						<TouchableOpacity
							style={{ alignItems: "center", paddingVertical: 8 }}
							onPress={() => this.handlePressComment(navigate, request)}
						>
							<Text style={styles.headingText}>READ MORE</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default RequestStatus;

const styles = StyleSheet.create({
	eeiuTrackingBar: {
		justifyContent: "center",
		backgroundColor: "#5ac8fa",
		marginBottom: 16,
		marginHorizontal: 32,
		borderRadius: 100,
		paddingTop: 16,
		paddingBottom: 16,
		alignItems: "center"
	},
	headerBar: {
		borderColor: "#c4c4c4",
		borderBottomWidth: 1
	},
	// requestDetailsBox: {
	// 	flex: 1,
	// 	flexDirection: "row",
	// 	paddingVertical: 24,
	// 	paddingHorizontal: 16
	// },
	// commentContainer: {
	// 	flex: 1,
	// 	flexDirection: "row",
	// 	paddingVertical: 24,
	// 	paddingHorizontal: 16
	// },
	descriptionText: {
		textAlign: "justify",
		fontSize: 14,
		paddingBottom: 16,
		lineHeight: 22
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
	}
});

const request = {
	id: "1001",
	completed: true,
	status: "Approve",
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
