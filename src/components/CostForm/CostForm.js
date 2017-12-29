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
import Next from "react-native-vector-icons/Entypo";
import { Dropdown } from "react-native-material-dropdown";
import Icon from "react-native-vector-icons/EvilIcons";
import NavigationBar from "react-native-navbar";

import FormBar from "../Bar/FormBar";

class CostForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: "",
			costText: "",
			budgetText: ""
		};
	}
	handleCost(costValue) {
		this.setState({ costText: costValue });
		this.props.setCostValue(costValue);
	}
	handleBudget(budgetValue) {
		this.setState({ budgetText: budgetValue });
		this.props.setBudgetValue(budgetValue);
	}
	handleCostCentre(costCentreText) {
		this.setState({ costCentreText: costCentreText });
		this.props.setCostCentre(costCentreText);
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
		const { requestDetails, formDraftId } = this.props;
		let costCategory = [
			{
				value: "Cost Centre"
			},
			{
				value: "Sponsorship (EEIU)"
			}
		];
		const costEdit = state.params.edit ? `${requestDetails.cost}` : null;
		const budgetEdit = state.params.edit ? `${requestDetails.budget}` : null;
		const costCategoryEdit = state.params.edit
			? `${requestDetails.costCategory}`
			: false;
		const costCentreEdit = state.params.edit
			? `${requestDetails.costCentre}`
			: null;
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
						<View style={{ paddingBottom: 24 }}>
							<Text style={styles.textStyle}>Cost</Text>
							<View style={styles.textInputBox}>
								<View style={{ justifyContent: "center" }}>
									<Text style={styles.textStyle}>RM</Text>
								</View>
								<TextInput
									style={styles.textInputStyle}
									value={costEdit}
									placeholder="State your cost.."
									onChangeText={costValue => this.handleCost(costValue)}
									clearButtonMode="always"
									underlineColorAndroid="rgba(0,0,0,0)"
									keyboardType="numeric"
								/>
							</View>
						</View>
						<View style={{ paddingBottom: 24 }}>
							<Text style={styles.textStyle}>Budget</Text>
							<View style={styles.textInputBox}>
								<View style={{ justifyContent: "center" }}>
									<Text style={styles.textStyle}>RM</Text>
								</View>
								<TextInput
									style={styles.textInputStyle}
									value={budgetEdit}
									placeholder="State your budget.."
									onChangeText={budgetValue => this.handleBudget(budgetValue)}
									clearButtonMode="always"
									underlineColorAndroid="rgba(0,0,0,0)"
									keyboardType="numeric"
								/>
							</View>
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
						<View style={{ paddingBottom: 24 }}>
							<Text style={styles.textStyle}>Cost Centre</Text>
							<View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
								<TextInput
									style={styles.textInputStyle}
									value={costCentreEdit}
									placeholder="e.g. BMCE02"
									onChangeText={costCentreText =>
										this.handleCostCentre(costCentreText)
									}
									clearButtonMode="always"
									underlineColorAndroid="rgba(0,0,0,0)"
								/>
							</View>
						</View>
					</View>
				</ScrollView>
				{button}
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	bodyContainer: {
		backgroundColor: "#ffffff",
		padding: 16,
		marginHorizontal: 16,
		marginTop: 16,
		borderRadius: 4
	},
	textInputBox: {
		flexDirection: "row",
		borderColor: "#c4c4c4",
		borderBottomWidth: 1
	},
	textInputStyle: {
		flex: 1,
		fontSize: 16,
		paddingLeft: 8,
		paddingBottom: 8,
		alignItems: "flex-end",
		justifyContent: "center"
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

export default CostForm;
