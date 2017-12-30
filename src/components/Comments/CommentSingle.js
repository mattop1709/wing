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
import moment from "moment";

const CommentSingle = ({ id, senderName, commentText, timeStamp }) => (
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

export default CommentSingle;
