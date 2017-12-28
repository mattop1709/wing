import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Circle from "react-native-vector-icons/Entypo";
import Check from "react-native-vector-icons/MaterialCommunityIcons";
import Cancel from "react-native-vector-icons/MaterialIcons";

class TrackingBar extends React.Component {
	render() {
		const { status } = this.props;
		return (
			<View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "center",
						paddingVertical: 8
					}}
				>
					{status === "Submit" ||
					status === "Nominate" ||
					status === "Endorse" ||
					status === "Approve" ? (
						<Check
							name="check-circle"
							size={24}
							color="green"
							style={{ paddingHorizontal: 4 }}
						/>
					) : (
						<Circle
							name="circle"
							size={24}
							color="grey"
							style={{ paddingHorizontal: 4 }}
						/>
					)}

					<View style={{ flex: 0.25 }}>
						{status === "Nominate" ||
						status === "Endorse" ||
						status === "Approve" ? (
							<View
								style={{
									alignItems: "center",
									flex: 0.5,
									borderColor: "green",
									borderBottomWidth: 2
								}}
							/>
						) : (
							<View
								style={{
									alignItems: "center",
									flex: 0.5,
									borderColor: "grey",
									borderBottomWidth: 2
								}}
							/>
						)}
						<View
							style={{
								alignItems: "center",
								flex: 0.5
							}}
						/>
					</View>

					{status === "Nominate" ||
					status === "Endorse" ||
					status === "Approve" ? (
						<Check
							name="check-circle"
							size={24}
							color="green"
							style={{ paddingHorizontal: 4 }}
						/>
					) : (
						<Circle
							name="circle"
							size={24}
							color="grey"
							style={{ paddingHorizontal: 4 }}
						/>
					)}

					<View style={{ flex: 0.25 }}>
						{status === "Endorse" || status === "Approve" ? (
							<View
								style={{
									alignItems: "center",
									flex: 0.5,
									borderColor: "green",
									borderBottomWidth: 2
								}}
							/>
						) : (
							<View
								style={{
									alignItems: "center",
									flex: 0.5,
									borderColor: "grey",
									borderBottomWidth: 2
								}}
							/>
						)}
						<View
							style={{
								alignItems: "center",
								flex: 0.5
							}}
						/>
					</View>

					{status === "Endorse" || status === "Approve" ? (
						<Check
							name="check-circle"
							size={24}
							color="green"
							style={{ paddingHorizontal: 4 }}
						/>
					) : (
						<Circle
							name="circle"
							size={24}
							color="grey"
							style={{ paddingHorizontal: 4 }}
						/>
					)}

					<View style={{ flex: 0.25 }}>
						{status === "Approve" ? (
							<View
								style={{
									alignItems: "center",
									flex: 0.5,
									borderColor: "green",
									borderBottomWidth: 2
								}}
							/>
						) : (
							<View
								style={{
									alignItems: "center",
									flex: 0.5,
									borderColor: "grey",
									borderBottomWidth: 2
								}}
							/>
						)}
						<View
							style={{
								alignItems: "center",
								flex: 0.5
							}}
						/>
					</View>

					{status === "Approve" ? (
						<Check
							name="check-circle"
							size={24}
							color="green"
							style={{ paddingHorizontal: 4 }}
						/>
					) : (
						<Circle
							name="circle"
							size={24}
							color="grey"
							style={{ paddingHorizontal: 4 }}
						/>
					)}
				</View>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-around",
						paddingBottom: 16
					}}
				>
					{status === "Submit" ||
					status === "Nominate" ||
					status === "Endorse" ||
					status === "Approve" ? (
						<Text style={{ fontSize: 10, color: "green" }}>Submission</Text>
					) : (
						<Text style={{ fontSize: 10, color: "grey" }}>Submission</Text>
					)}
					{status === "Nominate" ||
					status === "Endorse" ||
					status === "Approve" ? (
						<Text style={{ fontSize: 10, color: "green" }}>Nomination</Text>
					) : (
						<Text style={{ fontSize: 10, color: "grey" }}>Nomination</Text>
					)}
					{status === "Endorse" || status === "Approve" ? (
						<Text style={{ fontSize: 10, color: "green" }}>Endorsement</Text>
					) : (
						<Text style={{ fontSize: 10, color: "grey" }}>Endorsement</Text>
					)}
					{status === "Approve" ? (
						<Text style={{ fontSize: 10, color: "green" }}>Approval</Text>
					) : (
						<Text style={{ fontSize: 10, color: "grey" }}>Approval</Text>
					)}
				</View>
			</View>
		);
	}
}

export default TrackingBar;
