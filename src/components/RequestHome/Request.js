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

import HomeHeader from "../Bar/HomeHeader";
import CardSingle from "./CardSingle";

//known as Home
class Request extends React.Component {
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
		const captionRequest = request == "" ? null : "PENDING REQUEST";
		const captionTask = task == "" ? null : "PENDING APPROVAL";
		return (
			<View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
				<ScrollView>
					<HomeHeader user={info} />

					{request == "" ? (
						<View style={styles.emptyContainer}>
							<Text style={{ fontWeight: "bold" }}>Let us start!</Text>
							<Text>Click on the Action Button to Start!</Text>
						</View>
					) : (
						<View style={{ paddingHorizontal: 8, paddingBottom: 16 }}>
							{this.renderCaption((this.props.text = captionRequest))}
							<FlatList
								data={request}
								keyExtractor={(item, index) => item.id}
								renderItem={({ item }) => (
									<CardSingle
										formId={item.id}
										formDraftId={item.id}
										navigate={navigate}
										request={request}
										destination={item.destination}
										travelFrom={item.travelFrom}
										travelUntil={item.travelUntil}
										travelType={item.travelType}
										status={item.status}
										notification={item.notification}
									/>
								)}
							/>

							{this.renderCaption((this.props.text = captionTask))}
							<FlatList
								data={task}
								keyExtractor={(item, index) => item.id}
								renderItem={({ item }) => (
									<CardSingle
										formId={item.id}
										formDraftId={item.id}
										taskId={item.id}
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
						</View>
					)}
				</ScrollView>
				<ActionButton
					buttonColor="#ee7202"
					onPress={() => {
						navigate("ProfileForm", {
							edit: false
						});
					}}
				/>
			</View>
		);
	}
}

export default Request;

const styles = StyleSheet.create({});

// <View style={styles.dashboardContainer}>
// 	{this.renderText(
// 		(this.props.integer = 10),
// 		(this.props.text = "TOTAL REQUEST ")
// 	)}
// 	{this.renderText(
// 		(this.props.integer = 2),
// 		(this.props.text = "PENDING REQUEST ")
// 	)}
// 	{this.renderText(
// 		(this.props.integer = 1),
// 		(this.props.text = "PENDING APPROVAL ")
// 	)}
// 	{this.renderText(
// 		(this.props.integer = 2),
// 		(this.props.text = "DRAFT REQUEST ")
// 	)}
// </View>
//
// renderText(integer, text) {
// 	return (
// 		<View style={{ flex: 0.2, alignItems: "center" }}>
// 			<Text style={{ paddingBottom: 0, fontSize: 18, fontWeight: "bold" }}>
// 				{(value = integer)}
// 			</Text>
// 			<Text style={{ paddingBottom: 4, fontSize: 10, textAlign: "center" }}>
// 				{(value = text)}
// 			</Text>
// 		</View>
// 	);
// }

//reference
const request = [
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
		status: "Draft",
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

const task = [
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

const info = {
	name: "Mohammad Hafiz bin Burhan",
	staffID: "TM35438",
	division: "IT & Network Technology",
	authentication: "bbS1992",
	submitRequest: true,
	receiveTask: true,
	authenticated: true
};
