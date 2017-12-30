import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Box({ heading, name }) {
	return (
		<View
			style={{
				paddingBottom: 8,
				marginBottom: 16,
				borderBottomWidth: 0.5,
				borderColor: "#dcdcdc"
			}}
		>
			<Text style={{ fontSize: 12, paddingBottom: 8 }}>
				{(value = heading)}
			</Text>
			<Text>{(value = name)}</Text>
		</View>
	);
}

export default Box;
