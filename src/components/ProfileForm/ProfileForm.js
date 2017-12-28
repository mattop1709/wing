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
import Add from "react-native-vector-icons/Entypo";
import NavigationBar from "react-native-navbar";

import FormBar from "../Bar/FormBar";

class OtherTraveller extends React.Component {
	renderText(text, size, type, gap, colour) {
		return (
			<Text
				style={{
					paddingBottom: gap,
					fontSize: size,
					fontWeight: type,
					color: colour
				}}
			>
				{(value = text)}
			</Text>
		);
	}
	render() {
		return (
			<View style={styles.otherStaffCardStyle}>
				<View style={{ justifyContent: "center", paddingHorizontal: 8 }}>
					<Icon name="user" size={32} color="#000000" />
				</View>
				<View style={{ flex: 1, paddingLeft: 8 }}>
					{this.renderText((this.props.text = this.props.staffName))}
					{this.renderText(
						(this.props.text = this.props.staffDivision),
						(this.props.size = 12)
					)}
				</View>
				<TouchableOpacity
					onPress={id => this.props.removeFriends(id)}
					style={{ justifyContent: "center" }}
				>
					<Icon name="minus" color="#000000" size={16} />
				</TouchableOpacity>
			</View>
		);
	}
}

class ProfileForm extends React.Component {
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
	renderText(text, size, type, gap) {
		return (
			<Text
				style={{
					paddingBottom: gap,
					fontSize: size,
					fontWeight: type
				}}
			>
				{(value = text)}
			</Text>
		);
	}
	render() {
		const { navigate, state, goBack } = this.props.navigation;
		const {
			user,
			friendsInformation,
			formDraftId,
			requestDetails,
			removeFriends
		} = this.props;
		const status = state.params.edit == true ? "Back" : "Exit";
		const caption = friendsInformation == "" ? null : "OTHER STAFF";
		const leftButtonConfig = {
			title: [status],
			handler: () => {
				this.handlePress(navigate, state, goBack);
			}
		};
		return (
			<KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
				<NavigationBar
					style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}
					title={{ title: "New Request" }}
					leftButton={leftButtonConfig}
				/>

				<ScrollView style={{ flex: 1 }}>
					<FormBar />
					<View style={styles.userCardStyle}>
						<View style={{ justifyContent: "center" }}>
							<Icon name="user" size={50} color="#000000" />
						</View>
						<View style={{ paddingLeft: 8 }}>
							{this.renderText((this.props.text = user.name))}
							{this.renderText(
								(this.props.text = user.staffID),
								(this.props.size = 12)
							)}
							{this.renderText(
								(this.props.text = user.division),
								(this.props.size = 12)
							)}
						</View>
					</View>
					<View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
						{this.renderText(
							(this.props.text = caption),
							(this.props.size = 12)
						)}
					</View>
					<FlatList
						data={friendsInformation}
						keyExtractor={(item, index) => item.id}
						renderItem={({ item }) => (
							<OtherTraveller
								id={item.id}
								staffName={item.staffName}
								staffDivision={item.staffDivision}
								removeFriends={removeFriends}
							/>
						)}
					/>
					<TouchableOpacity
						onPress={() => navigate("AddFriends", { friends: true })}
						style={styles.addButton}
					>
						{this.renderText((this.props.text = "+ ADD TRAVELLER"))}
					</TouchableOpacity>
				</ScrollView>
				{state.params.edit == true ? null : (
					<TouchableOpacity
						onPress={() => navigate("TravelForm", { edit: false })}
						style={styles.nextButton}
					>
						{this.renderText((this.props.text = "NEXT"))}
					</TouchableOpacity>
				)}
			</KeyboardAvoidingView>
		);
	}
}

export default ProfileForm;

const styles = StyleSheet.create({
	userCardStyle: {
		backgroundColor: "#ffffff",
		flexDirection: "row",
		padding: 16,
		marginHorizontal: 16,
		marginTop: 16,
		borderRadius: 4
	},
	otherStaffCardStyle: {
		backgroundColor: "#ffffff",
		flexDirection: "row",
		padding: 16,
		marginHorizontal: 16,
		marginTop: 4,
		borderRadius: 4
	},
	addButton: {
		backgroundColor: "#dcdcdc",
		justifyContent: "center",
		flexDirection: "row",
		padding: 16,
		marginHorizontal: 16,
		marginTop: 16,
		borderRadius: 4
	},
	nextButton: {
		backgroundColor: "#ee7202",
		justifyContent: "center",
		flexDirection: "row",
		padding: 16,
		marginHorizontal: 16,
		marginVertical: 16,
		borderRadius: 100
	}
});

// <View>
// 	<View
// 		style={{
// 			paddingHorizontal: 16,
// 			paddingBottom: 16,
// 			paddingTop: 24
// 		}}
// 	>
// 		<Text style={{ fontSize: 12, paddingBottom: 16 }}>Name</Text>
// 		<View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
// 			<ProfileFormComponentTextInput value={user.name} />
// 		</View>
// 	</View>
//
// 	<View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
// 		<Text style={{ fontSize: 12, paddingVertical: 16 }}>Division</Text>
// 		<View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
// 			<ProfileFormComponentTextInput value={user.division} />
// 		</View>
// 	</View>
// </View>;

// <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
// 	<Text style={{ fontSize: 12, paddingVertical: 16 }}>
// 		Other Travellers
// 	</Text>
//
// 	<FlatList
// 		data={friendsInformation}
// 		keyExtractor={(item, index) => item.id}
// 		renderItem={({ item }) => (
// 			<AdditionalTravellerSingle
// 				id={item.id}
// 				staffName={item.staffName}
// 				staffDivision={item.staffDivision}
// 				removeFriends={removeFriends}
// 			/>
// 		)}
// 	/>
// 	<TouchableOpacity
// 		style={{ justifyContent: "center" }}
// 		onPress={() => navigate("AddFriends", { friends: true })}
// 	>
// 		<Text style={styles.addFriendsText}>+ Add Friends</Text>
// 	</TouchableOpacity>
// </View>

// navigate("AddFriends", { friends: true })

// <ListView
// 	dataSource={this.state.dataSource}
// 	renderRow={(rowData, sectionID, rowID) => {
// 		const handleDelete = () => {
// 			return this._handleDeleteButtonPress(rowID);
// 		};
// 		return (
// 			<View
// 				style={{
// 					flexDirection: "row",
// 					justifyContent: "space-between",
// 					paddingBottom: 16
// 				}}
// 			>
// 				<View style={{ flex: 0.9 }}>
// 					<Text
// 						style={{
// 							fontSize: 14,
// 							paddingBottom: 4,
// 							color: "#000000"
// 						}}
// 					>
// 						{rowData}
// 					</Text>
// 				</View>
// 				<TouchableOpacity
// 					onPress={handleDelete}
// 					style={{ justifyContent: "center" }}
// 				>
// 					<Icon name="close-o" color="#000000" size={24} />
// 				</TouchableOpacity>
// 			</View>
// 		);
// 	}}
// />
// <View style={{ flex: 1 }}>
// 	<TextInput
// 		placeholder="Type your name"
// 		onChangeText={this._handleTextChange1}
// 		text1={this.state.staffName}
// 	/>
// </View>

// constructor(props) {
// 	super(props);
// 	const ds = new ListView.DataSource({
// 		rowHasChanged: (r1, r2) => r1 !== r2
// 	});
// 	this.state = {
// 		dataSource: ds.cloneWithRows([]),
// 		staffName: ""
// 		// staffDivision: ""
// 	};
// 	this._handleDeleteButtonPress = this._handleDeleteButtonPress.bind(this);
// 	this._handleTextChange1 = this._handleTextChange1.bind(this);
// 	// this._handleTextChange2 = this._handleTextChange2.bind(this);
// }
// _handleSendButtonPress = () => {
// 	const textArray = this.state.dataSource._dataBlob.s1;
// 	textArray.push(this.state.staffName);
// 	this.setState(() => ({
// 		dataSource: this.state.dataSource.cloneWithRows(textArray),
// 		staffName: ""
// 		// staffDivision: ""
// 	}));
// };
// _handleDeleteButtonPress = id => {
// 	this.setState(a => {
// 		const newItem = a.dataSource._dataBlob.s1.filter(
// 			(item, i) => parseInt(id) !== i
// 		);
// 		return {
// 			dataSource: this.state.dataSource.cloneWithRows(newItem)
// 		};
// 	});
// };
// _handleTextChange1 = text1 => {
// 	const staffName = text1;
// 	this.setState(() => ({
// 		staffName
// 	}));
// };
// _handleTextChange2 = text2 => {
// 	const staffDivision = text2;
// 	this.setState(() => ({
// 		staffDivision
// 	}));
// };
// _handleClickAddPerson = AddFriends => {
// 	this.props.navigation.navigate("AddFriends");
// };
