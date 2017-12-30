import React from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableOpacity,
	ScrollView,
	KeyboardAvoidingView,
	Alert
} from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import NavigationBar from "react-native-navbar";

import FormBar from "../Bar/FormBar";
import TextInputComponent from "./TextInputComponent";

class CostForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			costCategory: "",
			costText: "",
			budgetText: "",
			costCentreText: ""
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
		let costCategory = [
			{
				value: "Cost Centre"
			},
			{
				value: "Sponsorship (EEIU)"
			}
		];
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
					onPress={() => navigate("ApprovalForm", { edit: false })}
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
					<FormBar cost={true} />
					<View style={styles.bodyContainer}>
						<Text style={styles.textStyle}>Cost</Text>
						<View style={styles.textInputBox}>
							<View style={{ justifyContent: "center" }}>
								<Text style={styles.textStyle}>RM</Text>
							</View>
							<TextInputComponent
								value={this.state.costValue}
								caption="State your cost"
								onChangeText={costValue =>
									this.setState({ costText: costValue })
								}
							/>
						</View>

						<Text style={styles.textStyle}>Budget</Text>
						<View style={styles.textInputBox}>
							<View style={{ justifyContent: "center" }}>
								<Text style={styles.textStyle}>RM</Text>
							</View>
							<TextInputComponent
								value={this.state.budgetValue}
								caption="State your budget.."
								onChangeText={budgetValue =>
									this.setState({ budgetText: budgetValue })
								}
							/>
						</View>

						<View style={{ paddingBottom: 24 }}>
							<Text style={styles.textStyle}>Cost Category</Text>
							<Dropdown
								value=""
								placeholder="e.g. TM Sponsorship"
								labelHeight={0}
								label=""
								data={costCategory}
								onChangeText={value => this.props.setCostCategory(value)}
							/>
						</View>

						<Text style={styles.textStyle}>Cost Centre</Text>
						<View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
							<TextInputComponent
								value={this.state.costCentreText}
								caption="e.g. BMCE02"
								onChangeText={budgetValue =>
									this.setState({ budgetText: budgetValue })
								}
							/>
						</View>
					</View>
				</ScrollView>
				{button}
			</KeyboardAvoidingView>
		);
	}
}

export default CostForm;

const styles = StyleSheet.create({
	bodyContainer: {
		backgroundColor: "#ffffff",
		padding: 16,
		marginHorizontal: 16,
		marginVertical: 16,
		borderRadius: 4
	},
	textInputBox: {
		flexDirection: "row",
		borderColor: "#c4c4c4",
		borderBottomWidth: 1,
		marginBottom: 24
	},
	nextButton: {
		backgroundColor: "#ee7202",
		justifyContent: "center",
		flexDirection: "row",
		padding: 16,
		marginHorizontal: 16,
		marginVertical: 16,
		borderRadius: 100
	},
	textStyle: {
		fontSize: 12,
		paddingBottom: 8
	}
});
