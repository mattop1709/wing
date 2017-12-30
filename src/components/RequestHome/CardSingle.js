import React from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	FlatList
} from "react-native";

import Icon from "react-native-vector-icons/EvilIcons";
import Menu from "react-native-vector-icons/Ionicons";
import ActionButton from "react-native-action-button";
import Circle from "react-native-vector-icons/FontAwesome";

function Heading({ text, size, type, gap }) {
	return (
		<Text style={{ paddingBottom: gap, fontSize: size, fontWeight: "bold" }}>
			{(value = text)}
		</Text>
	);
}

function Texts({ text, size, gap }) {
	return (
		<Text style={{ paddingBottom: gap, fontSize: size }}>{(value = text)}</Text>
	);
}

function Captions(text) {
	<Text style={{ paddingHorizontal: 16, paddingTop: 8, fontSize: 12 }}>
		{(value = text)}
	</Text>;
}

class CardSingle extends React.Component {
	handlePressRequest(navigate) {
		if (this.props.status == "Draft") {
			navigateTo = navigate("SubmitForm", {
				saved: true
			});
		} else
			navigateTo = navigate("RequestStatus", {
				saved: true
			});
	}
	handlePressTask(navigate) {
		navigateTo = navigate("TaskStatus");
	}
	handleNotification(notification) {
		if (notification === "new")
			return (
				<View style={{ paddingRight: 4 }}>
					<Circle name="circle" size={10} color="red" />
				</View>
			);
	}
	renderText(text, size, type, gap) {
		return <Texts text={text} size={size} type={type} gap={gap} />;
	}
	renderHeading(text, size, gap) {
		return <Heading text={text} size={size} gap={gap} />;
	}
	renderIcon(caption, thumbnail) {
		return (
			<View style={{ flex: 0.3 }}>
				<View style={{ flexDirection: "row", paddingRight: 8 }}>
					<Icon name={thumbnail} size={18} color="#c4c4c4" />
					<Text style={{ fontSize: 12 }}>{(value = caption)}</Text>
				</View>
			</View>
		);
	}
	render() {
		const { travelFrom, travelUntil, navigate, notification } = this.props;
		const draft = this.props.status == "Draft" ? "[Draft]" : null;
		return (
			<TouchableOpacity
				onPress={() => {
					if (this.props.request) {
						this.handlePressRequest(navigate);
					} else this.handlePressTask(navigate);
				}}
				style={[
					styles.submitCardStyle,
					this.props.status == "Draft" && styles.draftCardStyle
				]}
			>
				<View
					style={[
						styles.taskCardStyle,
						this.props.request && styles.requestCardStyle
					]}
				>
					<View style={styles.cardLeftContainer}>
						<View style={{ flexDirection: "row" }}>
							{this.renderText(
								(this.props.text = draft),
								(this.props.size = 12)
							)}
							{this.renderHeading(
								(this.props.text = this.props.destination),
								(this.props.size = 14)
							)}
						</View>
						{this.renderText(
							(this.props.text = this.props.travelType),
							(this.props.size = 12),
							(this.props.type = ""),
							(this.props.gap = 14)
						)}
						<View
							style={{ flexDirection: "row", justifyContent: "space-between" }}
						>
							{this.renderIcon(
								(this.props.caption = "5 days"),
								(this.props.thumbnail = "calendar")
							)}
							{this.renderIcon(
								(this.props.caption = "1 person"),
								(this.props.thumbnail = "user")
							)}
							{this.renderIcon(
								(this.props.caption = this.props.status),
								(this.props.thumbnail = "check")
							)}
						</View>
					</View>
					<View style={styles.cardRightContainer}>
						{this.renderText((this.props.text = travelFrom))}
					</View>
					<View style={{ flex: 0.05 }}>
						{this.handleNotification(notification)}
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}

export default CardSingle;

const styles = StyleSheet.create({
	cardLeftContainer: {
		flex: 0.7,
		paddingVertical: 8,
		paddingHorizontal: 24,
		borderRightWidth: 0.5,
		borderColor: "#dcdcdc"
	},
	cardRightContainer: {
		flex: 0.3,
		alignItems: "center",
		justifyContent: "center"
	},
	requestCardStyle: {
		flexDirection: "row",
		paddingVertical: 8,
		borderLeftWidth: 5,
		borderColor: "blue",
		marginVertical: 1,
		marginLeft: 2
	},
	taskCardStyle: {
		flexDirection: "row",
		paddingVertical: 8,
		borderLeftWidth: 5,
		borderColor: "green",
		marginVertical: 1,
		marginLeft: 2
	},
	submitCardStyle: {
		backgroundColor: "#ffffff",
		borderRadius: 8,
		marginTop: 8
	},
	draftCardStyle: {
		backgroundColor: "#dcdcdc",
		borderRadius: 8,
		marginTop: 8
	}
});
