import React from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	ScrollView,
	TouchableOpacity,
	FlatList
} from "react-native";
import Send from "react-native-vector-icons/MaterialIcons";
import NavigationBar from "react-native-navbar";

class ListSingle extends React.Component {
	render() {
		const {
			staffName,
			staffDivision,
			state,
			goBack,
			addNominator,
			addNominator2,
			addEndorser,
			addApprover,
			addFriends
		} = this.props;
		return (
			<TouchableOpacity
				onPress={() => {
					if (state.params.nominator1 == true) {
						addNominator(staffName);
					} else if (state.params.nominator2 == true) {
						addNominator2(staffName);
					} else if (state.params.endorser == true) {
						addEndorser(staffName);
					} else if (state.params.approver == true) {
						addApprover(staffName);
					} else addFriends(staffName, staffDivision);
					goBack();
				}}
				style={styles.contactBox}
			>
				<Text style={{ paddingBottom: 4, fontSize: 16, fontWeight: "bold" }}>
					{staffName}
				</Text>
				<Text>{staffDivision}</Text>
			</TouchableOpacity>
		);
	}
}

class AddPerson extends React.Component {
	constructor(props) {
		super(props);
		this.state = { displayedFriends: {} };
		this.handleChange = this.handleChange.bind(this);
	}
	componentDidMount() {
		this.setState({ displayedFriends: this.props.add });
	}
	componentWillReceiveProps(nextProps) {
		this.setState({ displayedFriends: nextProps.add });
	}
	handleChange(text) {
		const lowerText = text.toLowerCase();
		const searchFriends = this.props.add.filter(friend => {
			return (
				friend.staffName.toLowerCase().includes(lowerText) ||
				(typeof friend.staffDivision == "string" &&
					friend.staffDivision.toLowerCase().includes(lowerText))
			);
		});
		this.setState({ displayedFriends: searchFriends });
	}
	render() {
		const { goBack, state } = this.props.navigation;
		const {
			add,
			addNominator,
			addNominator2,
			addEndorser,
			addApprover,
			addFriends
		} = this.props;
		const { displayedFriends } = this.state;
		return (
			<View style={{ flex: 1, backgroundColor: "#ffffff" }}>
				<NavigationBar
					statusBar={{ showAnimation: "fade" }}
					style={{ borderColor: "#f27178", borderBottomWidth: 1 }}
					title={{ title: "Add Friends" }}
					leftButton={{
						title: "Back",
						handler: () => {
							goBack();
						}
					}}
				/>

				<View style={styles.searchBarContainer}>
					<View style={styles.searchIconBox}>
						<Send name="search" size={24} color="#000000" />
					</View>
					<TextInput
						style={styles.textInputBox}
						placeholder="Type name here.."
						clearButtonMode="always"
						underlineColorAndroid="rgba(0,0,0,0)"
						onChangeText={text => this.handleChange(text)}
					/>
				</View>

				<ScrollView style={styles.friendListContainer}>
					<FlatList
						data={displayedFriends}
						keyExtractor={(item, index) => item.id}
						renderItem={({ item }) => (
							<ListSingle
								addNominator={addNominator}
								addNominator2={addNominator2}
								addEndorser={addEndorser}
								addApprover={addApprover}
								addFriends={addFriends}
								staffName={item.staffName}
								staffDivision={item.staffDivision}
								goBack={goBack}
								state={state}
							/>
						)}
					/>
				</ScrollView>
			</View>
		);
	}
}

export default AddPerson;

const styles = StyleSheet.create({
	searchBarContainer: {
		flexDirection: "row",
		borderWidth: 1,
		borderColor: "#c4c4c4",
		paddingVertical: 8,
		marginHorizontal: 16,
		borderRadius: 100,
		marginVertical: 8
	},
	textInputBox: {
		flex: 0.9,
		paddingHorizontal: 8,
		fontSize: 14,
		color: "#000000"
	},
	searchIconBox: {
		flex: 0.1,
		justifyContent: "center",
		alignItems: "flex-end"
	},
	friendListContainer: {
		flex: 1,
		marginHorizontal: 8
	},
	contactBox: {
		paddingHorizontal: 16,
		paddingVertical: 16,
		borderBottomWidth: 1,
		borderColor: "#c4c4c4"
	}
});
