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

class SubmitForm extends React.Component {
	// handleSubmitButton(e) {
	// 	const date = Date.now();
	// 	const timeStamp1 = "100";
	// 	this.props.submitRequest(this.timeStamp1);
	// }
	render() {
		const { navigate, goBack, state } = this.props.navigation;
		const { userDetails, requestDetails, friendsDetails } = this.props;
		return (
			<View style={{ flex: 1, backgroundColor: "#ffffff" }}>
				{state.params.saved == "false" ? (
					<NavigationBar
						style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}
						title={{ title: "Confirmation" }}
						leftButton={{
							title: "Exit",
							handler: () =>
								Alert.alert(
									"Confirm to Exit?",
									"Request will be saved as Draft",
									[
										{
											text: "No",
											style: "destructive"
										},
										{
											text: "Yes",
											onPress: () => navigate("Request"),
											style: "default"
										}
									]
								)
						}}
					/>
				) : (
					<NavigationBar
						style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}
						title={{ title: "Confirmation" }}
						leftButton={{
							title: "Exit",
							handler: () => goBack()
						}}
					/>
				)}

				<ScrollView style={{ flex: 1, paddingHorizontal: 8 }}>
					<RequestHeader requestDetails={requestDetails} />

					<TravelDetails navigate={navigate} requestDetails={requestDetails} />

					<ProfileDetails
						userDetails={userDetails}
						requestDetails={requestDetails}
						navigate={navigate}
						friendsDetails={friendsDetails}
					/>

					<ApproverDetails
						requestDetails={requestDetails}
						navigate={navigate}
					/>

					<CostDetails requestDetails={requestDetails} navigate={navigate} />
				</ScrollView>

				<View style={{ backgroundColor: "#f3f3f3" }}>
					<TouchableOpacity
						onPress={() =>
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
							])
						}
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

const TravelDetails = ({ navigate, requestDetails }) => (
	<View style={{ paddingHorizontal: 8, paddingBottom: 40 }}>
		<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
			<Text style={{ fontSize: 12, paddingBottom: 12, color: "#f27178" }}>
				Travel Details
			</Text>
			<TouchableOpacity
				onPress={() =>
					navigate("TravelForm", {
						edit: "true",
						ticketNumber: `${requestDetails.ticketNumber}`
					})
				}
				style={{ paddingBottom: 8 }}
			>
				<Text style={{ fontSize: 12, color: "green" }}>Edit</Text>
			</TouchableOpacity>
		</View>
		<Text style={{ fontSize: 16, paddingBottom: 8, fontWeight: "bold" }}>
			{requestDetails.destination}
		</Text>
		<Text style={{ fontSize: 14, paddingBottom: 8 }}>
			{requestDetails.travelFrom} until {requestDetails.travelUntil}
		</Text>
		<Text style={{ fontSize: 14, paddingBottom: 8 }}>
			{requestDetails.travelType}
		</Text>
		<Text style={{ fontSize: 12, paddingBottom: 8, color: "#c4c4c4" }}>
			Description
		</Text>
		<Text style={{ fontSize: 14, lineHeight: 24, textAlign: "justify" }}>
			{requestDetails.justificationText}
		</Text>
	</View>
);

const ProfileDetails = ({
	userDetails,
	requestDetails,
	friendsDetails,
	navigate
}) => (
	<View style={{ paddingHorizontal: 8, paddingBottom: 32 }}>
		<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
			<Text style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}>
				Profile Details
			</Text>
			<TouchableOpacity
				onPress={() => navigate("ProfileForm", { edit: "true" })}
				style={{ paddingBottom: 8 }}
			>
				<Text style={{ fontSize: 12, color: "green" }}>Edit</Text>
			</TouchableOpacity>
		</View>
		<Text style={{ fontSize: 20, paddingBottom: 4, fontWeight: "bold" }}>
			{userDetails.name}
		</Text>
		<Text style={{ fontSize: 12, paddingBottom: 16 }}>
			{userDetails.division}
		</Text>
		<Text style={{ fontSize: 12, paddingBottom: 8, color: "#c4c4c4" }}>
			Additional Travellers
		</Text>
		<FlatList
			data={friendsDetails}
			keyExtractor={(item, index) => item.id}
			renderItem={({ item }) => (
				<FriendList
					id={item.id}
					staffName={item.staffName}
					staffDivision={item.staffDivision}
				/>
			)}
		/>
	</View>
);

const FriendList = ({ staffName, staffDivision }) => (
	<View>
		<Text
			style={{
				paddingLeft: 8,
				fontSize: 14,
				paddingBottom: 4,
				fontWeight: "bold"
			}}
		>
			{staffName}
		</Text>
		<Text style={{ paddingLeft: 8, fontSize: 12, paddingBottom: 12 }}>
			{staffDivision}
		</Text>
	</View>
);

const ApproverDetails = ({ requestDetails, navigate }) => (
	<View style={{ paddingHorizontal: 8, paddingBottom: 32 }}>
		<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
			<Text style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}>
				Approvers Details
			</Text>
			<TouchableOpacity
				onPress={() => navigate("ApprovalForm", { edit: "true" })}
				style={{ paddingBottom: 8 }}
			>
				<Text style={{ fontSize: 12, color: "green" }}>Edit</Text>
			</TouchableOpacity>
		</View>
		<Text style={{ fontSize: 14, paddingBottom: 4, fontWeight: "bold" }}>
			{requestDetails.nominatorName}
		</Text>
		<Text style={{ fontSize: 12, paddingBottom: 12 }}>Nominator</Text>
		<Text style={{ fontSize: 14, paddingBottom: 4, fontWeight: "bold" }}>
			{requestDetails.endorserName}
		</Text>
		<Text style={{ fontSize: 12, paddingBottom: 12 }}>Endorser</Text>
		<Text style={{ fontSize: 14, paddingBottom: 4, fontWeight: "bold" }}>
			{requestDetails.approverName}
		</Text>
		<Text style={{ fontSize: 12, paddingBottom: 12 }}>Approver</Text>
	</View>
);

const CostDetails = ({ requestDetails, navigate }) => (
	<View style={{ paddingBottom: 40, paddingHorizontal: 8 }}>
		<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
			<Text style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}>
				Cost Details
			</Text>
			<TouchableOpacity
				onPress={() => navigate("CostForm", { edit: "true" })}
				style={{ paddingBottom: 8 }}
			>
				<Text style={{ fontSize: 12, color: "green" }}>Edit</Text>
			</TouchableOpacity>
		</View>
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				paddingBottom: 8,
				borderBottomWidth: 0.5,
				borderColor: "#c4c4c4"
			}}
		>
			<Text style={{ color: "grey" }}>
				Budget - {requestDetails.costCategory}
			</Text>
			<Text style={{ paddingRight: 8, color: "grey" }}>
				{requestDetails.budget}
			</Text>
		</View>
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				paddingVertical: 8
			}}
		>
			<Text style={{ fontSize: 18 }}>TOTAL</Text>
			<Text style={{ paddingRight: 8, fontSize: 18, fontWeight: "bold" }}>
				{requestDetails.cost}
			</Text>
		</View>
	</View>
);

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 24,
		marginBottom: 40
	},
	logoBox: {
		backgroundColor: "#f27178",
		paddingHorizontal: 16,
		paddingVertical: 16,
		marginLeft: 8
	},
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
	}
});
