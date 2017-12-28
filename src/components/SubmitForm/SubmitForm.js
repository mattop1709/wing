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
import Send from "react-native-vector-icons/Ionicons";

import RequestHeader from "../Bar/RequestHeader";

const ProfileInfo = ({ staffName, staffDivision }) => (
	<View
		style={{
			backgroundColor: "#ffffff",
			paddingVertical: 16,
			paddingHorizontal: 24,
			marginBottom: 0.5,
			borderRadius: 4
		}}
	>
		<Text
			style={{
				paddingBottom: 4,
				fontWeight: "bold"
			}}
		>
			{staffName}
		</Text>
		<Text>{staffDivision}</Text>
	</View>
);

function DateBox({ caption, date }) {
	return (
		<View style={{ flex: 0.4, backgroundColor: "orange" }}>
			<View
				style={{
					backgroundColor: "#ee7202",
					alignItems: "center"
				}}
			>
				<Text style={{ fontSize: 12, paddingVertical: 8 }}>
					{(value = caption)}
				</Text>
			</View>
			<View style={{ paddingVertical: 24, alignItems: "center" }}>
				<Text style={{ fontSize: 16 }}>{(value = date)}</Text>
			</View>
		</View>
	);
}

function Box({ heading, name }) {
	return (
		<View
			style={{
				paddingBottom: 8,
				marginBottom: 16,
				borderBottomWidth: 0.5,
				borderColor: "#dcdcdc"
			}}
		>
			<Text style={{ fontSize: 12, paddingBottom: 8 }}>
				{(value = heading)}
			</Text>
			<Text>{(value = name)}</Text>
		</View>
	);
}

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
	handlePress(navigate, state, goBack) {
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
					navigate("Request"),
						this.props.submitRequest(),
						this.props.userSubmit();
				},
				style: "default"
			}
		]);
	}
	renderDateBox(caption, date) {
		return <DateBox caption={caption} date={date} />;
	}
	renderBox(heading, name) {
		return <Box heading={heading} name={name} />;
	}
	render() {
		const { navigate, goBack, state } = this.props.navigation;
		const { userDetails, requestDetails, friendsInfo } = this.props;
		const status = state.params.saved == true ? "Back" : "Exit";
		const leftButtonConfig = {
			title: [status],
			handler: () => {
				this.handlePress(navigate, state, goBack);
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
								onPress={() =>
									navigate("TravelForm", {
										edit: true,
										formDraftId: `${requestDetails.id}`
									})
								}
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
							{requestDetails.destination}
						</Text>
						<Text style={{ fontSize: 16, paddingBottom: 2 }}>
							{requestDetails.travelType}
						</Text>
						<Text style={styles.descriptionText}>
							{requestDetails.justificationText}
						</Text>
						<View style={styles.dateBoxStyle}>
							{this.renderDateBox(
								(this.props.caption = "DEPARTURE"),
								(this.props.date = requestDetails.travelFrom)
							)}
							{this.renderDateBox(
								(this.props.caption = "ARRIVAL"),
								(this.props.date = requestDetails.travelUntil)
							)}
						</View>
					</View>

					<View style={styles.headingStyle}>
						<Text style={styles.headingText}>PROFILE</Text>
						<View>
							<TouchableOpacity
								onPress={() =>
									navigate("ProfileForm", {
										edit: true,
										formDraftId: `${requestDetails.id}`
									})
								}
							>
								<Text style={{ fontSize: 12, paddingRight: 16 }}>EDIT</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View style={{ marginBottom: 8 }}>
						<ProfileInfo
							staffName={userDetails.name}
							staffDivision={userDetails.division}
						/>
						<FlatList
							data={friendsInfo}
							keyExtractor={(item, index) => item.id}
							renderItem={({ item }) => (
								<ProfileInfo
									id={item.id}
									staffName={item.staffName}
									staffDivision={item.staffDivision}
								/>
							)}
						/>
					</View>

					<View style={styles.headingStyle}>
						<Text style={styles.headingText}>COSTING</Text>
						<View>
							<TouchableOpacity
								onPress={() =>
									navigate("CostForm", {
										edit: true,
										formDraftId: `${requestDetails.id}`
									})
								}
							>
								<Text style={{ fontSize: 12, paddingRight: 16 }}>EDIT</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View style={styles.boxContainer}>
						{this.renderBox(
							(this.props.heading = "Cost"),
							(this.props.name = "RM" + " " + requestDetails.cost)
						)}
						{this.renderBox(
							(this.props.heading = "Budget"),
							(this.props.name = "RM" + " " + requestDetails.budget)
						)}
						{this.renderBox(
							(this.props.heading = "Cost Category"),
							(this.props.name = requestDetails.costCategory)
						)}
						{this.renderBox(
							(this.props.heading = "Cost Centre"),
							(this.props.name = requestDetails.costCentre)
						)}
					</View>

					<View style={styles.headingStyle}>
						<Text style={styles.headingText}>APPROVER</Text>
						<View>
							<TouchableOpacity
								onPress={() =>
									navigate("ApproverForm", {
										edit: true,
										formDraftId: `${requestDetails.id}`
									})
								}
							>
								<Text style={{ fontSize: 12, paddingRight: 16 }}>EDIT</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.boxContainer}>
						{this.renderBox(
							(this.props.heading = "Nominator 1"),
							(this.props.name = requestDetails.nominatorName)
						)}
						{this.renderBox(
							(this.props.heading = "Nominator 2"),
							(this.props.name = requestDetails.nominator2Name)
						)}
						{this.renderBox(
							(this.props.heading = "Endorser"),
							(this.props.name = requestDetails.endorserName)
						)}
						{this.renderBox(
							(this.props.heading = "Approver"),
							(this.props.name = requestDetails.approverName)
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
