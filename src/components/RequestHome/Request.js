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

// import TrackingBar from "../Bar/TrackingBar";

import HomeHeader from "../Bar/HomeHeader";

// const RequestEmpty = (
// 	<View
// 		style={{
// 			flex: 1,
// 			justifyContent: "center",
// 			alignItems: "center"
// 		}}
// 	>
// 		<Text style={{ fontWeight: "bold" }}>Let us start!</Text>
// 		<Text>Click on the Action Button to Start!</Text>
// 	</View>
// );

class CardSingle extends React.Component {
	handlePressRequest(navigate) {
		if (this.props.status == "Draft") {
			navigateTo = navigate("SubmitForm", {
				formDraftId: `${this.props.formDraftId}`,
				saved: true
			});
		} else
			navigateTo = navigate("RequestStatus", {
				formId: `${this.props.formId}`,
				saved: true
			});
	}
	handlePressTask(navigate) {
		navigateTo = navigate("TaskStatus", { taskId: `${this.props.taskId}` });
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
				onPress={() => {
					if ((data = this.props.requestDetails)) {
						this.handlePressRequest(navigate);
					} else this.handlePressTask(navigate);
				}}
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
					style={[
						{
							flexDirection: "row",
							paddingVertical: 8,
							borderLeftWidth: 5,
							borderColor: "green",
							marginVertical: 1,
							marginLeft: 2
						},
						this.props.requestDetails && {
							flexDirection: "row",
							paddingVertical: 8,
							borderLeftWidth: 5,
							borderColor: "blue",
							marginVertical: 1,
							marginLeft: 2
						}
					]}
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
				</View>
			</TouchableOpacity>
		);
	}
}

//known as Home
class Request extends React.Component {
	renderCaption(text) {
		return (
			<Text style={{ paddingHorizontal: 16, paddingTop: 8, fontSize: 12 }}>
				{(value = text)}
			</Text>
		);
	}
	renderText(integer, text) {
		return (
			<View style={{ flex: 0.2, alignItems: "center" }}>
				<Text style={{ paddingBottom: 0, fontSize: 18, fontWeight: "bold" }}>
					{(value = integer)}
				</Text>
				<Text style={{ paddingBottom: 4, fontSize: 10, textAlign: "center" }}>
					{(value = text)}
				</Text>
			</View>
		);
	}
	render() {
		const { navigate } = this.props.navigation;
		const { requestDetails, user, formDraftId, taskDetails } = this.props;
		const captionRequest =
			user.submitRequest === false ? null : "PENDING REQUEST";
		const captionTask = user.receiveTask === false ? null : "PENDING APPROVAL";
		return (
			<View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
				<ScrollView>
					<HomeHeader user={user} />
					<View
						style={{
							backgroundColor: "white",
							marginHorizontal: 24,
							paddingVertical: 8,
							flexDirection: "row",
							justifyContent: "space-around",
							borderBottomLeftRadius: 4,
							borderBottomRightRadius: 4
						}}
					>
						{this.renderText(
							(this.props.integer = 10),
							(this.props.text = "TOTAL REQUEST ")
						)}
						{this.renderText(
							(this.props.integer = 2),
							(this.props.text = "PENDING REQUEST ")
						)}
						{this.renderText(
							(this.props.integer = 1),
							(this.props.text = "PENDING APPROVAL ")
						)}
						{this.renderText(
							(this.props.integer = 2),
							(this.props.text = "DRAFT REQUEST ")
						)}
					</View>
					<View style={{ paddingHorizontal: 8 }}>
						{this.renderCaption((this.props.text = captionRequest))}
						<FlatList
							data={requestDetails}
							keyExtractor={(item, index) => item.id}
							renderItem={({ item }) => (
								<CardSingle
									formId={item.id}
									formDraftId={item.id}
									navigate={navigate}
									requestDetails={requestDetails}
									destination={item.destination}
									travelFrom={item.travelFrom}
									travelUntil={item.travelUntil}
									travelType={item.travelType}
									status={item.status}
									notification={item.notification}
								/>
							)}
						/>

						{this.renderCaption((this.props.text = captionTask))}
						<FlatList
							data={taskDetails}
							keyExtractor={(item, index) => item.id}
							renderItem={({ item }) => (
								<CardSingle
									formId={item.id}
									formDraftId={item.id}
									navigate={navigate}
									destination={item.destination}
									travelFrom={item.travelFrom}
									travelUntil={item.travelUntil}
									travelType={item.travelType}
									status={item.status}
									notification={item.notification}
								/>
							)}
						/>
					</View>
				</ScrollView>
				<ActionButton
					buttonColor="#333333"
					onPress={() => {
						navigate("ProfileForm", {
							edit: false,
							formDraftId: `${formDraftId}`
						}),
							this.props.newRequest({ user });
					}}
				/>
			</View>
		);
		// }
	}
}

export default Request;

// const styles = StyleSheet.create({});
