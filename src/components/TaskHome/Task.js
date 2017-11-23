import React from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	FlatList
} from "react-native";
// import Icon from "react-native-vector-icons/EvilIcons";
// import Cancel from "react-native-vector-icons/MaterialIcons";
// import Menu from "react-native-vector-icons/Ionicons";
import Price from "react-native-vector-icons/FontAwesome";
import Circle from "react-native-vector-icons/FontAwesome";

class Task extends React.Component {
	render() {
		const { navigate } = this.props.navigation;
		const { taskHome, user } = this.props;
		if (user.receiveTask == "false") {
			return <TaskEmpty />;
		} else {
			return (
				<View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
					<View style={{ flex: 1, paddingHorizontal: 8 }}>
						<View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
							<View style={{ flex: 1, paddingHorizontal: 8 }}>
								<FlatList
									data={taskHome}
									keyExtractor={(item, index) => item.id}
									renderItem={({ item }) => (
										<ApplicationSingle
											navigate={navigate}
											taskId={item.ticketNumber}
											id={item.id}
											requestorName={item.requestorName}
											destination={item.destination}
											travelType={item.travelType}
											travelFrom={item.travelFrom}
											travelUntil={item.travelUntil}
											cost={item.cost}
											notification={item.notification}
										/>
									)}
								/>
							</View>
						</View>
					</View>
				</View>
			);
		}
	}
}

export default Task;

const ApplicationSingle = ({
	id,
	taskId,
	requestorName,
	destination,
	travelType,
	travelFrom,
	travelUntil,
	navigate,
	cost,
	notification
}) => (
	<View
		style={{
			shadowOpacity: 0.4,
			marginTop: 16,
			justifyContent: "flex-start",
			backgroundColor: "#ffffff",
			borderRadius: 8
		}}
	>
		<TouchableOpacity
			onPress={() => navigate("TaskStatus", { taskId: `${taskId}` })}
		>
			{notification === "new" ? (
				<View
					style={{
						flexDirection: "row",
						width: "90%",
						justifyContent: "space-between",
						paddingVertical: 16,
						paddingHorizontal: 16
					}}
				>
					<View>
						<Text
							style={{
								fontSize: 16,
								lineHeight: 22,
								paddingBottom: 4,
								color: "#ee7202",
								fontWeight: "bold"
							}}
						>
							{requestorName}
						</Text>
						<Text style={{ fontSize: 16, paddingBottom: 4, color: "#ee7202" }}>
							{destination}
						</Text>
						<Text style={{ fontSize: 16, color: "#ee7202", paddingBottom: 4 }}>
							{travelType}
						</Text>
						<Text style={{ fontSize: 16, color: "#ee7202", paddingBottom: 4 }}>
							{travelFrom} until {travelUntil} 2017
						</Text>
					</View>
					<View style={{ width: "20%", alignItems: "flex-end" }}>
						<Circle name="circle" size={16} color="#f27178" />
					</View>
				</View>
			) : (
				<View
					style={{
						width: "90%",
						paddingHorizontal: 8,
						paddingVertical: 16,
						paddingHorizontal: 16
					}}
				>
					<Text
						style={{
							fontSize: 16,
							lineHeight: 22,
							paddingBottom: 4,
							lineHeight: 22,
							color: "#000000",
							fontWeight: "bold"
						}}
					>
						{requestorName}
					</Text>
					<Text style={{ fontSize: 16, paddingBottom: 4, color: "#808080" }}>
						{destination}
					</Text>
					<Text style={{ fontSize: 16, paddingBottom: 4, color: "#808080" }}>
						{travelType}
					</Text>
					<Text style={{ fontSize: 16, color: "#808080" }}>
						{travelFrom} until {travelUntil} 2017
					</Text>
				</View>
			)}
			<View
				style={{
					flexDirection: "row",
					backgroundColor: "#5856d6",
					justifyContent: "space-between",
					paddingVertical: 16,
					borderBottomRightRadius: 8,
					borderBottomLeftRadius: 8
				}}
			>
				<View style={{ paddingHorizontal: 16 }}>
					<Price name="credit-card" size={24} color="#ffffff" />
				</View>
				<Text
					style={{
						paddingHorizontal: 16,
						fontSize: 18,
						color: "#ffffff",
						textShadowColor: "#c4c4c4"
					}}
				>
					RM {cost}
				</Text>
			</View>
		</TouchableOpacity>
	</View>
);

const TaskEmpty = () => (
	<View
		style={{
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			paddingHorizontal: 24
		}}
	>
		<Text style={{ fontWeight: "bold" }}>Incoming!</Text>
		<Text style={{ textAlign: "center" }}>
			Sooner or later, you will need to approve or reject the request!
		</Text>
	</View>
);
