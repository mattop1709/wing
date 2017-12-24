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

class CostForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: "",
			costValue: "",
			budgetValue: ""
		};
	}
	handleCost(costValue) {
		this.setState({ costValue: costValue });
		this.props.setCostValue(costValue);
	}
	handleBudget(budgetValue) {
		this.setState({ budgetValue: budgetValue });
		this.props.setBudgetValue(budgetValue);
	}
	render() {
		const { navigate, state, goBack } = this.props.navigation;
		const { requestDetails, formDraftId } = this.props;
		let data = [
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
		return (
			<KeyboardAvoidingView
				behavior="padding"
				style={{ flex: 1, backgroundColor: "#ffffff" }}
			>
				{state.params.edit == true ? (
					<NavigationBar
						style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}
						title={{ title: "New Request" }}
						leftButton={{
							title: "Back",
							handler: () =>
								navigate("SubmitForm", { formDraftId: `${requestDetails.id}` })
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
				{state.params.edit == true ? null : (
					<View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
						<Text style={{ fontSize: 14, fontWeight: "bold" }}>
							Step 3: Cost Information
						</Text>
					</View>
				)}
				<FormBar />

				<ScrollView style={{ flex: 1 }}>
					<View
						style={{ paddingHorizontal: 16, paddingBottom: 16, paddingTop: 24 }}
					>
						<Text style={{ fontSize: 12, paddingBottom: 16 }}>Cost</Text>
						<View
							style={{
								flexDirection: "row",
								borderColor: "#c4c4c4",
								borderBottomWidth: 1
							}}
						>
							<View style={{ justifyContent: "center" }}>
								<Text style={{ fontSize: 16, paddingBottom: 8 }}>RM</Text>
							</View>
							<TextInput
								style={{
									flex: 1,
									fontSize: 16,
									paddingLeft: 8,
									paddingBottom: 8,
									alignItems: "flex-end",
									justifyContent: "center"
								}}
								value={costEdit}
								placeholder="State your cost.."
								onChangeText={costValue => this.handleCost(costValue)}
								clearButtonMode="always"
								underlineColorAndroid="rgba(0,0,0,0)"
								keyboardType="numeric"
							/>
						</View>
					</View>
					<View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
						<Text style={{ fontSize: 12, paddingVertical: 16 }}>Budget</Text>
						<View
							style={{
								flexDirection: "row",
								borderColor: "#c4c4c4",
								borderBottomWidth: 1
							}}
						>
							<View style={{ justifyContent: "center" }}>
								<Text style={{ fontSize: 16, paddingBottom: 8 }}>RM</Text>
							</View>
							<TextInput
								style={{
									flex: 1,
									fontSize: 16,
									paddingBottom: 8,
									paddingLeft: 8,
									alignItems: "flex-end"
								}}
								value={budgetEdit}
								placeholder="State your budget.."
								onChangeText={budgetValue => this.handleBudget(budgetValue)}
								clearButtonMode="always"
								underlineColorAndroid="rgba(0,0,0,0)"
								keyboardType="numeric"
							/>
						</View>
					</View>

					<View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
						<Text style={{ fontSize: 12, paddingVertical: 16 }}>
							Cost Category
						</Text>
						<View style={{ borderColor: "#c4c4c4" }}>
							<Dropdown
								value={costCategoryEdit}
								placeholder="e.g. TM Sponsorship"
								labelHeight={0}
								label=""
								data={data}
								onChangeText={value => this.props.setCostCategory(value)}
							/>
							{this.state.data === "Sponsorship (EEIU)" && (
								<Text style={{ fontSize: 12, color: "red" }}>
									Required EEIU Approval
								</Text>
							)}
						</View>
					</View>

					<View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
						<Text style={{ fontSize: 12, paddingVertical: 16 }}>
							Cost Centre
						</Text>
						<View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
							<TextInput
								style={{
									fontSize: 16,
									paddingBottom: 8,
									alignItems: "flex-end"
								}}
								value={costCentreEdit}
								placeholder="e.g. BMCE02"
								clearButtonMode="always"
								underlineColorAndroid="rgba(0,0,0,0)"
							/>
						</View>
					</View>
				</ScrollView>

				{state.params.edit == true ? null : (
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
							onPress={() => navigate("ApprovalForm", { edit: false })}
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

export default CostForm;

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
				paddingBottom: 4,
				flex: 0.2,
				justifyContent: "center"
			}}
		>
			<View style={{ justifyContent: "center", paddingHorizontal: 2 }}>
				<Icon name="location" size={24} color="#000000" />
			</View>
			<View style={{ justifyContent: "center" }}>
				<Text style={{ fontSize: 12 }}>Two</Text>
			</View>
		</View>
		<View
			style={{
				flexDirection: "row",
				paddingBottom: 4,
				flex: 0.2,
				justifyContent: "center",
				borderBottomWidth: 2,
				borderColor: "#f27178"
			}}
		>
			<View
				style={{
					justifyContent: "center",
					paddingHorizontal: 2
				}}
			>
				<Icon name="credit-card" size={24} color="#f27178" />
			</View>
			<View style={{ justifyContent: "center" }}>
				<Text style={{ fontSize: 12, color: "#f27178" }}>Three</Text>
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
