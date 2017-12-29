import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

function Line() {
	return (
		<View style={{ flex: 0.2 }}>
			<View
				style={{
					alignItems: "center",
					flex: 0.5,
					borderColor: "#c4c4c4",
					borderBottomWidth: 1
				}}
			/>
		</View>
	);
}

class FormBar extends React.Component {
	renderLine() {
		return <Line />;
	}
	render() {
		const profileIcon =
			this.props.profile !== true ? (
				<Icon name="user" size={24} color="#000000" />
			) : (
				<Icon name="user" size={24} color="#ee7202" />
			);
		const travelIcon =
			this.props.travel !== true ? (
				<Icon name="location" size={24} color="#000000" />
			) : (
				<Icon name="location" size={24} color="#ee7202" />
			);
		const costIcon =
			this.props.cost !== true ? (
				<Icon name="credit-card" size={24} color="#000000" />
			) : (
				<Icon name="credit-card" size={24} color="#ee7202" />
			);
		const approverIcon =
			this.props.approver !== true ? (
				<Icon name="check" size={24} color="#000000" />
			) : (
				<Icon name="check" size={24} color="#ee7202" />
			);
		return (
			<View style={styles.formBarContainer}>
				<View style={{ flex: 0.2, alignItems: "center" }}>
					{profileIcon}
					<Text
						style={[
							{ fontSize: 10 },
							this.props.profile == true && styles.activeText
						]}
					>
						Profile
					</Text>
				</View>
				{this.renderLine()}
				<View style={{ flex: 0.2, alignItems: "center" }}>
					{travelIcon}
					<Text
						style={[
							{ fontSize: 10 },
							this.props.travel == true && styles.activeText
						]}
					>
						Travel
					</Text>
				</View>
				{this.renderLine()}
				<View style={{ flex: 0.2, alignItems: "center" }}>
					{costIcon}
					<Text
						style={[
							{ fontSize: 10 },
							this.props.cost == true && styles.activeText
						]}
					>
						Cost
					</Text>
				</View>
				{this.renderLine()}
				<View style={{ flex: 0.2, alignItems: "center" }}>
					{approverIcon}
					<Text
						style={[
							{ fontSize: 10 },
							this.props.approver == true && styles.activeText
						]}
					>
						Approval
					</Text>
				</View>
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
		paddingHorizontal: 16,
		borderRadius: 4,
		backgroundColor: "#ffffff",
		justifyContent: "space-around"
	},
	activeText: {
		fontSize: 10,
		color: "#ee7202"
	}
});
