import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

class FormBar extends React.Component {
	renderLine() {
		return (
			<View style={{ flex: 0.25 }}>
				<View
					style={{
						alignItems: "center",
						flex: 0.3,
						borderColor: "#c4c4c4",
						borderBottomWidth: 1
					}}
				/>
			</View>
		);
	}
	renderIcon(name, text) {
		return (
			<View style={{ flex: 0.2, alignItems: "center" }}>
				<Icon name={name} size={24} color="#000000" />
				<Text style={{ fontSize: 10 }}>{(value = text)}</Text>
			</View>
		);
	}
	render() {
		return (
			<View style={styles.formBarContainer}>
				{this.renderIcon(
					(this.props.name = "user"),
					(this.props.text = "Profile")
				)}
				{this.renderLine()}
				{this.renderIcon(
					(this.props.name = "location"),
					(this.props.text = "Travel")
				)}
				{this.renderLine()}
				{this.renderIcon(
					(this.props.name = "credit-card"),
					(this.props.text = "Cost")
				)}
				{this.renderLine()}
				{this.renderIcon(
					(this.props.name = "check"),
					(this.props.text = "Approval")
				)}
			</View>
		);
	}
}

export default FormBar;

const styles = StyleSheet.create({
	formBarContainer: {
		flexDirection: "row",
		marginTop: 16,
		marginHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 4,
		backgroundColor: "#ffffff",
		justifyContent: "space-around"
	}
});
