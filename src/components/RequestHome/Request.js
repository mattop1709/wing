import React from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	FlatList
} from "react-native";
import NavBar, { NavButton, NavButtonText, NavTitle } from "react-native-nav";

import Icon from "react-native-vector-icons/EvilIcons";
import Menu from "react-native-vector-icons/Ionicons";
import ActionButton from "react-native-action-button";
import Circle from "react-native-vector-icons/FontAwesome";

import TrackingBar from "../Bar/TrackingBar";

class Request extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			travelTypeInput: "",
			destinationInput: "",
			date: "",
			date2: "",
			justificationInput: "",
			cost1: ""
		};
	}
	render() {
		const { navigate } = this.props.navigation;
		const {
			travelTypeInput,
			destinationInput,
			date,
			date2,
			justificationInput,
			cost1
		} = this.state;
		const { requestHome, user } = this.props;
		return (
			<View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
				<View style={{ flex: 1, paddingHorizontal: 8 }}>
					{user.receiveRequest === "false" ? (
						<View
							style={{
								flex: 1,
								justifyContent: "center",
								alignItems: "center"
							}}
						>
							<Text style={{ fontWeight: "bold" }}>Let us start!</Text>
							<Text>Click on the Action Button to Start!</Text>
						</View>
					) : (
						<FlatList
							data={requestHome}
							keyExtractor={(item, index) => item.ref}
							renderItem={({ item }) => (
								<ApplicationSingle
									id={item.id}
									formId={item.ticketNumber}
									formDraftId={item.ticketNumber}
									navigate={navigate}
									destination={item.destination}
									travelFrom={item.travelFrom}
									travelUntil={item.travelUntil}
									travelType={item.travelType}
									dialogBox={item.dialogBox}
									status={item.status}
									reject={item.reject}
									notification={item.notification}
								/>
							)}
						/>
					)}
				</View>

				<ActionButton
					buttonColor="#333333"
					onPress={() => {
						navigate("ProfileForm", { reddit: 0 }),
							this.props.setTravelType({
								destinationInput,
								travelTypeInput,
								date,
								date2,
								justificationInput,
								cost1
							});
					}}
				/>
			</View>
		);
	}
}

export default Request;

const ApplicationSingle = ({
	ref,
	destination,
	travelFrom,
	travelUntil,
	travelType,
	dialogBox,
	navigate,
	status,
	notification,
	formId,
	formDraftId
}) => (
	<View style={styles.applicationCardBox}>
		{status === "Draft" ? (
			<TouchableOpacity
				onPress={() =>
					navigate("SubmitForm", { formDraftId: `${formDraftId}` })
				}
				style={{ backgroundColor: "#dcdcdc", borderRadius: 8 }}
			>
				<View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
					<Text style={styles.destinationDraftText}>[Draft] {destination}</Text>
					<Text style={styles.travelTypeDraftText}>{travelType}</Text>
					<Text style={{ fontSize: 16, paddingBottom: 4, color: "#000000" }}>
						{travelFrom} until {travelUntil}
					</Text>
				</View>

				<TrackingBar status={status} />

				<View style={styles.commentBoxDraftContainer}>
					<Icon name="comment" size={24} color="#000000" />
					<Text style={{ paddingLeft: 8, fontSize: 16, fontWeight: "bold" }}>
						{dialogBox}
					</Text>
				</View>
			</TouchableOpacity>
		) : (
			<TouchableOpacity
				onPress={() => navigate("RequestStatus", { formId: `${formId}` })}
				style={{ backgroundColor: "#ffffff", borderRadius: 8 }}
			>
				{notification === "new" ? (
					<View style={styles.applicationCardDetailsNewContainer}>
						<View>
							<Text style={styles.destinationNewText}>{destination}</Text>
							<Text style={styles.travelTypeNewText}>{travelType}</Text>
							<Text
								style={{ fontSize: 16, paddingBottom: 4, color: "#cf0832" }}
							>
								{travelFrom} until {travelUntil} 2017
							</Text>
						</View>
						<View>
							<Circle name="circle" size={16} color="#cf0832" />
						</View>
					</View>
				) : (
					<View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
						<Text style={styles.destinationText}>{destination}</Text>
						<Text style={styles.travelTypeText}>{travelType}</Text>
						<Text style={{ fontSize: 16, paddingBottom: 4, color: "#808080" }}>
							{travelFrom} until {travelUntil} 2017
						</Text>
					</View>
				)}

				{status === "eeiu" ? (
					<View style={styles.eeiuTrackingBar}>
						<Text style={{ color: "white" }}>Pending EEIU Approval</Text>
					</View>
				) : (
					<TrackingBar status={status} />
				)}

				<View style={styles.commentBoxContainer}>
					<Icon name="comment" size={24} color="#000000" />
					<Text style={{ paddingLeft: 8, fontSize: 16, fontWeight: "bold" }}>
						{dialogBox}
					</Text>
				</View>
			</TouchableOpacity>
		)}
	</View>
);

const styles = StyleSheet.create({
	applicationCardBox: {
		marginTop: 16,
		justifyContent: "flex-start",
		shadowOpacity: 0.4,
		borderRadius: 8
	},
	destinationDraftText: {
		fontSize: 16,
		paddingBottom: 4,
		color: "#000000",
		fontWeight: "bold"
	},
	travelTypeDraftText: {
		fontSize: 16,
		paddingBottom: 4,
		color: "#000000"
	},
	commentBoxDraftContainer: {
		flexDirection: "row",
		backgroundColor: "#c0c0c0",
		paddingVertical: 16,
		paddingHorizontal: 16,
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8
	},
	applicationCardDetailsNewContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 16,
		paddingHorizontal: 16
	},
	destinationNewText: {
		fontSize: 16,
		paddingBottom: 4,
		color: "#cf0832",
		fontWeight: "bold"
	},
	travelTypeNewText: {
		fontSize: 16,
		paddingBottom: 4,
		color: "#cf0832"
	},
	destinationText: {
		fontSize: 16,
		paddingBottom: 6,
		color: "#000000",
		fontWeight: "bold"
	},
	travelTypeText: {
		fontSize: 16,
		paddingBottom: 4,
		color: "#808080"
	},
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
	commentBoxContainer: {
		flexDirection: "row",
		backgroundColor: "#ffcc22",
		paddingVertical: 16,
		paddingHorizontal: 16,
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8
	}
});
