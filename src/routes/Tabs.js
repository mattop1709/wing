import React from "react";
import { TabNavigator, TabBarBottom } from "react-navigation";
import { Icon } from "react-native-elements";

import Request from "../components/RequestHome";
import Task from "../components/TaskHome";
import RequestOnly from "../components/RequestOnly";
// import Guideline from "../components/Guideline";

const navOps = iconName => ({ navigation }) => ({
	tabBarIcon: ({ tintColor }) => (
		<Icon name={iconName} size={24} color={tintColor} type="ionicon" />
	)
});

const Tabs = TabNavigator(
	{
		Home: {
			screen: Request,
			navigationOptions: navOps("ios-home-outline")
		},
		Request: {
			screen: RequestOnly,
			navigationOptions: navOps("ios-plane")
		},
		Task: {
			screen: Task,
			navigationOptions: navOps("ios-list-box-outline")
		}
	},
	{
		tabBarPosition: "bottom",
		tabBarComponent: TabBarBottom,
		animationEnabled: false,
		swipeEnabled: false,
		tabBarOptions: {
			style: {
				// borderTopWidth: 0.5,
				// borderTopColor: "white",
				// backgroundColor: "#ff954f"
			},
			activeTintColor: "#ff954f",
			showLabel: true
		}
	}
);

export default Tabs;
