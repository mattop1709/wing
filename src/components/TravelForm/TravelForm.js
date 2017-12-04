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
import { Dropdown } from "react-native-material-dropdown";
import DatePicker from "react-native-datepicker";
import Icon from "react-native-vector-icons/EvilIcons";
// import { AutoGrowingTextInput } from "react-native-autogrow-textinput";
import NavigationBar from "react-native-navbar";

// import FormBar from "../Bar/FormBar";

export default class TravelForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: "",
			date2: "",
			text: "e.g. Jakarta, Indonesia",
			caption: "Provide justification for your travel..."
		};
	}
	handleClick(date) {
		this.setState({ date: date });
		this.props.setTravelFrom(date);
	}
	handleClick1(date) {
		this.setState({ date2: date });
		this.props.setTravelUntil(date);
	}
	render() {
		const { navigate, state } = this.props.navigation;
		const { goBack } = this.props.navigation;
		// const { requestForm } = this.props;
		let data = [
			{
				value: "Training"
			},
			{
				value: "Market Research"
			},
			{
				value: "Meetings"
			},
			{
				value: "Conference"
			},
			{
				value: "Site visit"
			},
			{
				value: "Sales visit"
			}
		];
		return (
			<KeyboardAvoidingView
				behavior="padding"
				style={{ flex: 1, backgroundColor: "#ffffff" }}
			>
				{state.params.edit == "true" ? (
					<NavigationBar
						style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}
						title={{ title: "New Request" }}
						leftButton={{
							title: "Back",
							handler: () => goBack()
						}}
					/>
				) : (
					<NavigationBar
						style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}
						title={{ title: "New Request" }}
						leftButton={{
							title: "Exit",
							handler: () =>
								Alert.alert(
									"Confirm to Exit?",
									"Request will be saved as Draft",
									[
										{
											text: "No",
											style: "destructive"
										},
										{
											text: "Yes",
											onPress: () => navigate("Request"),
											style: "default"
										}
									]
								)
						}}
					/>
				)}

				{state.params.edit == "true" ? null : (
					<View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
						<Text style={{ fontSize: 14, fontWeight: "bold" }}>
							Step 2: Travel Information
						</Text>
					</View>
				)}
				<FormBar />

				<ScrollView style={{ flex: 1 }}>
					<View
						style={{ paddingHorizontal: 16, paddingBottom: 16, paddingTop: 24 }}
					>
						<Text style={{ fontSize: 12, paddingBottom: 8 }}>Destination</Text>
						<View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
							<TravelFormComponentTextInput
								value={this.state.text}
								onChangeText={text => this.props.setDestination(text)}
								multiline={false}
							/>
						</View>
					</View>

					<View style={{ paddingHorizontal: 16, paddingBottom: 8 }}>
						<Text style={{ fontSize: 12, paddingVertical: 8 }}>Type</Text>
						<View style={{ borderColor: "#c4c4c4" }}>
							<Dropdown
								placeholder="e.g. Training"
								data={data}
								onChangeText={value => this.props.setTravelType(value)}
							/>
						</View>
					</View>

					<View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
						<Text style={{ fontSize: 12, paddingVertical: 16 }}>From</Text>
						<TravelFormComponentDate
							value={this.state.date}
							onDateChange={date => this.handleClick(date)}
						/>
					</View>

					<View style={{ paddingHorizontal: 16, paddingBottom: 24 }}>
						<Text style={{ fontSize: 12, paddingVertical: 16 }}>Until</Text>
						<TravelFormComponentDate
							value={this.state.date2}
							onDateChange={date => this.handleClick1(date)}
						/>
					</View>

					<View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
						<Text style={{ fontSize: 12 }}>Justification for Travelling</Text>
						<TravelFormComponentTextInput
							value={this.state.caption}
							onChangeText={caption => this.props.setJustificationText(caption)}
							multiline={true}
							numberofLines={5}
							heightForm={100}
						/>
					</View>
				</ScrollView>
				{state.params.edit == "true" ? null : (
					<View
						style={{
							flexDirection: "row",
							paddingVertical: 4,
							justifyContent: "center"
						}}
					>
						<TouchableOpacity
							onPress={() => goBack()}
							style={{
								alignItems: "center",
								marginRight: 16,
								borderRadius: 100
							}}
						>
							<Icon name="chevron-left" size={32} color="#000000" />
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => navigate("CostForm", { edit: "false" })}
							style={{
								alignItems: "center",
								borderRadius: 100
							}}
						>
							<Icon name="chevron-right" size={32} color="#000000" />
						</TouchableOpacity>
					</View>
				)}
			</KeyboardAvoidingView>
		);
	}
}

const FormBar = () => (
	<View
		style={{
			flexDirection: "row",
			justifyContent: "space-around",
			paddingTop: 8,
			borderTopWidth: 1,
			borderBottomWidth: 1,
			borderColor: "#c4c4c4"
		}}
	>
		<View
			style={{
				flexDirection: "row",
				paddingBottom: 4,
				flex: 0.2,
				justifyContent: "center"
			}}
		>
			<View style={{ justifyContent: "center", paddingHorizontal: 2 }}>
				<Icon name="user" size={24} color="#000000" />
			</View>
			<View style={{ justifyContent: "center" }}>
				<Text style={{ fontSize: 12 }}>One</Text>
			</View>
		</View>
		<View
			style={{
				flexDirection: "row",
				borderBottomWidth: 2,
				borderColor: "#f27178",
				paddingBottom: 4,
				flex: 0.2,
				justifyContent: "center"
			}}
		>
			<View style={{ justifyContent: "center", paddingHorizontal: 2 }}>
				<Icon name="location" size={24} color="#f27178" />
			</View>
			<View style={{ justifyContent: "center" }}>
				<Text style={{ fontSize: 12, color: "#f27178" }}>Two</Text>
			</View>
		</View>
		<View
			style={{
				flexDirection: "row",
				paddingBottom: 4,
				flex: 0.2,
				justifyContent: "center"
			}}
		>
			<View style={{ justifyContent: "center", paddingHorizontal: 2 }}>
				<Icon name="credit-card" size={24} color="#000000" />
			</View>
			<View style={{ justifyContent: "center" }}>
				<Text style={{ fontSize: 12 }}>Three</Text>
			</View>
		</View>
		<View
			style={{
				flexDirection: "row",
				paddingBottom: 4,
				flex: 0.2,
				justifyContent: "center"
			}}
		>
			<View style={{ justifyContent: "center", paddingHorizontal: 2 }}>
				<Icon name="check" size={24} color="#000000" />
			</View>
			<View style={{ justifyContent: "center" }}>
				<Text style={{ fontSize: 12 }}>Four</Text>
			</View>
		</View>
	</View>
);

class TravelFormComponentTextInput extends React.Component {
	render() {
		return (
			<TextInput
				style={{
					fontSize: 16,
					paddingBottom: 8,
					alignItems: "flex-end",
					height: this.props.heightForm
				}}
				placeholder={this.props.value}
				onChangeText={value => this.props.onChangeText(value)}
				clearButtonMode="always"
				underlineColorAndroid="rgba(0,0,0,0)"
				multiline={true}
				numberofLines={5}
				autoGrow={true}
			/>
		);
	}
}

class TravelFormComponentDate extends React.Component {
	render() {
		return (
			<DatePicker
				style={{ width: 200 }}
				date={this.props.value}
				mode="date"
				format="LL"
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
						marginLeft: 36
					}
				}}
				onDateChange={value => this.props.onDateChange(value)}
			/>
		);
	}
}
