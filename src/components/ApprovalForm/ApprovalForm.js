import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	ScrollView,
	KeyboardAvoidingView,
	Alert
} from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import NavigationBar from "react-native-navbar";
import DisplayedPage from "./DisplayedPage";

import FormBar from "../Bar/FormBar";

class ApprovalForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { data: null };
	}
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
		let data = [
			{
				value: "AGM and below"
			},
			{
				value: "GLT Members"
			},
			{
				value: "Direct report to GLT Members"
			},
			{
				value: "CEO/President(Subsidiaries)"
			},
			{
				value: "GM/ VP(Subsidiaries)"
			},
			{
				value: "AGM/ AVP/ Senior Manager & Below(Subsidiaries)"
			},
			{
				value: "CFO(Subsidiaries)"
			},
			{
				value: "Head of Finance/ Business Controllers"
			}
		];
		const status = state.params.edit == true ? "Back" : "Exit";
		const leftButtonConfig = {
			title: status,
			handler: () => {
				this.handlePress(navigate, state, goBack);
			}
		};
		const button =
			state.params.edit == true ? null : (
				<TouchableOpacity
					onPress={() => navigate("SubmitForm", { saved: false })}
					style={styles.nextButton}
				>
					<Text>NEXT</Text>
				</TouchableOpacity>
			);
		return (
			<KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
				<NavigationBar
					style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}
					title={{ title: "New Request" }}
					leftButton={leftButtonConfig}
				/>

				<ScrollView style={{ flex: 1 }}>
					<FormBar approver={true} />
					<View style={styles.bodyContainer}>
						<Text style={styles.textStyle}>Your Designation</Text>
						<View style={{ borderColor: "#c4c4c4" }}>
							<Dropdown
								placeholder="e.g. AGM and below"
								labelHeight={0}
								label=""
								data={data}
								onChangeText={value => {
									this.setState({ data: value });
								}}
							/>
						</View>
						<DisplayedPage
							navigate={navigate}
							page={this.state.data}
							approverDetails={data1}
						/>
					</View>
				</ScrollView>
				{button}
			</KeyboardAvoidingView>
		);
	}
}

export default ApprovalForm;

const styles = StyleSheet.create({
	bodyContainer: {
		backgroundColor: "#ffffff",
		padding: 16,
		marginHorizontal: 16,
		marginVertical: 16,
		borderRadius: 4
	},
	textStyle: {
		fontSize: 12,
		paddingBottom: 8
	},
	nextButton: {
		backgroundColor: "#ee7202",
		justifyContent: "center",
		flexDirection: "row",
		paddingVertical: 16,
		marginHorizontal: 16,
		marginVertical: 16,
		borderRadius: 100
	}
});

const data1 = {
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
};
