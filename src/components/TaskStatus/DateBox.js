import React from "react";
import { StyleSheet, Text, View } from "react-native";

function DateBox({ caption, date }) {
	return (
		<View style={{ flex: 0.4, backgroundColor: "orange" }}>
			<View
				style={{
					backgroundColor: "#ee7202",
					alignItems: "center"
				}}
			>
				<Text style={{ fontSize: 12, paddingVertical: 8 }}>
					{(value = caption)}
				</Text>
			</View>
			<View style={{ paddingVertical: 24, alignItems: "center" }}>
				<Text style={{ fontSize: 16 }}>{(value = date)}</Text>
			</View>
		</View>
	);
}

export default DateBox;
