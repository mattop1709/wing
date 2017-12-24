import React from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerNavigator } from "react-navigation";
import Stack from "./Stack";

import ActivityLog from "../components/Activity";

import DrawerContainer from "./DrawerContainer";

class Home extends React.Component {
	static navigationOptions = {};
}

const Drawer = DrawerNavigator(
	{
		Stack: {
			screen: Stack,
			navigationOptions: {
				drawerLabel: "Home"
			}
		}
	},
	{
		contentComponent: DrawerContainer
	}
);

export default Drawer;
