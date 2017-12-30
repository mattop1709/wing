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
import NavigationBar from "react-native-navbar";

import CalltoAction from "./CalltoAction";
import ProfileInfo from "./ProfileInfo";
import DateBox from "./DateBox";
import Box from "./Box";

class TaskStatus extends React.Component {
	renderDateBox(caption, date) {
		return <DateBox caption={caption} date={date} />;
	}
	renderBox(heading, name) {
		return <Box heading={heading} name={name} />;
	}
	handlePressComment(navigate, task) {
		navigate("CommentsTask");
	}
	render() {
		let checkAuth;
		if (task.nominatorName == info.name || task.nominator2Name == info.name) {
			checkAuth = "Nominate";
		} else if (task.endorserName == info.name) {
			checkAuth = "Endorse";
		} else if (task.approverName == info.name || task.eeiuName == info.name) {
			checkAuth = "Approve";
		}
		let taskAuth;
		if (task.nominatorName == info.name && task.eeiuApproved == false) {
			taskAuth = true;
		} else if (
			task.nominator2Name == info.name &&
			task.nominatorApproved == false
		) {
			taskAuth = true;
		} else if (
			task.endorserName == info.name &&
			task.nominator2Approved == false
		) {
			taskAuth = true;
		} else if (
			task.approverName == info.name &&
			task.endorserApproved == false
		) {
			taskAuth = true;
		}
		const status = taskAuth
			? "Pending for approval from others"
			: "Pending for your approval";
		const leftButtonConfig = {
			title: "Back",
			handler: () => goBack()
		};
		const button = taskAuth ? null : (
			<CalltoAction
				navigate={navigate}
				checkAuth={checkAuth}
				task={task}
				info={info}
			/>
		);
		const { navigate, goBack } = this.props.navigation;
		return (
			<View style={{ flex: 1 }}>
				<NavigationBar
					style={{ borderBottomWidth: 1, borderColor: "#c4c4c4" }}
					title={{ title: "Task Status" }}
					leftButton={leftButtonConfig}
				/>

				<ScrollView style={{ flex: 1, paddingHorizontal: 16 }}>
					<Text style={styles.headingText1}>DESCRIPTION</Text>
					<View style={styles.boxContainer}>
						<Text
							style={{ fontSize: 16, fontWeight: "bold", paddingBottom: 2 }}
						>
							{task.destination}
						</Text>
						<Text style={{ fontSize: 16, paddingBottom: 2 }}>
							{task.travelType}
						</Text>
						<Text style={styles.descriptionText}>{task.justificationText}</Text>
						<View style={styles.dateBoxStyle}>
							{this.renderDateBox(
								(this.props.caption = "DEPARTURE"),
								(this.props.date = task.travelFrom)
							)}
							{this.renderDateBox(
								(this.props.caption = "ARRIVAL"),
								(this.props.date = task.travelUntil)
							)}
						</View>
					</View>
					<Text style={styles.headingText}>PROFILE</Text>
					<View style={{ marginBottom: 8 }}>
						<ProfileInfo
							staffName={task.requestorName}
							staffDivision={task.requestorDivision}
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
							(this.props.name = task.cost)
						)}
						{this.renderBox(
							(this.props.heading = "Budget"),
							(this.props.name = task.budget)
						)}
						{this.renderBox(
							(this.props.heading = "Cost Category"),
							(this.props.name = task.costCategory)
						)}
						{this.renderBox(
							(this.props.heading = "Cost Centre"),
							(this.props.name = task.costCentre)
						)}
					</View>
					<Text style={styles.headingText}>COMMENTS</Text>
					<View style={styles.boxContainer}>
						<Text style={{ fontWeight: "bold", paddingBottom: 4 }}>
							{task.endorserName}
						</Text>
						<Text>{task.commentTextLatest}</Text>
						<TouchableOpacity
							style={{ alignItems: "center", paddingVertical: 8 }}
							onPress={() => this.handlePressComment(navigate, task)}
						>
							<Text style={styles.headingText}>READ MORE</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
				{button}
			</View>
		);
	}
}

export default TaskStatus;

const styles = StyleSheet.create({
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
	},
	headerBar: {
		borderColor: "#c4c4c4",
		borderBottomWidth: 1
	}
});

const task = {
	id: "1001",
	completed: true,
	status: "Submit",
	notification: "new",
	timeStamp: "1 Jan 2017, 8.00am",
	destination: "Singapore",
	travelFrom: "21 Oct",
	travelUntil: "10 Nov",
	travelType: "Site Survey",
	justificationText:
		"I would like to Experience the ka-cing ka-cing while experiencing the magnificent of Alain Ducasse Le Louis XV Dinner",
	requestorName: "Ali Muhd Wasil bin Ali Absar bin Al Amin",
	requestorDivision: "Group Brand and Communication",
	eeiuName: "Abu bin Awang",
	eeiuApproved: false,
	nominatorName: "Salam bin Awang",
	nominatorApproved: false,
	nominator2Name: "Check Check, Rock Rock",
	nominator2Approved: true,
	endorserName: "Mohammad Hafiz bin Burhan",
	endorserApproved: false,
	approverName: "Kabil bin Ali",
	approverApproved: false,
	cost: "12000",
	budget: "34000",
	costCategory: "EEIU",
	costCentre: "BMCE02",
	dialogBox: "Hi",
	commentTextLatest: "Ali, What is your name?",
	friendId1Name: "Mohammad Hafiz bin Burhan",
	friendId1Division: "Group Digital Centre",
	comments: [
		{
			senderId: "1",
			senderName: "Ali Muhd Wasil bin Ali Absar",
			commentText:
				"Hafiz, where can we have all beautiful shawties around that area? I want them like right now!",
			timeStamp: "13 September 2017, 3.20pm"
		},
		{
			senderId: "2",
			senderName: "Mohammad Hafiz bin Burhan",
			commentText: "Get the boot, into the mommy house",
			timeStamp: "14 September 2017, 4.17pm"
		}
	]
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
