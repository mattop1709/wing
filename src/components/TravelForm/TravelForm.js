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
import Next from "react-native-vector-icons/Entypo";
// import { Dropdown } from "react-native-material-dropdown";
import DatePicker from "react-native-datepicker";
import Icon from "react-native-vector-icons/EvilIcons";
import NavigationBar from "react-native-navbar";

import FormBar from "../Bar/FormBar";

class TravelFormComponentDate extends React.Component {
	render() {
		return (
			<DatePicker
				style={{ width: 200, borderColor: "transparent" }}
				underlineColorAndroid="transparent"
				date={this.props.value}
				placeholder="Enter date"
				mode="date"
				format="ll"
				minDate="01-01-1990"
				confirmBtnText="Confirm"
				cancelBtnText="Cancel"
				customStyles={{
					dateIcon: {
						position: "absolute",
						left: 0,
						top: 4,
						marginLeft: 0
					},
					dateInput: {
						borderColor: "transparent"
					}
				}}
				onDateChange={value => this.props.onDateChange(value)}
			/>
		);
	}
}

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
	handleDestinationText(destinationText) {
		this.setState({ destinationText: destinationText });
		this.props.setDestination(destinationText);
	}
	handleTravelType(travelText) {
		this.setState({ travelText: travelText });
		this.props.setTravelType(travelText);
	}
	handleDateFrom(date) {
		this.setState({ dateFrom: date });
		this.props.setTravelFrom(date);
	}
	handleDateUntil(date) {
		this.setState({ dateUntil: date });
		this.props.setTravelUntil(date);
	}
	handleJustification(justificationText) {
		this.setState({ justificationText: justificationText });
		this.props.setJustificationText(justificationText);
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
		} else
			navigateTo = navigate("SubmitForm", {
				formDraftId: `${this.props.requestDetails.id}`
			});
	}
	render() {
		const { navigate, state, goBack } = this.props.navigation;
		const { formDraftId, requestDetails } = this.props;
		const destinationEdit = state.params.edit
			? `${requestDetails.destination}`
			: null;
		const travelTypeEdit = state.params.edit
			? `${requestDetails.travelType}`
			: false;
		const dateFromEdit = state.params.edit
			? `${requestDetails.travelFrom}`
			: this.state.dateFrom;
		const dateUntilEdit = state.params.edit
			? `${requestDetails.travelUntil}`
			: this.state.dateUntil;
		const justificationTextEdit = state.params.edit
			? `${requestDetails.justificationText}`
			: null;
		const status = state.params.edit == true ? "Back" : "Exit";
		const leftButtonConfig = {
			title: [status],
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
					<FormBar />
					<View style={styles.bodyContainer}>
						<Text style={styles.textStyle}>Destination</Text>
						<View style={styles.textInputBox}>
							<TextInput
								style={styles.textInputStyle}
								value={destinationEdit}
								placeholder="e.g. Jakarta, Indonesia"
								underlineColorAndroid={"transparent"}
								onChangeText={destinationText =>
									this.handleDestinationText(destinationText)
								}
							/>
						</View>
						<Text style={styles.textStyle}>Type</Text>
						<View style={styles.textInputBox}>
							<TextInput
								style={styles.textInputStyle}
								value={travelTypeEdit}
								placeholder="e.g. UI/ UX Conference"
								underlineColorAndroid={"transparent"}
								onChangeText={travelText => this.handleTravelType(travelText)}
							/>
						</View>

						<View style={styles.datePickerBox}>
							<View style={styles.datePickerStyle}>
								<Text style={styles.textStyle}>Travel from</Text>
								<TravelFormComponentDate
									value={dateFromEdit}
									onDateChange={date => this.handleDateFrom(date)}
								/>
							</View>
							<View style={styles.datePickerStyle}>
								<Text style={styles.textStyle}>Travel until</Text>
								<TravelFormComponentDate
									value={dateUntilEdit}
									onDateChange={date => this.handleDateUntil(date)}
								/>
							</View>
						</View>

						<View style={{ paddingBottom: 8 }}>
							<Text style={styles.textStyle}>Justification</Text>
							<TextInput
								value={justificationTextEdit}
								placeholder={this.state.justificationText}
								multiline={true}
								underlineColorAndroid={"transparent"}
								onChangeText={justificationText =>
									this.handleJustification(justificationText)
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
		marginTop: 16,
		borderRadius: 4
	},
	textInputBox: {
		borderColor: "#c4c4c4",
		borderBottomWidth: 0.5,
		marginBottom: 24
	},
	textInputStyle: {
		fontSize: 16,
		paddingBottom: 8,
		alignItems: "flex-end"
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
