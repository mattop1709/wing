import React from "react";
import { TextInput, StyleSheet } from "react-native";

class TextInputComponent extends React.Component {
	render() {
		return (
			<TextInput
				style={styles.textInputStyle}
				value={this.props.value}
				placeholder={this.props.caption}
				underlineColorAndroid={"transparent"}
				onChangeText={value => this.props.onChangeText(value)}
			/>
		);
	}
}

export default TextInputComponent;

const styles = StyleSheet.create({
	textInputStyle: {
		fontSize: 16,
		paddingBottom: 8,
		alignItems: "flex-end"
	}
});
