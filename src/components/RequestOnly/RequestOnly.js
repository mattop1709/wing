import React from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	FlatList
} from "react-native";

import Icon from "react-native-vector-icons/EvilIcons";
import ActionButton from "react-native-action-button";
import Circle from "react-native-vector-icons/FontAwesome";

import CardSingle from "./CardSingle";

class RequestOnly extends React.Component {
	renderCaption(text) {
		return (
			<Text style={{ paddingHorizontal: 16, paddingTop: 8, fontSize: 12 }}>
				{(value = text)}
			</Text>
		);
	}
	render() {
		const { navigate } = this.props.navigation;
		const { formDraftId } = this.props;
		const captionRequest = requests == "" ? null : "PENDING REQUEST";
		if (requests == "") {
			return (
				<View style={styles.emptyContainer}>
					<Text style={{ fontWeight: "bold" }}>Let us start!</Text>
					<Text>Click on the Action Button to Start!</Text>
				</View>
			);
		}
		return (
			<ScrollView
				style={{ flex: 1, backgroundColor: "#f3f3f3", paddingHorizontal: 8 }}
			>
				{this.renderCaption((this.props.text = captionRequest))}
				<FlatList
					data={requests}
					keyExtractor={(item, index) => item.id}
					renderItem={({ item }) => (
						<CardSingle
							formId={item.id}
							formDraftId={item.id}
							navigate={navigate}
							destination={item.destination}
							travelFrom={item.travelFrom}
							travelUntil={item.travelUntil}
							travelType={item.travelType}
							status={item.status}
							notification={item.notification}
						/>
					)}
				/>
			</ScrollView>
		);
	}
}

export default RequestOnly;

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
const requests = [
	{
		id: "1001",
		completed: true,
		status: "Approve",
		notification: "",
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
		status: "Endorse",
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
