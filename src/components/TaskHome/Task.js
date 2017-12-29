import React from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	FlatList
} from "react-native";
import Circle from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/EvilIcons";

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

class CardSingle extends React.Component {
	handlePressTask(navigate) {
		navigateTo = navigate("TaskStatus", { taskId: `${this.props.taskId}` });
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
			<View style={{ flexDirection: "row", paddingRight: 8 }}>
				<Icon name={thumbnail} size={20} color="#c4c4c4" />
				{this.renderText((this.props.text = caption), (this.props.size = 12))}
			</View>
		);
	}
	render() {
		const { travelFrom, travelUntil, navigate, notification } = this.props;
		const draft = this.props.status == "Draft" ? "[Draft]" : null;
		return (
			<TouchableOpacity
				onPress={() => this.handlePressTask(navigate)}
				style={[
					{ backgroundColor: "#ffffff", borderRadius: 8, marginTop: 8 },
					this.props.status == "Draft" && {
						backgroundColor: "#dcdcdc",
						borderRadius: 8,
						marginTop: 8
					}
				]}
			>
				<View
					style={{
						flexDirection: "row",
						paddingVertical: 8,
						borderLeftWidth: 5,
						borderColor: "green",
						marginVertical: 1,
						marginLeft: 2
					}}
				>
					<View
						style={{
							flex: 0.7,
							paddingVertical: 8,
							paddingHorizontal: 24,
							borderRightWidth: 0.5,
							borderColor: "#dcdcdc"
						}}
					>
						<View style={{ flexDirection: "row" }}>
							{this.renderText(
								(this.props.text = draft),
								(this.props.size = 16),
								(this.props.type = "bold")
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
							style={{ flexDirection: "row", justifyContent: "space-around" }}
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
					<View
						style={{
							flex: 0.3,
							alignItems: "center",
							justifyContent: "center"
						}}
					>
						{this.renderText((this.props.text = travelFrom))}
					</View>
					{this.handleNotification(notification)}
				</View>
			</TouchableOpacity>
		);
	}
}

class Task extends React.Component {
	renderCaption(text) {
		return (
			<Text style={{ paddingHorizontal: 16, paddingTop: 8, fontSize: 12 }}>
				{(value = text)}
			</Text>
		);
	}
	render() {
		const { navigate } = this.props.navigation;
		const { taskDetails, user } = this.props;
		const captionTask = taskDetails == "" ? null : "PENDING APPROVAL";
		if (taskDetails == "") {
			return (
				<View style={styles.emptyContainer}>
					<Text style={{ fontWeight: "bold" }}>Incoming!</Text>
					<Text style={{ textAlign: "center" }}>
						Sooner or later, you will need to approve or reject the request!
					</Text>
				</View>
			);
		}
		return (
			<View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
				<View style={{ flex: 1, paddingHorizontal: 8 }}>
					{this.renderCaption((this.props.text = captionTask))}
					<FlatList
						data={taskDetails}
						keyExtractor={(item, index) => item.id}
						renderItem={({ item }) => (
							<CardSingle
								navigate={navigate}
								taskId={item.id}
								id={item.id}
								requestorName={item.requestorName}
								destination={item.destination}
								travelType={item.travelType}
								travelFrom={item.travelFrom}
								travelUntil={item.travelUntil}
								cost={item.cost}
								notification={item.notification}
								status={item.status}
							/>
						)}
					/>
				</View>
			</View>
		);
	}
}

export default Task;

const styles = StyleSheet.create({
	emptyContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 24,
		paddingHorizontal: 24
	}
});

//
// const TaskEmpty = () => (
// 	<View
// 		style={{
// 			flex: 1,
// 			justifyContent: "center",
// 			alignItems: "center",
// 			paddingHorizontal: 24
// 		}}
// 	>
// 		<Text style={{ fontWeight: "bold" }}>Incoming!</Text>
// 		<Text style={{ textAlign: "center" }}>
// 			Sooner or later, you will need to approve or reject the request!
// 		</Text>
// 	</View>
// );
