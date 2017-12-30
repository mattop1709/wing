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
					onPress={() => null}
					style={{ justifyContent: "center" }}
				>
					<Icon name="minus" color="#000000" size={16} />
				</TouchableOpacity>
			</View>
		);
	}
}

export default OtherTraveller;

const styles = StyleSheet.create({
	otherStaffCardStyle: {
		backgroundColor: "#ffffff",
		flexDirection: "row",
		padding: 16,
		marginHorizontal: 16,
		marginTop: 4,
		borderRadius: 4
	}
});
