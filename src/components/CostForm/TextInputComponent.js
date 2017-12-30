import React from "react";
import { TextInput, StyleSheet } from "react-native";

class TextInputComponent extends React.Component {
	render() {
		return (
			<TextInput
				style={styles.textInputStyle}
				value={this.props.value}
				placeholder={this.props.caption}
				onChangeText={value => this.props.onChangeText(value)}
				clearButtonMode="always"
				underlineColorAndroid="rgba(0,0,0,0)"
				keyboardType="numeric"
			/>
		);
	}
}

export default TextInputComponent;

const styles = StyleSheet.create({
	textInputStyle: {
		flex: 1,
		fontSize: 16,
		paddingLeft: 8,
		paddingBottom: 8,
		alignItems: "flex-end",
		justifyContent: "center"
	}
});
