import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import Tabs from "./Tabs";
import Menu from "react-native-vector-icons/Ionicons";

import ProfileForm from "../components/ProfileForm";
import TravelForm from "../components/TravelForm";
import CostForm from "../components/CostForm";
import ApprovalForm from "../components/ApprovalForm";
import SubmitForm from "../components/SubmitForm";
import AddFriends from "../components/AddFriends";
import TaskStatus from "../components/TaskStatus";
import RequestStatus from "../components/RequestStatus";
import Comments from "../components/Comments";
import CommentsTask from "../components/CommentsTask";
import GuidelineHome from "../components/Guideline/GuidelineHome";
import GuidelineContent from "../components/Guideline";
import ActivityLog from "../components/Activity";

const Stack = StackNavigator({
	Tabs: {
		screen: Tabs,
		navigationOptions: ({ navigation }) => ({
			// header: null
			headerStyle: {
				backgroundColor: "#ff954f"
			},
			headerTitle: "Wings",
			headerTitleStyle: {
				color: "white"
			},
			headerLeft: (
				<TouchableOpacity
					onPress={() => navigation.navigate("DrawerToggle")}
					style={{ paddingLeft: 16 }}
				>
					<Menu name="ios-menu" size={32} color="#ffffff" />
				</TouchableOpacity>
			)
		})
	},
	ProfileForm: {
		screen: ProfileForm,
		navigationOptions: ({ navigation }) => ({
			header: null
		})
	},
	AddFriends: {
		screen: AddFriends,
		navigationOptions: ({ navigation }) => ({
			header: null
		})
	},
	CostForm: {
		screen: CostForm,
		navigationOptions: ({ navigation }) => ({
			header: null
		})
	},
	ApprovalForm: {
		screen: ApprovalForm,
		navigationOptions: ({ navigation }) => ({
			header: null
		})
	},
	SubmitForm: {
		screen: SubmitForm,
		navigationOptions: ({ navigation }) => ({
			header: null
		})
	},
	Comments: {
		screen: Comments,
		navigationOptions: ({ navigation }) => ({
			header: null
		})
	},
	CommentsTask: {
		screen: CommentsTask,
		navigationOptions: ({ navigation }) => ({
			header: null
		})
	},
	TaskStatus: {
		screen: TaskStatus,
		navigationOptions: ({ navigation }) => ({
			header: null
		})
	},
	RequestStatus: {
		screen: RequestStatus,
		navigationOptions: ({ navigation }) => ({
			header: null
		})
	},
	GuidelineHome: {
		screen: GuidelineHome,
		navigationOptions: ({ navigation }) => ({
			headerStyle: {
				backgroundColor: "#ff954f"
			},
			headerTitle: "Guideline",
			headerTitleStyle: {
				color: "white"
			},
			headerLeft: (
				<TouchableOpacity
					onPress={() => navigation.navigate("DrawerToggle")}
					style={{ paddingLeft: 16 }}
				>
					<Menu name="ios-menu" size={32} color="#ffffff" />
				</TouchableOpacity>
			)
		})
	},
	GuidelineContent: {
		screen: GuidelineContent,
		navigationOptions: ({ navigation }) => ({
			header: null
		})
	},
	TravelForm: {
		screen: TravelForm,
		navigationOptions: ({ navigation }) => ({
			header: null
		})
	},
	ActivityLog: {
		screen: ActivityLog,
		navigationOptions: ({ navigation }) => ({
			headerStyle: {
				backgroundColor: "#ff954f"
			},
			headerTitle: "ActivityLog",
			headerTitleStyle: {
				color: "white"
			},
			headerLeft: (
				<TouchableOpacity
					onPress={() => navigation.navigate("DrawerToggle")}
					style={{ paddingLeft: 16 }}
				>
					<Menu name="ios-menu" size={32} color="#ffffff" />
				</TouchableOpacity>
			)
		})
	}
});

export default Stack;
