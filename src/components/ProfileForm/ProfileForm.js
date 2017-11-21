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
	FlatList
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import NavigationBar from "react-native-navbar";

const AdditionalTravellerSingle = ({ staffName, staffDivision }) => (
	<View>
		<Text style={{ fontSize: 16, paddingBottom: 4, color: "#000000" }}>
			{staffName}
		</Text>
		<Text style={{ paddingBottom: 12, color: "#000000" }}>{staffDivision}</Text>
	</View>
);

class ProfileForm extends React.Component {
	render() {
		const { navigate, state } = this.props.navigation;
		const { goBack } = this.props.navigation;
		const { user, requestForm, friend1 } = this.props;
		return (
			<KeyboardAvoidingView
				behavior="padding"
				style={{ flex: 1, backgroundColor: "#ffffff" }}
			>
				{state.params.reedit == 1 ? (
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

				{state.params.reedit == 1 ? null : (
					<View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
						<Text style={{ fontSize: 14, fontWeight: "bold" }}>
							Step 1: Profile Information
						</Text>
					</View>
				)}
				<FormBar />

				<ScrollView style={{ flex: 1 }}>
					<ProfileDetails user={user} />

					<View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
						<Text style={{ fontSize: 12, paddingVertical: 16 }}>
							Other Travellers
						</Text>
						<View>
							<TouchableOpacity
								onPress={() => navigate("AddFriends", { reedit: 0 })}
							>
								<FlatList
									data={friend1}
									keyExtractor={(item, index) => item.id}
									renderItem={({ item }) => (
										<AdditionalTravellerSingle
											staffName={item.staffName}
											staffDivision={item.staffDivision}
										/>
									)}
								/>
								<Text style={styles.addFriendsText}>+ Add Friends</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>

				{state.params.reedit == 1 ? null : (
					<View style={styles.navigationContainer}>
						<View style={styles.leftNavigationBox}>
							<Icon name="chevron-left" size={32} color="#000000" />
						</View>
						<TouchableOpacity
							onPress={() => navigate("TravelForm", { reedit: 0 })}
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

const ProfileDetails = ({ user }) => (
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
				<TextInput
					style={{
						fontSize: 16,
						paddingBottom: 8,
						alignItems: "flex-end"
					}}
					placeholder={user.name}
					underlineColorAndroid="rgba(0,0,0,0)"
					value={user.name}
				/>
			</View>
		</View>

		<View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
			<Text style={{ fontSize: 12, paddingVertical: 16 }}>Division</Text>
			<View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
				<TextInput
					style={{
						fontSize: 16,
						paddingBottom: 8,
						alignItems: "flex-end"
					}}
					placeholder="e.g. Group Finance"
					underlineColorAndroid="rgba(0,0,0,0)"
					value={user.division}
				/>
			</View>
		</View>
	</View>
);

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
		fontSize: 16,
		paddingVertical: 4,
		color: "#f44242"
	}
});
