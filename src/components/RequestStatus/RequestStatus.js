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

// {
// 	requestDetails.status === "eeiu" ? (
// 		<View style={styles.eeiuTrackingBar}>
// 			<Text>Pending EEIU Approval</Text>
// 		</View>
// 	) : (
// 		<TrackingBar status={requestDetails.status} />
// 	);
// }

class RequestStatus extends React.Component {
	render() {
		const { navigate, goBack } = this.props.navigation;
		const { requestDetails, friendsDetails, userDetails } = this.props;
		return (
			<View style={{ flex: 1, backgroundColor: "#ffffff" }}>
				<NavigationBar
					style={{
						borderColor: "#c4c4c4",
						borderBottomWidth: 1,
						marginBottom: 16
					}}
					title={{ title: "Request Status" }}
					leftButton={{
						title: "Back",
						handler: () => goBack()
					}}
				/>

				<ScrollView style={{ flex: 1, paddingHorizontal: 8 }}>
					<RequestHeader requestDetails={requestDetails} />

					<TravelDetails requestDetails={requestDetails} />

					<ProfileDetails
						requestDetails={requestDetails}
						friendsDetails={friendsDetails}
					/>

					<CostDetails requestDetails={requestDetails} />

					<TouchableOpacity
						onPress={() =>
							navigate("Comments", {
								commentId: `${requestDetails.ticketNumber}`
							})
						}
						style={styles.commentContainer}
					>
						<View style={{ justifyContent: "center" }}>
							<Icon name="comment" size={32} color="#000000" />
						</View>
						<View style={{ paddingLeft: 8 }}>
							<Text style={{ fontWeight: "bold", paddingBottom: 4 }}>
								{requestDetails.endorserName}
							</Text>
							<Text>{requestDetails.commentTextLatest}</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() =>
							Alert.alert("Delete Request", "Wish to delete your Request?", [
								{
									text: "No"
								},
								{
									text: "Yes",
									style: "destructive",
									onPress: () => goBack()
								}
							])
						}
						style={{
							paddingVertical: 24,
							alignItems: "center"
						}}
					>
						<Text style={{ fontSize: 12, color: "#c4c4c4", color: "red" }}>
							Delete This Request
						</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
		);
	}
}

export default RequestStatus;

const TravelDetails = ({ requestDetails }) => (
	<View
		style={{
			paddingHorizontal: 8,
			paddingBottom: 40,
			marginHorizontal: 8,
			borderBottomWidth: 0.5,
			borderColor: "#c4c4c4"
		}}
	>
		<Text style={{ fontSize: 12, paddingBottom: 8, color: "#a9a9a9" }}>
			Travel Details
		</Text>
		<Text style={{ fontSize: 16, paddingBottom: 24, fontWeight: "bold" }}>
			{requestDetails.destination}
		</Text>
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				paddingBottom: 24
			}}
		>
			<View>
				<Text style={{ fontSize: 12, color: "#a9a9a9", paddingBottom: 8 }}>
					Departure
				</Text>
				<Text style={{ fontSize: 16, fontWeight: "bold" }}>
					{requestDetails.travelFrom}
				</Text>
			</View>
			<View>
				<Text style={{ fontSize: 12, color: "#a9a9a9", paddingBottom: 8 }}>
					Arrival
				</Text>
				<Text style={{ fontSize: 16, fontWeight: "bold" }}>
					{requestDetails.travelUntil}
				</Text>
			</View>
		</View>
		<Text style={{ fontSize: 12, color: "#a9a9a9", paddingBottom: 8 }}>
			Travel Type
		</Text>
		<Text style={{ fontSize: 16, paddingBottom: 24, fontWeight: "bold" }}>
			{requestDetails.travelType}
		</Text>
		<Text style={{ fontSize: 12, paddingBottom: 8, color: "#a9a9a9" }}>
			Justification
		</Text>
		<Text style={{ fontSize: 16, lineHeight: 24, fontWeight: "bold" }}>
			{requestDetails.justificationText}
		</Text>
	</View>
);

const ProfileDetails = ({ friendsDetails, requestDetails }) => (
	<View
		style={{
			paddingVertical: 40,
			paddingHorizontal: 8,
			borderBottomWidth: 0.3,
			borderColor: "#c4c4c4",
			marginHorizontal: 8
		}}
	>
		<Text style={{ fontSize: 12, paddingBottom: 8, color: "#a9a9a9" }}>
			Profile Details
		</Text>
		<Text style={{ fontSize: 16, paddingBottom: 4, fontWeight: "bold" }}>
			{requestDetails.requestorName}
		</Text>
		<Text style={{ fontSize: 16, paddingBottom: 24 }}>
			{requestDetails.requestorDivision}
		</Text>
		<Text style={{ fontSize: 12, paddingBottom: 8, color: "#a9a9a9" }}>
			Other Travellers
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
				fontSize: 16,
				paddingBottom: 4,
				fontWeight: "bold"
			}}
		>
			{staffName}
		</Text>
		<Text
			style={{
				fontSize: 16,
				paddingBottom: 12
			}}
		>
			{staffDivision}
		</Text>
	</View>
);

const CostDetails = ({ requestDetails }) => (
	<View
		style={{
			flexDirection: "row",
			paddingHorizontal: 8,
			paddingVertical: 40,
			marginHorizontal: 8,
			justifyContent: "space-between",
			borderBottomWidth: 0.5,
			borderColor: "#c4c4c4"
		}}
	>
		<View>
			{requestDetails.costCategory ? (
				<Text style={{ fontSize: 12, color: "#a9a9a9", paddingBottom: 8 }}>
					Budget {requestDetails.costCategory}
				</Text>
			) : (
				<Text style={{ fontSize: 12, color: "#a9a9a9", paddingBottom: 8 }}>
					Budget {requestDetails.costCentre}
				</Text>
			)}
			<Text style={{ fontSize: 16, fontWeight: "bold" }}>
				RM{requestDetails.budget}
			</Text>
		</View>
		<View>
			<Text style={{ fontSize: 12, color: "#a9a9a9", paddingBottom: 8 }}>
				Cost
			</Text>
			<Text style={{ fontSize: 16, fontWeight: "bold" }}>
				RM{requestDetails.cost}
			</Text>
		</View>
	</View>
);

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
	requestDetailsBox: {
		flex: 1,
		flexDirection: "row",
		paddingVertical: 24,
		paddingHorizontal: 16
	},
	commentContainer: {
		flex: 1,
		flexDirection: "row",
		paddingVertical: 24,
		paddingHorizontal: 16
	}
});
