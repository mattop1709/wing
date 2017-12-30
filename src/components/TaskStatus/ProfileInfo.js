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

export default ProfileInfo;
