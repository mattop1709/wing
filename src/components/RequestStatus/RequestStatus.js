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

class RequestStatus extends React.Component {
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
	handlePressComment(navigate, requestDetails) {
		navigate("Comments", {
			commentId: `${requestDetails.id}`
		});
	}
	renderDateBox(caption, date) {
		return <DateBox caption={caption} date={date} />;
	}
	renderBox(heading, name) {
		return <Box heading={heading} name={name} />;
	}
	render() {
		const { navigate, goBack } = this.props.navigation;
		const { requestDetails, friendsDetails, userDetails } = this.props;
		const leftButtonConfig = {
			title: "Back",
			handler: () => goBack()
		};
		const statusTracking =
			requestDetails.status === "EEIU" ? (
				<View style={styles.eeiuTrackingBar}>
					<Text>Pending EEIU Approval</Text>
				</View>
			) : (
				<TrackingBar status={requestDetails.status} />
			);
		return (
			<View style={{ flex: 1 }}>
				<NavigationBar
					style={styles.headerBar}
					title={{ title: "Request Status" }}
					leftButton={leftButtonConfig}
				/>

				<ScrollView style={{ flex: 1, paddingHorizontal: 16 }}>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<Text style={styles.headingText1}>DESCRIPTION</Text>
						<View style={{ paddingVertical: 8 }}>
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
					<Text style={styles.headingText}>STATUS</Text>
					<View style={styles.boxContainer}>{statusTracking}</View>

					<Text style={styles.headingText}>PROFILE</Text>
					<View style={{ marginBottom: 8 }}>
						<ProfileInfo
							staffName={userDetails.name}
							staffDivision={userDetails.division}
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
							(this.props.name = requestDetails.cost)
						)}
						{this.renderBox(
							(this.props.heading = "Budget"),
							(this.props.name = requestDetails.budget)
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
					<Text style={styles.headingText}>APPROVERS</Text>
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
					<Text style={styles.headingText}>COMMENTS</Text>
					<View style={styles.boxContainer}>
						<Text style={{ fontWeight: "bold", paddingBottom: 4 }}>
							{requestDetails.endorserName}
						</Text>
						<Text>{requestDetails.commentTextLatest}</Text>
						<TouchableOpacity
							style={{ alignItems: "center", paddingVertical: 8 }}
							onPress={() => this.handlePressComment(navigate, requestDetails)}
						>
							<Text style={styles.headingText}>READ MORE</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default RequestStatus;

// <TouchableOpacity
// 	onPress={() =>
// 		navigate("Comments", {
// 			commentId: `${this.props.commentId}`
// 		})
// 	}
// 	style={styles.commentContainer}
// >
// 	<View style={{ justifyContent: "center" }}>
// 		<Icon name="comment" size={32} color="#000000" />
// 	</View>
// 	<View style={{ paddingLeft: 8 }}>
// 		<Text style={{ fontWeight: "bold", paddingBottom: 4 }}>
// 			{requestDetails.endorserName}
// 		</Text>
// 		<Text>{requestDetails.commentTextLatest}</Text>
// 	</View>
// </TouchableOpacity>

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
	headerBar: {
		borderColor: "#c4c4c4",
		borderBottomWidth: 1
	},
	// requestDetailsBox: {
	// 	flex: 1,
	// 	flexDirection: "row",
	// 	paddingVertical: 24,
	// 	paddingHorizontal: 16
	// },
	// commentContainer: {
	// 	flex: 1,
	// 	flexDirection: "row",
	// 	paddingVertical: 24,
	// 	paddingHorizontal: 16
	// },
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
	}
});
