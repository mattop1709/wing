import React from "react";
import {
	StyleSheet,
	Text,
	View,
	KeyboardAvoidingView,
	TextInput,
	TouchableOpacity,
	ScrollView,
	Alert
} from "react-native";
import NavigationBar from "react-native-navbar";

import FormBar from "../Bar/FormBar";
import TravelFormComponentDate from "./DatePickerComponent";
import TextInputComponent from "./TextInputComponent";

class TravelForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dateFrom: "",
			dateUntil: "",
			destinationText: "",
			travelText: "",
			justificationText: "Provide justification for your travel...",
			height: 0,
			edited: false
		};
	}
	handlePress(navigate, state, goBack) {
		if (state.params.edit !== true) {
			Alert.alert("Confirm to Exit?", "Request will be saved as Draft", [
				{
					text: "No",
					style: "destructive"
				},
				{
					text: "Yes",
					onPress: () => navigate("Home"),
					style: "default"
				}
			]);
		} else navigateTo = goBack();
	}

	render() {
		const { navigate, state, goBack } = this.props.navigation;
		const status = state.params.edit == true ? "Back" : "Exit";
		const leftButtonConfig = {
			title: status,
			handler: () => {
				this.handlePress(navigate, state, goBack);
			}
		};
		const button =
			state.params.edit == true ? null : (
				<TouchableOpacity
					onPress={() => navigate("CostForm", { edit: false })}
					style={styles.nextButton}
				>
					<Text>NEXT</Text>
				</TouchableOpacity>
			);
		return (
			<KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
				<NavigationBar
					style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}
					title={{ title: "New Request" }}
					leftButton={leftButtonConfig}
				/>
				<ScrollView style={{ flex: 1 }}>
					<FormBar travel={true} />
					<View style={styles.bodyContainer}>
						<Text style={styles.textStyle}>Destination</Text>
						<View style={styles.textInputBox}>
							<TextInputComponent
								value={this.state.destinationText}
								caption="e.g. Jakarta, Indonesia"
								onChangeText={destinationText =>
									this.setState({ destinationText: destinationText })
								}
							/>
						</View>
						<Text style={styles.textStyle}>Type</Text>
						<View style={styles.textInputBox}>
							<TextInputComponent
								value={this.state.travelText}
								caption="e.g. UI/ UX Conference"
								onChangeText={travelText =>
									this.setState({ travelText: travelText })
								}
							/>
						</View>
						<View style={styles.datePickerBox}>
							<View style={styles.datePickerStyle}>
								<Text style={styles.textStyle}>Travel from</Text>
								<TravelFormComponentDate
									value={this.state.dateFrom}
									onDateChange={date => this.setState({ dateFrom: date })}
								/>
							</View>
							<View style={styles.datePickerStyle}>
								<Text style={styles.textStyle}>Travel until</Text>
								<TravelFormComponentDate
									value={this.state.dateUntil}
									onDateChange={date => this.setState({ dateUntil: date })}
								/>
							</View>
						</View>

						<View style={{ paddingBottom: 8 }}>
							<Text style={styles.textStyle}>Justification</Text>
							<TextInput
								placeholder={this.state.justificationText}
								multiline={true}
								underlineColorAndroid={"transparent"}
								onChangeText={justificationText =>
									this.setState({ justificationText: justificationText })
								}
								onContentSizeChange={event => {
									this.setState({
										height: event.nativeEvent.contentSize.height
									});
								}}
								style={[
									{
										borderBottomWidth: 0.5,
										borderColor: "#c4c4c4"
									},
									{
										height: Math.max(35, this.state.height)
									}
								]}
							/>
						</View>
					</View>
				</ScrollView>
				{button}
			</KeyboardAvoidingView>
		);
	}
}

export default TravelForm;

const styles = StyleSheet.create({
	bodyContainer: {
		backgroundColor: "#ffffff",
		padding: 16,
		marginHorizontal: 16,
		marginVertical: 16,
		borderRadius: 4
	},
	textInputBox: {
		borderColor: "#c4c4c4",
		borderBottomWidth: 0.5,
		marginBottom: 24
	},
	datePickerBox: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingBottom: 24
	},
	datePickerStyle: {
		flex: 0.45,
		paddingBottom: 8,
		borderBottomWidth: 0.5,
		borderColor: "#c4c4c4"
	},
	nextButton: {
		backgroundColor: "#ee7202",
		justifyContent: "center",
		flexDirection: "row",
		paddingVertical: 16,
		marginHorizontal: 16,
		marginVertical: 16,
		borderRadius: 100
	},
	textStyle: {
		fontSize: 12,
		paddingBottom: 8
	}
});
