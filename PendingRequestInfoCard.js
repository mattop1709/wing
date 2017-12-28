import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import ActionButton from "react-native-action-button";
import ApplicationSummary from "./ApplicationSummary";

export default class InfoCard extends Component {
  render() {
    let statusDotColor, statusBoxColor;
    if (this.props.update) {
      statusDotColor = "#C42439";
    } else {
      statusDotColor = "white";
    }

    return (
      <View style={{ backgroundColor: "#E6E2E1", flex: 1 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            width: "100%"
          }}
        >
          <View style={styles.pendingApprovalCard}>
            <View
              style={[styles.statusColor, { backgroundColor: "#199eb6" }]}
            />
            <View
              style={{
                width: "75%",
                height: "100%",
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  paddingTop: 6,
                  fontWeight: "bold",
                  paddingLeft: 5
                }}
              >
                {this.props.destination}
              </Text>
              <Text style={{ paddingLeft: 5, lineHeight: 25 }}>
                {this.props.eventName}
              </Text>
              <View style={styles.cardIcon}>
                <View
                  style={{
                    flexDirection: "row",
                    width: "28%"
                  }}
                >
                  <Icon name="calendar" size={12} color="black" />
                  <Text style={{ fontSize: 12, paddingLeft: 2 }}>
                    {this.props.duration}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "35%"
                  }}
                >
                  <Icon name="user" size={12} color="black" />
                  <Text
                    style={{
                      fontSize: 12,
                      paddingLeft: 2
                    }}
                  >
                    {this.props.noOfPax}
                  </Text>
                </View>
                <View
                  style={{
                    paddingLeft: 3,
                    flexDirection: "row",
                    width: "45%"
                  }}
                >
                  <Icon name="check" size={12} color="black" />
                  <Text
                    style={{
                      fontSize: 12,
                      paddingLeft: 2
                    }}
                  >
                    {this.props.status}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: 1,
                height: "80%",
                backgroundColor: "grey",
                marginRight: 5
              }}
            />
            <View
              style={{
                width: "22%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Icon2
                name="circle"
                size={13}
                color={statusDotColor}
                style={{ marginLeft: 40 }}
              />
              <Text style={{ fontSize: 24 }}>{this.props.date}</Text>
              <Text style={{ fontSize: 10 }}>{this.props.month}</Text>
              <Text style={{ fontSize: 10 }}>{this.props.year}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionHeaderTitle: {
    paddingTop: 10,
    width: "90%",
    fontSize: 12
  },
  pendingApprovalCard: {
    marginTop: 10,
    width: "90%",
    height: 75,
    flexDirection: "row",
    borderRadius: 7,
    alignItems: "center",
    backgroundColor: "white"
  },
  cardBodyContent: {
    width: "75%",
    height: "100%",
    justifyContent: "center"
  },
  statusColor: {
    height: "100%",
    width: "2%",
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7
  },
  cardIcon: {
    paddingLeft: 5,
    marginTop: 3,
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%"
  }
});
