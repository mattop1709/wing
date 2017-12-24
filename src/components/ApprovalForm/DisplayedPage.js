import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	ScrollView,
	KeyboardAvoidingView,
	Alert
} from "react-native";
import Next from "react-native-vector-icons/Entypo";
import { Dropdown } from "react-native-material-dropdown";
import Icon from "react-native-vector-icons/EvilIcons";
import NavigationBar from "react-native-navbar";

const DisplayedPage = ({ navigate, page, approverDetails }) => {
	let screen;
	let nominator1Name;
	let nominator2Name;
	let endorserName;
	let approverName;
	switch (page) {
		case "AGM and below":
			screen = "AddFriends";
			nominator1Name = "Direct Report to a GLT Member";
			nominator2Name = "Immediate Superior";
			endorserName = "Head of Finance/ Business Controllers";
			approverName = "GLT Member";
			break;
		case "GLT Members":
			screen = "AddFriends";
			nominator1Name = "GLT Member";
			nominator2Name = "None";
			endorserName = "GCFO";
			approverName = "GCEO";
			break;
		case "Direct report to GLT Members":
			screen = "AddFriends";
			nominator1Name = "GLT Member";
			nominator2Name = "None";
			endorserName = "Head of Finance/ Business Controllers";
			approverName = "(VP: GCEO), (GM and Below: GCFO)";
			break;
		case "Head of Finance/ Business Controllers":
			screen = "AddFriends";
			nominator1Name = "GLT Member";
			nominator2Name = "Immediate Superior";
			endorserName = "VP FCD";
			approverName = "GCFO";
			break;
		case "CEO/President(Subsidiaries)":
			screen = "AddFriends";
			nominator1Name = "Immediate Superior (a GLT Member)";
			nominator2Name = "None";
			endorserName = "GCFO";
			approverName = "GCEO";
			break;
		case "GM/ VP(Subsidiaries)":
			screen = "AddFriends";
			nominator1Name = "CEO/ President";
			nominator2Name = "None";
			endorserName = "Subsidiary's CFO";
			approverName = "GLT Member";
			break;
		case "AGM/ AVP/ Senior Manager & Below(Subsidiaries)":
			screen = "AddFriends";
			nominator1Name = "CEO/ President";
			nominator2Name = "Immediate Superior";
			endorserName = "Subsidiary's CFO";
			approverName = "GLT Member";
			break;
		case "CFO(Subsidiaries)":
			screen = "AddFriends";
			nominator1Name = "CEO/ President";
			nominator2Name = "None";
			endorserName = "VP FCD";
			approverName = "GCFO";
			break;
		default:
			break;
	}
	return (
		<View>
			<View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
				<TouchableOpacity
					onPress={() => navigate(screen, { nominator1: true })}
				>
					<Text style={{ fontSize: 12, paddingVertical: 20, color: "#f44242" }}>
						+ Add Nominator 1 ({nominator1Name})
					</Text>
				</TouchableOpacity>

				<View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
					<Text style={{ color: "grey", paddingBottom: 8 }}>
						{approverDetails.nominatorName}
					</Text>
				</View>
			</View>

			<View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
				<TouchableOpacity
					onPress={() => navigate(screen, { nominator2: true })}
				>
					<Text style={{ fontSize: 12, paddingVertical: 20, color: "#f44242" }}>
						+ Add Nominator 2 ({nominator2Name})
					</Text>
				</TouchableOpacity>

				<View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
					<Text style={{ color: "grey", paddingBottom: 8 }}>
						{approverDetails.nominator2Name}
					</Text>
				</View>
			</View>

			<View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
				<TouchableOpacity onPress={() => navigate(screen, { endorser: true })}>
					<Text style={{ fontSize: 12, paddingVertical: 20, color: "#f44242" }}>
						+ Add Endorser ({endorserName})
					</Text>
				</TouchableOpacity>

				<View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
					<Text style={{ color: "grey", paddingBottom: 8 }}>
						{approverDetails.endorserName}
					</Text>
				</View>
			</View>

			<View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
				<TouchableOpacity onPress={() => navigate(screen, { approver: true })}>
					<Text style={{ fontSize: 12, paddingVertical: 20, color: "#f44242" }}>
						+ Add Approver ({approverName})
					</Text>
				</TouchableOpacity>

				<View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
					<Text style={{ color: "grey", paddingBottom: 8 }}>
						{approverDetails.approverName}
					</Text>
				</View>
			</View>
		</View>
	);
};

export default DisplayedPage;
