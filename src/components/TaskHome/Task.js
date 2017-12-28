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
		return (
			<Text style={{ paddingBottom: gap, fontSize: size, fontWeight: type }}>
				{(value = text)}
			</Text>
		);
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
							borderRightWidth: 0.5
						}}
					>
						<View style={{ flexDirection: "row" }}>
							{this.renderText(
								(this.props.text = draft),
								(this.props.size = 16),
								(this.props.type = "bold")
							)}
							{this.renderText(
								(this.props.text = this.props.destination),
								(this.props.size = 14),
								(this.props.type = "bold")
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
		const captionTask = user.receiveTask === false ? null : "PENDING APPROVAL";
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

// const ApplicationSingle = ({
// 	id,
// 	taskId,
// 	requestorName,
// 	destination,
// 	travelType,
// 	travelFrom,
// 	travelUntil,
// 	navigate,
// 	cost,
// 	notification
// }) => (
// 	<View
// 		style={{
// 			shadowOpacity: 0.4,
// 			marginTop: 16,
// 			justifyContent: "flex-start",
// 			backgroundColor: "#ffffff",
// 			borderRadius: 8
// 		}}
// 	>
// 		<TouchableOpacity
// 			onPress={() => navigate("TaskStatus", { taskId: `${taskId}` })}
// 		>
// 			{notification === "new" ? (
// 				<View
// 					style={{
// 						flexDirection: "row",
// 						width: "90%",
// 						justifyContent: "space-between",
// 						paddingVertical: 16,
// 						paddingHorizontal: 16
// 					}}
// 				>
// 					<View>
// 						<Text
// 							style={{
// 								fontSize: 16,
// 								lineHeight: 22,
// 								paddingBottom: 4,
// 								color: "#ee7202",
// 								fontWeight: "bold"
// 							}}
// 						>
// 							{requestorName}
// 						</Text>
// 						<Text style={{ fontSize: 16, paddingBottom: 4, color: "#ee7202" }}>
// 							{destination}
// 						</Text>
// 						<Text style={{ fontSize: 16, color: "#ee7202", paddingBottom: 4 }}>
// 							{travelType}
// 						</Text>
// 						<Text style={{ fontSize: 16, color: "#ee7202", paddingBottom: 4 }}>
// 							{travelFrom} until {travelUntil} 2017
// 						</Text>
// 					</View>
// 					<View style={{ width: "10%", alignItems: "flex-end" }}>
// 						<Circle name="circle" size={16} color="#f27178" />
// 					</View>
// 				</View>
// 			) : (
// 				<View
// 					style={{
// 						width: "90%",
// 						paddingHorizontal: 8,
// 						paddingVertical: 16,
// 						paddingHorizontal: 16
// 					}}
// 				>
// 					<Text
// 						style={{
// 							fontSize: 16,
// 							lineHeight: 22,
// 							paddingBottom: 4,
// 							lineHeight: 22,
// 							color: "#000000",
// 							fontWeight: "bold"
// 						}}
// 					>
// 						{requestorName}
// 					</Text>
// 					<Text style={{ fontSize: 16, paddingBottom: 4, color: "#808080" }}>
// 						{destination}
// 					</Text>
// 					<Text style={{ fontSize: 16, paddingBottom: 4, color: "#808080" }}>
// 						{travelType}
// 					</Text>
// 					<Text style={{ fontSize: 16, color: "#808080" }}>
// 						{travelFrom} until {travelUntil} 2017
// 					</Text>
// 				</View>
// 			)}
// 			<View
// 				style={{
// 					flexDirection: "row",
// 					backgroundColor: "#5856d6",
// 					justifyContent: "space-between",
// 					paddingVertical: 16,
// 					borderBottomRightRadius: 8,
// 					borderBottomLeftRadius: 8
// 				}}
// 			>
// 				<View style={{ paddingHorizontal: 16 }}>
// 					<Price name="credit-card" size={24} color="#ffffff" />
// 				</View>
// 				<Text
// 					style={{
// 						paddingHorizontal: 16,
// 						fontSize: 18,
// 						color: "#ffffff",
// 						textShadowColor: "#c4c4c4"
// 					}}
// 				>
// 					RM {cost}
// 				</Text>
// 			</View>
// 		</TouchableOpacity>
// 	</View>
// );
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
