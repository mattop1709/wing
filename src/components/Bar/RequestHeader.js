import React from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	ScrollView,
	TouchableOpacity,
	Alert
} from "react-native";

class RequestHeader extends React.Component {
	render() {
		const { requestDetails, userDetails } = this.props;
		return (
			<View style={styles.headerContainer}>
				<View style={styles.logoBox}>
					<Text style={styles.logoText}>Logo</Text>
				</View>
				<View style={styles.infoBox}>
					<Text style={{ fontSize: 12, textAlign: "right" }}>
						WINGS -
						{requestDetails.ticketNumber}
					</Text>
					<Text style={{ fontSize: 12, textAlign: "right" }}>
						{requestDetails.timeStamp}
					</Text>
				</View>
			</View>
		);
	}
}

export default RequestHeader;

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 32,
		paddingHorizontal: 8
	},
	infoBox: {
		width: "30%",
		paddingHorizontal: 8,
		justifyContent: "center"
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
	}
});
