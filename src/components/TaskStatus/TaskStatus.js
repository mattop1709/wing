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
import Send from "react-native-vector-icons/MaterialIcons";
import NavigationBar from "react-native-navbar";

class TaskStatus extends React.Component {
	render() {
		const { navigate, goBack } = this.props.navigation;
		const {
			taskDetails,
			friendsDetails,
			userDetails,
			eeiuApprove,
			nominatorApprove,
			nominator2Approve,
			endorserApprove,
			approverApprove
		} = this.props;
		let checkAuth;
		if (
			taskDetails.nominatorName == userDetails.name ||
			taskDetails.nominator2Name == userDetails.name
		) {
			checkAuth = "Nominate";
		} else if (taskDetails.endorserName == userDetails.name) {
			checkAuth = "Endorse";
		} else if (
			taskDetails.approverName == userDetails.name ||
			taskDetails.eeiuName == userDetails.name
		) {
			checkAuth = "Approve";
		}
		let taskAuth;
		if (
			taskDetails.nominatorName == userDetails.name &&
			taskDetails.eeiuApproved == false
		) {
			taskAuth = true;
		} else if (
			taskDetails.nominator2Name == userDetails.name &&
			taskDetails.nominatorApproved == false
		) {
			taskAuth = true;
		} else if (
			taskDetails.endorserName == userDetails.name &&
			taskDetails.nominator2Approved == false
		) {
			taskAuth = true;
		} else if (
			taskDetails.approverName == userDetails.name &&
			taskDetails.endorserApproved == false
		) {
			taskAuth = true;
		}
		// let taskDone;
		// if (
		// 	taskDetails.eeiuName == userDetails.name &&
		// 	taskDetails.eeiuApproved == true
		// ) {
		// 	taskDone = true;
		// } else if (
		// 	taskDetails.nominatorName == userDetails.name &&
		// 	taskDetails.nominatorApproved == true
		// ) {
		// 	taskDone = true;
		// } else if (
		// 	taskDetails.nominator2Name == userDetails.name &&
		// 	taskDetails.nominator2Approved == true
		// ) {
		// 	taskDone = true;
		// } else if (
		// 	taskDetails.endorserName == userDetails.name &&
		// 	taskDetails.endorserApproved == true
		// ) {
		// 	taskDone == true;
		// } else if (
		// 	taskDetails.approverName == userDetails.name &&
		// 	taskDetails.approverApproved == true
		// ) {
		// 	taskDone == true;
		// } else taskDone = false;
		const status = taskAuth
			? "Pending for approval from others"
			: "Pending for your approval";
		return (
			<View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
				<NavigationBar
					style={{ borderBottomWidth: 1, borderColor: "#c4c4c4" }}
					title={{ title: "Task Status" }}
					leftButton={{
						title: "Back",
						handler: () => goBack()
					}}
				/>

				<ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }}>
					<View style={styles.captionContainer}>
						<Text style={{ fontWeight: "bold" }}>{status}</Text>
					</View>
					<View style={styles.headerContainer}>
						<View style={styles.logoBox}>
							<Text style={styles.logoText}>Logo</Text>
						</View>
						<View style={styles.requestDetailsBox}>
							<Text style={{ fontSize: 12, textAlign: "right" }}>
								{taskDetails.ref}
							</Text>
							<Text style={{ fontSize: 12, textAlign: "right" }}>
								{taskDetails.timeStamp}
							</Text>
						</View>
					</View>

					<ProfileDetails
						taskDetails={taskDetails}
						friendsDetails={friendsDetails}
					/>

					<TravelDetails taskDetails={taskDetails} />

					<CostDetails taskDetails={taskDetails} />

					<TouchableOpacity
						onPress={() =>
							navigate("CommentsTask", {
								commentTaskId: `${taskDetails.ticketNumber}`
							})
						}
						style={styles.commentContainer}
					>
						<View style={{ justifyContent: "center" }}>
							<Icon name="comment" size={32} color="#000000" />
						</View>
						<View style={{ paddingLeft: 8 }}>
							<Text style={{ fontWeight: "bold", paddingBottom: 4 }}>
								{taskDetails.endorserName}
							</Text>
							<Text>{taskDetails.commentTextLatest}</Text>
						</View>
					</TouchableOpacity>
				</ScrollView>

				{taskAuth === true ? null : (
					<CalltoAction
						navigate={navigate}
						checkAuth={checkAuth}
						taskDetails={taskDetails}
						userDetails={userDetails}
						eeiuApprove={eeiuApprove}
						nominatorApprove={nominatorApprove}
						nominator2Approve={nominator2Approve}
						endorserApprove={endorserApprove}
						approverApprove={approverApprove}
					/>
				)}
			</View>
		);
	}
}

export default TaskStatus;

const ProfileDetails = ({ taskDetails, friendsDetails }) => (
	<View
		style={{
			paddingBottom: 40,
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
			{taskDetails.requestorName}
		</Text>
		<Text style={{ fontSize: 16, paddingBottom: 24, color: "#000000" }}>
			{taskDetails.requestorDivision}
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

const TravelDetails = ({ taskDetails }) => (
	<View
		style={{
			paddingHorizontal: 8,
			paddingVertical: 40,
			marginHorizontal: 8,
			borderBottomWidth: 0.5,
			borderColor: "#c4c4c4"
		}}
	>
		<Text style={{ fontSize: 12, paddingBottom: 8, color: "#a9a9a9" }}>
			Travel Details
		</Text>
		<Text style={{ fontSize: 16, paddingBottom: 24, fontWeight: "bold" }}>
			{taskDetails.destination}
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
					{taskDetails.travelFrom} 2016
				</Text>
			</View>
			<View>
				<Text style={{ fontSize: 12, color: "#a9a9a9", paddingBottom: 8 }}>
					Arrival
				</Text>
				<Text style={{ fontSize: 16, fontWeight: "bold" }}>
					{taskDetails.travelUntil} 2016
				</Text>
			</View>
		</View>
		<Text style={{ fontSize: 12, color: "#a9a9a9", paddingBottom: 8 }}>
			Travel Type
		</Text>
		<Text style={{ fontSize: 16, paddingBottom: 24, fontWeight: "bold" }}>
			{taskDetails.travelType}
		</Text>
		<Text style={{ fontSize: 12, paddingBottom: 8, color: "#a9a9a9" }}>
			Justification
		</Text>
		<Text style={{ fontSize: 16, lineHeight: 24, fontWeight: "bold" }}>
			{taskDetails.justificationText}
		</Text>
	</View>
);

const CostDetails = ({ taskDetails }) => (
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
			{taskDetails.costCategory ? (
				<Text style={{ fontSize: 12, color: "#a9a9a9", paddingBottom: 8 }}>
					Budget {taskDetails.costCategory}
				</Text>
			) : (
				<Text style={{ fontSize: 12, color: "#a9a9a9", paddingBottom: 8 }}>
					Budget {taskDetails.costCentre}
				</Text>
			)}
			<Text style={{ fontSize: 16, fontWeight: "bold" }}>
				RM{taskDetails.budget}
			</Text>
		</View>
		<View>
			<Text style={{ fontSize: 12, color: "#a9a9a9", paddingBottom: 8 }}>
				Cost
			</Text>
			<Text style={{ fontSize: 16, fontWeight: "bold" }}>
				RM{taskDetails.cost}
			</Text>
		</View>
	</View>
);

const CalltoAction = ({
	navigate,
	checkAuth,
	taskDetails,
	userDetails,
	eeiuApprove,
	nominatorApprove,
	nominator2Approve,
	endorserApprove,
	approverApprove
}) => (
	<View
		style={{
			flexDirection: "row",
			justifyContent: "center",
			paddingVertical: 8
		}}
	>
		<TouchableOpacity
			onPress={() =>
				Alert.alert("Revert Request", "Confirm to revert this Request?", [
					{
						text: "Back",
						onPress: () => console.log("Ask"),
						style: "default"
					},
					{
						text: "Revert",
						onPress: () => navigate("Task"),
						style: "default"
					}
				])
			}
			style={{
				alignItems: "center",
				borderColor: "grey"
			}}
		>
			<Text style={{ fontSize: 16, color: "red", padding: 16 }}>Revert</Text>
		</TouchableOpacity>
		<TouchableOpacity
			onPress={() =>
				Alert.alert("Approve Request", "Wish to approve this Request?", [
					{
						text: "Back",
						onPress: () => console.log("Ask"),
						style: "default"
					},
					{
						text: "Confirm",
						onPress: e => {
							if (taskDetails.eeiuName == userDetails.name) {
								eeiuApprove(e);
							} else if (taskDetails.nominatorName == userDetails.name) {
								nominatorApprove(e);
							} else if (taskDetails.nominator2Name == userDetails.name) {
								nominator2Approve(e);
							} else if (taskDetails.endorserName == userDetails.name) {
								endorserApprove(e);
							} else approverApprove(e);
							navigate("Task");
						},
						style: "default"
					}
				])
			}
			style={{
				alignItems: "center",
				borderColor: "grey",
				backgroundColor: "#4cd964",
				paddingVertical: 16,
				paddingHorizontal: 32,
				borderRadius: 100,
				marginLeft: 32
			}}
		>
			<Text
				style={{
					fontSize: 16
				}}
			>
				{checkAuth}
			</Text>
		</TouchableOpacity>
	</View>
);

const styles = StyleSheet.create({
	captionContainer: {
		paddingVertical: 24,
		paddingHorizontal: 8,
		alignItems: "center",
		backgroundColor: "#c4c4c4"
	},
	headerContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 32,
		paddingHorizontal: 8
	},
	logoBox: {
		backgroundColor: "#f27178",
		paddingHorizontal: 16,
		paddingVertical: 16,
		marginLeft: 8
	},
	logoText: {
		paddingTop: 8,
		fontSize: 18,
		fontWeight: "bold"
	},
	requestDetailsBox: {
		width: "30%",
		paddingHorizontal: 8,
		justifyContent: "center"
	},
	commentContainer: {
		flex: 1,
		flexDirection: "row",
		paddingVertical: 24,
		paddingHorizontal: 16
	}
});
