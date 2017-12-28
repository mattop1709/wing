import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	ScrollView,
	KeyboardAvoidingView,
	Alert
} from "react-native";
import Next from "react-native-vector-icons/Entypo";
import { Dropdown } from "react-native-material-dropdown";
import Icon from "react-native-vector-icons/EvilIcons";
import NavigationBar from "react-native-navbar";
import DisplayedPage from "./DisplayedPage";

import FormBar from "../Bar/FormBar";

class ApprovalForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { data: null };
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
		const { approverDetails, formDraftId } = this.props;
		let data = [
			{
				value: "AGM and below"
			},
			{
				value: "GLT Members"
			},
			{
				value: "Direct report to GLT Members"
			},
			{
				value: "CEO/President(Subsidiaries)"
			},
			{
				value: "GM/ VP(Subsidiaries)"
			},
			{
				value: "AGM/ AVP/ Senior Manager & Below(Subsidiaries)"
			},
			{
				value: "CFO(Subsidiaries)"
			},
			{
				value: "Head of Finance/ Business Controllers"
			}
		];
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
					onPress={() =>
						navigate("SubmitForm", {
							saved: false,
							formDraftId: `${approverDetails.id}`
						})
					}
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
						<Text style={styles.textStyle}>Your Designation</Text>
						<View style={{ borderColor: "#c4c4c4" }}>
							<Dropdown
								placeholder="e.g. AGM and below"
								labelHeight={0}
								label=""
								data={data}
								onChangeText={value => {
									this.setState({ data: value });
								}}
							/>
						</View>
						<DisplayedPage
							navigate={navigate}
							page={this.state.data}
							approverDetails={approverDetails}
						/>
					</View>
				</ScrollView>
				{button}
			</KeyboardAvoidingView>
		);
	}
}

export default ApprovalForm;

const styles = StyleSheet.create({
	bodyContainer: {
		backgroundColor: "#ffffff",
		padding: 16,
		marginHorizontal: 16,
		marginTop: 16,
		borderRadius: 4
	},
	textStyle: {
		fontSize: 12,
		paddingBottom: 8
	},
	nextButton: {
		backgroundColor: "#ee7202",
		justifyContent: "center",
		flexDirection: "row",
		paddingVertical: 16,
		marginHorizontal: 16,
		marginVertical: 16,
		borderRadius: 100
	}
});

// const FormBar = () => (
// 	<View
// 		style={{
// 			flexDirection: "row",
// 			justifyContent: "space-around",
// 			paddingTop: 8,
// 			borderTopWidth: 1,
// 			borderBottomWidth: 1,
// 			borderColor: "#c4c4c4"
// 		}}
// 	>
// 		<View
// 			style={{
// 				flexDirection: "row",
// 				paddingBottom: 4,
// 				flex: 0.2,
// 				justifyContent: "center"
// 			}}
// 		>
// 			<View style={{ justifyContent: "center", paddingHorizontal: 2 }}>
// 				<Icon name="user" size={24} color="#000000" />
// 			</View>
// 			<View style={{ justifyContent: "center" }}>
// 				<Text style={{ fontSize: 12 }}>One</Text>
// 			</View>
// 		</View>
// 		<View
// 			style={{
// 				flexDirection: "row",
// 				paddingBottom: 4,
// 				flex: 0.2,
// 				justifyContent: "center"
// 			}}
// 		>
// 			<View style={{ justifyContent: "center", paddingHorizontal: 2 }}>
// 				<Icon name="location" size={24} color="#000000" />
// 			</View>
// 			<View style={{ justifyContent: "center" }}>
// 				<Text style={{ fontSize: 12 }}>Two</Text>
// 			</View>
// 		</View>
// 		<View
// 			style={{
// 				flexDirection: "row",
// 				paddingBottom: 4,
// 				flex: 0.2,
// 				justifyContent: "center"
// 			}}
// 		>
// 			<View style={{ justifyContent: "center", paddingHorizontal: 2 }}>
// 				<Icon name="credit-card" size={24} color="#000000" />
// 			</View>
// 			<View style={{ justifyContent: "center" }}>
// 				<Text style={{ fontSize: 12 }}>Three</Text>
// 			</View>
// 		</View>
// 		<View
// 			style={{
// 				flexDirection: "row",
// 				paddingBottom: 4,
// 				borderBottomWidth: 2,
// 				borderColor: "#f27178",
// 				flex: 0.2,
// 				justifyContent: "center"
// 			}}
// 		>
// 			<View style={{ justifyContent: "center", paddingHorizontal: 2 }}>
// 				<Icon name="check" size={24} color="#f27178" />
// 			</View>
// 			<View style={{ justifyContent: "center" }}>
// 				<Text style={{ fontSize: 12, color: "#f27178" }}>Four</Text>
// 			</View>
// 		</View>
// 	</View>
// );
