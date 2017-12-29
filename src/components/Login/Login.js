import React from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableOpacity,
	Image
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

class LoginScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			staffID: "",
			authentication: ""
		};
	}
	userLogin(e) {
		const staffID = this.state.staffID;
		const password = this.state.authentication;
		if (staffID == "TM35438" && password == "123456") {
			return this.props.login(this.state.staffID, this.state.authentication);
		} else alert("Wrong Staff ID or password");
	}
	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.logoContainer}>
					<Image
						source={require("../../image/logo.png")}
						style={{ width: "40%", height: "80%" }}
					/>
				</View>

				<View style={styles.textInputContainer}>
					<View style={styles.staffIdBox}>
						<View style={{ flex: 1 }}>
							<TextInput
								value={this.state.staffID}
								placeholder="Staff ID"
								placeholderCo
								clearButtonMode="always"
								underlineColorAndroid="rgba(0,0,0,0)"
								onChangeText={text => this.setState({ staffID: text })}
							/>
						</View>
						<View style={{ justifyContent: "center" }}>
							<Icon name="user" size={24} color="#ffffff" />
						</View>
					</View>

					<View style={styles.staffIdBox}>
						<View style={{ flex: 1 }}>
							<TextInput
								value={this.state.authentication}
								placeholder="Password"
								clearButtonMode="always"
								underlineColorAndroid="rgba(0,0,0,0)"
								secureTextEntry={true}
								onChangeText={text => this.setState({ authentication: text })}
							/>
						</View>
						<View style={{ justifyContent: "center" }}>
							<Icon name="lock" size={24} color="#ffffff" />
						</View>
					</View>

					<TouchableOpacity
						onPress={e => this.userLogin(e)}
						style={styles.loginBox}
					>
						<Text style={{ fontSize: 16, color: "#ee7202" }}>LOG IN</Text>
					</TouchableOpacity>
				</View>

				<View
					style={{
						backgroundColor: "#ee7202",
						alignItems: "center",
						paddingBottom: 16
					}}
				>
					<Text>Version 0.1.0</Text>
				</View>
			</View>
		);
	}
}

export default LoginScreen;

const styles = StyleSheet.create({
	logoContainer: {
		flex: 0.5,
		backgroundColor: "#ee7202",
		alignItems: "center",
		justifyContent: "flex-end"
	},
	textInputContainer: {
		flex: 1,
		backgroundColor: "#ee7202",
		paddingTop: 24,
		paddingHorizontal: 60
	},
	staffIdBox: {
		marginBottom: 8,
		paddingHorizontal: 16,
		borderColor: "#ffffff",
		borderWidth: 1,
		borderRadius: 100,
		flexDirection: "row"
	},
	loginBox: {
		paddingHorizontal: 16,
		paddingVertical: 16,
		backgroundColor: "#ffffff",
		alignItems: "center",
		borderRadius: 100
	}
});
