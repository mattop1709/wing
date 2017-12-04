import React from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	KeyboardAvoidingView,
	ScrollView,
	TouchableOpacity,
	Alert,
	FlatList,
	ListView
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import NavigationBar from "react-native-navbar";

// import FormBar from "../Bar/FormBar";

class ProfileForm extends React.Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.state = {
			dataSource: ds.cloneWithRows([]),
			staffName: ""
			// staffDivision: ""
		};
		this._handleDeleteButtonPress = this._handleDeleteButtonPress.bind(this);
		this._handleTextChange1 = this._handleTextChange1.bind(this);
		// this._handleTextChange2 = this._handleTextChange2.bind(this);
	}
	_handleSendButtonPress = () => {
		const textArray = this.state.dataSource._dataBlob.s1;
		textArray.push(this.state.staffName);
		this.setState(() => ({
			dataSource: this.state.dataSource.cloneWithRows(textArray),
			staffName: ""
			// staffDivision: ""
		}));
	};
	_handleDeleteButtonPress = id => {
		this.setState(a => {
			const newItem = a.dataSource._dataBlob.s1.filter(
				(item, i) => parseInt(id) !== i
			);
			return {
				dataSource: this.state.dataSource.cloneWithRows(newItem)
			};
		});
	};
	_handleTextChange1 = text1 => {
		const staffName = text1;
		this.setState(() => ({
			staffName
		}));
	};
	// _handleTextChange2 = text2 => {
	// 	const staffDivision = text2;
	// 	this.setState(() => ({
	// 		staffDivision
	// 	}));
	// };
	// _handleClickAddPerson = AddFriends => {
	// 	this.props.navigation.navigate("AddFriends");
	// };
	render() {
		const { navigate, state, goBack } = this.props.navigation;
		const { user, friend1, friendDetails, requestForm } = this.props;
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
											onPress: () => goBack(),
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
							Step 1: Profile Information
						</Text>
					</View>
				)}
				<FormBar />

				<ScrollView style={{ flex: 1 }}>
					<View>
						<View
							style={{
								paddingHorizontal: 16,
								paddingBottom: 16,
								paddingTop: 24
							}}
						>
							<Text style={{ fontSize: 12, paddingBottom: 16 }}>Name</Text>
							<View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
								<ProfileFormComponentTextInput value={user.name} />
							</View>
						</View>

						<View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
							<Text style={{ fontSize: 12, paddingVertical: 16 }}>
								Division
							</Text>
							<View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
								<ProfileFormComponentTextInput value={user.division} />
							</View>
						</View>
					</View>

					<View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
						<Text style={{ fontSize: 12, paddingVertical: 16 }}>
							Other Travellers
						</Text>
						<View>
							<ListView
								dataSource={this.state.dataSource}
								renderRow={(rowData, sectionID, rowID) => {
									const handleDelete = () => {
										return this._handleDeleteButtonPress(rowID);
									};
									return (
										<View
											style={{
												flexDirection: "row",
												justifyContent: "space-between",
												paddingBottom: 16
											}}
										>
											<View style={{ flex: 0.9 }}>
												<Text
													style={{
														fontSize: 14,
														paddingBottom: 4,
														color: "#000000"
													}}
												>
													{rowData}
												</Text>
											</View>
											<TouchableOpacity
												onPress={handleDelete}
												style={{ justifyContent: "center" }}
											>
												<Icon name="close-o" color="#000000" size={24} />
											</TouchableOpacity>
										</View>
									);
								}}
							/>
							<View style={{ flex: 1 }}>
								<TextInput
									placeholder="Type your name"
									onChangeText={this._handleTextChange1}
									text1={this.state.staffName}
								/>
							</View>
							<TouchableOpacity
								style={{ justifyContent: "center" }}
								onPress={this._handleSendButtonPress}
							>
								<Text style={styles.addFriendsText}>+ Add</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>

				{state.params.edit == "true" ? null : (
					<View style={styles.navigationContainer}>
						<View style={styles.leftNavigationBox}>
							<Icon name="chevron-left" size={32} color="#000000" />
						</View>
						<TouchableOpacity
							onPress={() => navigate("TravelForm", { edit: "false" })}
							style={styles.rightNavigationBox}
						>
							<Icon name="chevron-right" size={32} color="#000000" />
						</TouchableOpacity>
					</View>
				)}
			</KeyboardAvoidingView>
		);
	}
}

export default ProfileForm;

class ProfileFormComponentTextInput extends React.Component {
	render() {
		return (
			<TextInput
				style={{
					fontSize: 16,
					paddingBottom: 8,
					alignItems: "flex-end"
				}}
				placeholder={this.props.value}
				clearButtonMode="always"
				underlineColorAndroid="rgba(0,0,0,0)"
			/>
		);
	}
}

const styles = StyleSheet.create({
	formBarContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		paddingTop: 8,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: "#c4c4c4"
	},
	navigationContainer: {
		flexDirection: "row",
		paddingVertical: 4,
		justifyContent: "center"
	},
	leftNavigationBox: {
		alignItems: "center",
		marginRight: 16,
		borderRadius: 100
	},
	rightNavigationBox: {
		alignItems: "center",
		borderRadius: 100
	},
	addFriendsText: {
		fontSize: 14,
		paddingVertical: 4,
		color: "#f44242"
	}
});

// <FlatList
// 	data={friendDetails}
// 	keyExtractor={(item, index) => item.id}
// 	renderItem={({ item }) => (
// 		<AdditionalTravellerSingle
// 			staffName={item.staffName}
// 			staffDivision={item.staffDivision}
// 		/>
// 	)}
// />

// const AdditionalTravellerSingle = ({ staffName, staffDivision }) => (
// 	<View>
// 		<Text style={{ fontSize: 16, paddingBottom: 4, color: "#000000" }}>
// 			{staffName}
// 		</Text>
// 		<Text style={{ paddingBottom: 12, color: "#000000" }}>{staffDivision}</Text>
// 	</View>
// );

const FormBar = () => (
	<View style={styles.formBarContainer}>
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
				<Icon name="user" size={24} color="#f27178" />
			</View>
			<View style={{ justifyContent: "center" }}>
				<Text style={{ fontSize: 12, color: "#f27178" }}>One</Text>
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
