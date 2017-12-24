import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/EvilIcons";

class HomeHeader extends React.Component {
	renderText(text, size, type, gap) {
		return (
			<Text style={{ paddingBottom: gap, fontSize: size, fontWeight: type }}>
				{(value = text)}
			</Text>
		);
	}
	render() {
		const { user } = this.props;
		return (
			<View style={styles.headerContainer}>
				<View style={{ paddingVertical: 10, alignItems: "center" }}>
					<Icon name="user" size={70} color="#000000" />
				</View>
				<View style={styles.detailsBox}>
					{this.renderText(
						(this.props.text = user.name),
						(this.props.size = 14),
						(this.props.type = "bold"),
						(this.props.gap = 0)
					)}
					{this.renderText(
						(this.props.text = user.division),
						(this.props.size = 10)
					)}
					{this.renderText(
						(this.props.text = user.staffID),
						(this.props.size = 10)
					)}
				</View>
			</View>
		);
	}
}

export default HomeHeader;

const styles = StyleSheet.create({
	headerContainer: {
		flex: 0.7,
		backgroundColor: "#ff954f"
	},
	detailsBox: {
		flex: 1,
		backgroundColor: "white",
		paddingVertical: 16,
		marginHorizontal: 24,
		alignItems: "center",
		justifyContent: "center",
		borderTopRightRadius: 4,
		borderTopLeftRadius: 4
	}
});
