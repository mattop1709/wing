import React from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	FlatList
} from "react-native";
import Circle from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/EvilIcons";

import CardSingle from "./CardSingle";

class Task extends React.Component {
	renderCaption(text) {
		return (
			<Text style={{ paddingHorizontal: 16, paddingTop: 8, fontSize: 12 }}>
				{(value = text)}
			</Text>
		);
	}
	render() {
		const { navigate } = this.props.navigation;
		const captionTask = tasks == "" ? null : "PENDING APPROVAL";
		if (tasks == "") {
			return (
				<View style={styles.emptyContainer}>
					<Text style={{ fontWeight: "bold" }}>Incoming!</Text>
					<Text style={{ textAlign: "center" }}>
						Sooner or later, you will need to approve or reject the request!
					</Text>
				</View>
			);
		}
		return (
			<View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
				<View style={{ flex: 1, paddingHorizontal: 8 }}>
					{this.renderCaption((this.props.text = captionTask))}
					<FlatList
						data={tasks}
						keyExtractor={(item, index) => item.id}
						renderItem={({ item }) => (
							<CardSingle
								navigate={navigate}
								taskId={item.id}
								id={item.id}
								requestorName={item.requestorName}
								destination={item.destination}
								travelType={item.travelType}
								travelFrom={item.travelFrom}
								travelUntil={item.travelUntil}
								cost={item.cost}
								notification={item.notification}
								status={item.status}
							/>
						)}
					/>
				</View>
			</View>
		);
	}
}

export default Task;

const styles = StyleSheet.create({
	emptyContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 24,
		paddingHorizontal: 24
	}
});

//reference
const tasks = [
	{
		id: "1001",
		completed: true,
		status: "EEIU",
		notification: "new",
		timeStamp: "1 Jan 2017, 8.00am",
		destination: "Singapore",
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
	},
	{
		id: "1002",
		completed: true,
		status: "EEIU",
		notification: "new",
		timeStamp: "1 Sept 2017, 8.00am",
		destination: "West Bank",
		travelFrom: "2/2/2017",
		travelUntil: "31/3/2017",
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
	}
];
