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
import { AutoGrowingTextInput } from "react-native-autogrow-textinput";
import Send from "react-native-vector-icons/MaterialIcons";
import NavigationBar from "react-native-navbar";
import moment from "moment";

const ChatInfo = ({ requestDetails }) => (
	<View style={styles.travelDetailsContainer}>
		<Text style={{ paddingBottom: 4, fontSize: 16, fontWeight: "bold" }}>
			{requestDetails.destination}
		</Text>
		<Text style={{ paddingBottom: 4, fontSize: 14, color: "#808080" }}>
			{requestDetails.travelFrom} until {requestDetails.travelUntil}
		</Text>
	</View>
);

const ChatSingle = ({ id, senderName, commentText, timeStamp }) => (
	<View
		style={{
			paddingHorizontal: 16,
			paddingVertical: 16,
			borderBottomWidth: 1,
			borderColor: "#f9f9f9",
			marginHorizontal: 8
		}}
	>
		<Text style={{ fontWeight: "bold", paddingBottom: 4 }}>{senderName}</Text>
		<Text style={{ paddingBottom: 4, lineHeight: 24 }}>{commentText}</Text>
		<Text style={{ fontSize: 12, color: "#c4c4c4" }}>
			{moment(timeStamp)
				.startOf("minute")
				.fromNow()}
		</Text>
	</View>
);

class Comments extends React.Component {
	constructor(props) {
		super(props);
		this.state = { height: 0, texts: "" };
		this._handlePress = this._handlePress.bind(this);
	}
	_handlePress(texts, comments) {
		this.setState({ comments: texts });
	}
	render() {
		const { goBack } = this.props.navigation;
		const { requestDetails, commentDetails } = this.props;
		const { name } = this.props.userDetails;
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

				<ChatInfo requestDetails={requestDetails} />

				<ScrollView style={{ flex: 1 }}>
					<FlatList
						data={commentDetails}
						keyExtractor={(item, index) => item.id}
						renderItem={({ item }) => (
							<ChatSingle
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
							onChangeText={this._handlePress}
							onContentSizeChange={event => {
								this.setState({ height: event.nativeEvent.contentSize.height });
							}}
							style={{
								padding: 8,
								fontSize: 14,
								height: Math.max(35, this.state.height),
								underlineColorAndroid: "transparent"
							}}
						/>
					</View>
					<View style={{ justifyContent: "center", marginBottom: 8 }}>
						<TouchableOpacity onPress={() => this.props.addComment()}>
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

// const ChatInfo = ({ requestDetails }) => (
// 	<View style={styles.travelDetailsContainer}>
// 		<Text style={{ paddingBottom: 4, fontSize: 16, fontWeight: "bold" }}>
// 			{requestDetails.destination}
// 		</Text>
// 		<Text style={{ paddingBottom: 4, fontSize: 14, color: "#808080" }}>
// 			{requestDetails.travelFrom} until {requestDetails.travelUntil}
// 		</Text>
// 		<Text style={{ paddingBottom: 4, fontSize: 14, color: "#808080" }}>
// 			{requestDetails.travelType}
// 		</Text>
// 		<View style={{ flexDirection: "row", paddingBottom: 4 }}>
// 			<Text style={{ fontSize: 14 }}>By:</Text>
// 			<Text style={{ paddingLeft: 8, fontSize: 14, color: "green" }}>
// 				{requestDetails.requestorName}
// 			</Text>
// 		</View>
// 		<View style={{ flexDirection: "row" }}>
// 			<Text style={{ fontSize: 14 }}>Status:</Text>
// 			<Text style={{ paddingLeft: 8, fontSize: 14, color: "#f27178" }}>
// 				{requestDetails.status}
// 			</Text>
// 		</View>
// 	</View>
// );
