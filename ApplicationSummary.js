import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class ApplicationSummary extends Component {
  render() {
    let fontColor;
    if (this.props.orange) {
      fontColor = "#e57202";
    } else {
      fontColor = "black";
    }
    return (
      <View id={"overall"}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ fontSize: 20, color: fontColor }}>
            {this.props.numOfRequest}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 10, color: fontColor }}>
            {this.props.label}
          </Text>
        </View>
      </View>
    );
  }
}
