import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import DatePicker from "react-native-datepicker";
import { Dropdown } from "react-native-material-dropdown";
import Icon1 from "react-native-vector-icons/Ionicons";

export default class CostFrom extends Component {
  render() {
    let costCategory = [
      {
        value: "TM Sponsorship"
      },
      {
        value: "External Sponsorship"
      }
    ];
    return (
      <View id="overall" style={{ flex: 1, backgroundColor: "white" }}>
        <View
          id="header"
          style={{
            marginTop: 18,
            height: "8%",
            backgroundColor: "#E57202",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row"
          }}
        >
          <TouchableOpacity style={{ paddingLeft: 5 }}>
            <Icon name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 15,
              color: "white",
              marginRight: 30
            }}
          >
            {" "}
            REQUEST{" "}
          </Text>
          <View />
        </View>

        <View
          id="body"
          style={{
            backgroundColor: "#E6E2E1",
            height: "81%",
            width: "100%",
            alignItems: "center"
          }}
        >
          <View
            id="progressBar"
            style={{
              width: "90%",
              height: "10%",
              borderRadius: 7,
              marginVertical: 10,
              backgroundColor: "white",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10
            }}
          >
            <View style={styles.progressBarLabel}>
              <Text style={{ fontSize: 10 }}> Profile </Text>
            </View>
            <View style={styles.progressBarLabel}>
              <Text style={{ fontSize: 10 }}> Travel </Text>
            </View>
            <View
              style={{
                borderBottomWidth: 3,
                borderColor: "#00bb00",
                flex: 0.2,
                height: 20,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ color: "#00bb00", fontSize: 10 }}> Cost </Text>
            </View>
            <View style={styles.progressBarLabel}>
              <Text style={{ fontSize: 10 }}> Approver </Text>
            </View>
          </View>

          <View
            id="ProfileForm"
            style={{
              width: "90%",
              height: "60%",
              borderRadius: 7,
              backgroundColor: "white"
            }}
          >
            <View style={{ height: "25%" }}>
              <Text style={styles.fieldTitle}> Estimated Cost </Text>
              <View style={styles.inputField}>
                <Text style={styles.unitLabel}> RM </Text>
                <View style={styles.styleTextInput}>
                  <TextInput
                    placeholderTextColor={"#c4c4c4"}
                    placeholder={"State cost incur during this travel"}
                    underlineColorAndroid={"transparent"}
                    style={{ height: 30, fontSize: 12 }}
                  />
                </View>
              </View>
            </View>
            <View style={{ height: "25%" }}>
              <Text style={styles.fieldTitle}> Budget </Text>
              <View style={styles.inputField}>
                <Text style={styles.unitLabel}> RM </Text>
                <View style={styles.styleTextInput}>
                  <TextInput
                    placeholderTextColor={"#c4c4c4"}
                    placeholder={"State your budget for this travel"}
                    underlineColorAndroid={"transparent"}
                    style={{ height: 30, fontSize: 12 }}
                  />
                </View>
              </View>
            </View>
            <View style={{ height: "25%" }}>
              <Text style={styles.fieldTitle}> Cost Centre </Text>
              <View
                style={{
                  borderBottomWidth: 1,
                  marginLeft: 15,
                  borderColor: "#c4c4c4",
                  width: "85%"
                }}
              >
                <TextInput
                  placeholderTextColor={"#c4c4c4"}
                  placeholder={"State the cost centre to be charged"}
                  underlineColorAndroid={"transparent"}
                  style={{ height: 30, fontSize: 12 }}
                />
              </View>
            </View>
            <View style={{ height: "25%" }}>
              <Text style={styles.fieldTitle}> Cost Category </Text>
              <View
                style={{
                  width: "92%",
                  marginLeft: 15,
                  justifyContent: "center",
                  paddingRight: 20
                }}
              >
                <Dropdown
                  label=""
                  placeholder="State the sponsor for this travel"
                  fontSize={12}
                  labelHeight={5}
                  data={costCategory}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              marginTop: 10,
              borderRadius: 30,
              backgroundColor: "#E57202",
              width: "75%",
              height: "9%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "white" }}> NEXT </Text>
          </TouchableOpacity>
        </View>
        <View
          id="footer"
          style={{
            backgroundColor: "white",
            height: "11%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            paddingBottom: 20
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: 50,
              paddingTop: 5
            }}
          >
            <Icon1 name="ios-home-outline" size={26} color="black" />
            <Text style={{ fontSize: 12 }}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center", paddingTop: 5 }}>
            <Icon1 name="ios-jet" size={26} color="orange" />
            <Text style={{ fontSize: 12, color: "orange" }}>Request</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ paddingRight: 50, alignItems: "center", paddingTop: 5 }}
          >
            <Icon1 name="ios-paper-outline" size={26} color="black" />
            <Text style={{ fontSize: 12 }}>Approval</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fieldTitle: {
    width: "90%",
    fontWeight: "bold",
    fontSize: 12,
    paddingHorizontal: 10,
    marginTop: 10,
    height: "30%"
  },
  inputField: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12
  },
  unitLabel: {
    width: "11%",
    paddingTop: 6,
    height: "95%",
    fontSize: 12
  },
  styleTextInput: {
    borderBottomWidth: 1,
    borderColor: "#c4c4c4",
    width: "85%"
  },
  progressBarLabel: {
    borderBottomWidth: 2,
    flex: 0.2,
    height: 20,
    alignItems: "center",
    justifyContent: "center"
  }
});
