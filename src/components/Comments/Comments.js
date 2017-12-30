import React from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	ScrollView,
	KeyboardAvoidingView,
	TouchableOpacity,
	FlatList
} from "react-native";
import Send from "react-native-vector-icons/MaterialIcons";
import NavigationBar from "react-native-navbar";

import CommentSingle from "./CommentSingle";

const ChatInfo = ({ requestDetails }) => (
	<View style={styles.travelDetailsContainer}>
		<Text style={{ paddingBottom: 4, fontSize: 16, fontWeight: "bold" }}>
			{request.destination}
		</Text>
		<Text style={{ paddingBottom: 4, fontSize: 14, color: "#808080" }}>
			{request.travelFrom} until {request.travelUntil}
		</Text>
	</View>
);

class Comments extends React.Component {
	constructor(props) {
		super(props);
		this.state = { height: 0, texts: "" };
		this._handlePress = this._handlePress.bind(this);
	}
	_handlePress(comments) {
		this.setState({ comments: texts });
	}
	render() {
		const { goBack } = this.props.navigation;
		const { requestDetails, commentDetails } = this.props;
		const leftButtonConfig = {
			title: "Back",
			handler: () => goBack()
		};
		return (
			<View style={{ flex: 1, backgroundColor: "#ffffff" }}>
				<NavigationBar
					style={styles.headerBar}
					title={{ title: "Comments" }}
					leftButton={leftButtonConfig}
				/>
				<ChatInfo request={request} />
				<ScrollView style={{ flex: 1 }}>
					<FlatList
						data={comments}
						keyExtractor={(item, index) => item.id}
						renderItem={({ item }) => (
							<CommentSingle
								id={item.id}
								senderName={item.senderName}
								commentText={item.commentText}
								timeStamp={item.timeStamp}
							/>
						)}
					/>
				</ScrollView>
				<KeyboardAvoidingView
					behavior="padding"
					style={styles.typeCommentContainer}
				>
					<View style={styles.textInputBox}>
						<TextInput
							placeholder="Type your comment here.."
							underlineColorAndroid="transparent"
							multiline={true}
							onChangeText={comments => this._handlePress(comments)}
							onContentSizeChange={event => {
								this.setState({ height: event.nativeEvent.contentSize.height });
							}}
							style={{
								padding: 8,
								fontSize: 14,
								height: Math.max(35, this.state.height)
							}}
						/>
					</View>
					<View style={{ justifyContent: "center", marginBottom: 8 }}>
						<TouchableOpacity onPress={() => null}>
							<Send name="send" size={24} color="#000000" />
						</TouchableOpacity>
					</View>
				</KeyboardAvoidingView>
			</View>
		);
	}
}

export default Comments;

const styles = StyleSheet.create({
	travelDetailsContainer: {
		marginHorizontal: 8,
		paddingHorizontal: 8,
		paddingVertical: 16,
		borderBottomWidth: 0.5,
		borderColor: "#c4c4c4"
	},
	typeCommentContainer: {
		flexDirection: "row",
		borderTopWidth: 1,
		borderColor: "#c4c4c4",
		paddingVertical: 8,
		justifyContent: "space-around"
	},
	textInputBox: {
		flex: 0.9,
		marginBottom: 8
	},
	headerBar: {
		borderColor: "#c4c4c4",
		borderBottomWidth: 1
	}
});

const comments = [
	{
		id: "1",
		senderName: "Ali Muhd Wasil bin Ali Absar",
		commentText:
			"Hafiz, where can we have all beautiful shawties around that area? I want them like right now!",
		timeStamp: "13 September 2017, 3.20pm"
	},
	{
		id: "2",
		senderName: "Mohammad Hafiz bin Burhan",
		commentText: "Get the boot, into the mommy house",
		timeStamp: "14 September 2017, 4.17pm"
	}
];

const request = {
	id: "1001",
	completed: true,
	status: "EEIU",
	notification: "new",
	timeStamp: "11111111111111111111111",
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
