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

const ProfileInfo = ({ staffName, staffDivision, thumbnail }) => (
	<View
		style={{
			backgroundColor: "#ffffff",
			flexDirection: "row",
			paddingVertical: 16,
			paddingHorizontal: 24,
			marginBottom: 0.5,
			borderRadius: 4
		}}
	>
		<View style={{ justifyContent: "center", paddingRight: 16 }}>
			<Icon name={thumbnail} size={32} color="#000000" />
		</View>
		<View style={{ flex: 1 }}>
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

class TaskStatus extends React.Component {
	renderDateBox(caption, date) {
		return <DateBox caption={caption} date={date} />;
	}
	renderBox(heading, name) {
		return <Box heading={heading} name={name} />;
	}
	handlePressComment(navigate, taskDetails) {
		navigate("CommentsTask", {
			commentTaskId: `${taskDetails.id}`
		});
	}
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
				taskDetails={taskDetails}
				userDetails={userDetails}
				eeiuApprove={eeiuApprove}
				nominatorApprove={nominatorApprove}
				nominator2Approve={nominator2Approve}
				endorserApprove={endorserApprove}
				approverApprove={approverApprove}
			/>
		);
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
							{taskDetails.destination}
						</Text>
						<Text style={{ fontSize: 16, paddingBottom: 2 }}>
							{taskDetails.travelType}
						</Text>
						<Text style={styles.descriptionText}>
							{taskDetails.justificationText}
						</Text>
						<View style={styles.dateBoxStyle}>
							{this.renderDateBox(
								(this.props.caption = "DEPARTURE"),
								(this.props.date = taskDetails.travelFrom)
							)}
							{this.renderDateBox(
								(this.props.caption = "ARRIVAL"),
								(this.props.date = taskDetails.travelUntil)
							)}
						</View>
					</View>
					<Text style={styles.headingText}>PROFILE</Text>
					<View style={{ marginBottom: 8 }}>
						<ProfileInfo
							staffName={taskDetails.requestorName}
							staffDivision={taskDetails.requestorDivision}
							thumbnail="user"
						/>
						<FlatList
							data={friendsDetails}
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
							(this.props.name = taskDetails.cost)
						)}
						{this.renderBox(
							(this.props.heading = "Budget"),
							(this.props.name = taskDetails.budget)
						)}
						{this.renderBox(
							(this.props.heading = "Cost Category"),
							(this.props.name = taskDetails.costCategory)
						)}
						{this.renderBox(
							(this.props.heading = "Cost Centre"),
							(this.props.name = taskDetails.costCentre)
						)}
					</View>
					<Text style={styles.headingText}>COMMENTS</Text>
					<View style={styles.boxContainer}>
						<Text style={{ fontWeight: "bold", paddingBottom: 4 }}>
							{taskDetails.endorserName}
						</Text>
						<Text>{taskDetails.commentTextLatest}</Text>
						<TouchableOpacity
							style={{ alignItems: "center", paddingVertical: 8 }}
							onPress={() => this.handlePressComment(navigate, taskDetails)}
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

// <TouchableOpacity
// 	onPress={() =>
// 		navigate("CommentsTask", {
// 			commentTaskId: `${taskDetails.ticketNumber}`
// 		})
// 	}
// 	style={styles.commentContainer}
// >
// 	<View style={{ justifyContent: "center" }}>
// 		<Icon name="comment" size={32} color="#000000" />
// 	</View>
// 	<View style={{ paddingLeft: 8 }}>
// 		<Text style={{ fontWeight: "bold", paddingBottom: 4 }}>
// 			{taskDetails.endorserName}
// 		</Text>
// 		<Text>{taskDetails.commentTextLatest}</Text>
// 	</View>
// </TouchableOpacity>

// const ProfileDetails = ({ taskDetails, friendsDetails }) => (
// 	<View
// 		style={{
// 			paddingBottom: 40,
// 			paddingHorizontal: 8,
// 			borderBottomWidth: 0.3,
// 			borderColor: "#c4c4c4",
// 			marginHorizontal: 8
// 		}}
// 	>
// 		<Text style={{ fontSize: 12, paddingBottom: 8, color: "#a9a9a9" }}>
// 			Profile Details
// 		</Text>
// 		<Text style={{ fontSize: 16, paddingBottom: 4, fontWeight: "bold" }}>
// 			{taskDetails.requestorName}
// 		</Text>
// 		<Text style={{ fontSize: 16, paddingBottom: 24, color: "#000000" }}>
// 			{taskDetails.requestorDivision}
// 		</Text>
// 		<Text style={{ fontSize: 12, paddingBottom: 8, color: "#a9a9a9" }}>
// 			Other Travellers
// 		</Text>
//
// 		<FlatList
// 			data={friendsDetails}
// 			keyExtractor={(item, index) => item.id}
// 			renderItem={({ item }) => (
// 				<FriendList
// 					id={item.id}
// 					staffName={item.staffName}
// 					staffDivision={item.staffDivision}
// 				/>
// 			)}
// 		/>
// 	</View>
// );

// const FriendList = ({ staffName, staffDivision }) => (
// 	<View>
// 		<Text
// 			style={{
// 				fontSize: 16,
// 				paddingBottom: 4,
// 				fontWeight: "bold"
// 			}}
// 		>
// 			{staffName}
// 		</Text>
// 		<Text
// 			style={{
// 				fontSize: 16,
// 				paddingBottom: 12
// 			}}
// 		>
// 			{staffDivision}
// 		</Text>
// 	</View>
// );

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
