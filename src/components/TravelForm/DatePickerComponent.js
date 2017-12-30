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
import DatePicker from "react-native-datepicker";

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

export default TravelFormComponentDate;
