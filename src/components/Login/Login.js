import React from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableOpacity
} from "react-native";

class LoginScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.logoContainer}>
					<Text>Hi</Text>
				</View>

				<View style={{ flex: 1, backgroundColor: "#ffffff", paddingTop: 8 }}>
					<View style={{ paddingHorizontal: 70 }}>
						<TextInput
							style={styles.staffIdBox}
							placeholder="Staff ID"
							clearButtonMode="always"
							underlineColorAndroid="rgba(0,0,0,0)"
						/>
						<TextInput
							style={styles.staffIdBox}
							placeholder="Password"
							clearButtonMode="always"
							secureTextEntry={true}
						/>

						<TouchableOpacity style={styles.loginBox}>
							<Text style={{ fontSize: 16 }}>Login</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={{ alignItems: "center", paddingBottom: 16 }}>
					<Text>Version 0.1.0</Text>
				</View>
			</View>
		);
	}
}

export default LoginScreen;

const styles = StyleSheet.create({
	logoContainer: {
		flex: 0.25,
		backgroundColor: "red",
		alignItems: "center",
		justifyContent: "center"
	},
	staffIdBox: {
		marginBottom: 8,
		fontSize: 14,
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderColor: "#f27178",
		borderWidth: 1,
		borderRadius: 8
	},
	loginBox: {
		paddingHorizontal: 16,
		paddingVertical: 16,
		backgroundColor: "grey",
		alignItems: "center",
		borderRadius: 8
	}
});
