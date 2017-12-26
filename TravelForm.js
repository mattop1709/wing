import React, { Component } from "react";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome";

import DatePicker from "react-native-datepicker";
import { Dropdown } from "react-native-material-dropdown";

var moment = require("moment");

export default class ProfileForm extends Component {
  state = { user: "" };
  updateUser = user => {
    this.setState({ user: user });
  };

  constructor(props) {
    super(props);
    this.state = { dateDepart: new Date(), dateArrive: new Date() };
  }
  render() {
    let travelType = [
      {
        value: "Conference"
      },
      {
        value: "Market Research"
      },
      {
        value: "Meetings"
      },
      {
        value: "Sales Visit"
      },
      {
        value: "Site Visit"
      },
      {
        value: "Training"
      }
    ];

    return (
      <View id={"overall"} style={{ backgroundColor: "white", flex: 1 }}>
        <View
          id="header"
          style={{
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
            height: "84%",
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
              <Text style={{ color: "#00bb00", fontSize: 10 }}> Travel </Text>
            </View>
            <View style={styles.progressBarLabel}>
              <Text style={{ fontSize: 10 }}> Cost </Text>
            </View>
            <View style={styles.progressBarLabel}>
              <Text style={{ fontSize: 10 }}> Approver </Text>
            </View>
          </View>

          <View
            id="ProfileForm"
            style={{
              width: "90%",
              height: "72%",
              borderRadius: 7,
              backgroundColor: "white"
            }}
          >
            <View style={{ height: "25%" }}>
              <Text style={styles.fieldTitle}> Destination </Text>
              <View style={styles.styleTextInput}>
                <TextInput
                  placeholderTextColor={"#c4c4c4"}
                  placeholder={
                    "eg: Please provide justification for your travel"
                  }
                  underlineColorAndroid={"transparent"}
                  style={{ height: 30, fontSize: 12 }}
                />
              </View>
            </View>
            <View style={{ height: "25%" }}>
              <Text style={styles.fieldTitle}> Travel Type </Text>
              <View
                style={{
                  width: "100%",
                  paddingLeft: 10,
                  justifyContent: "center",
                  paddingRight: 20
                }}
              >
                <Dropdown
                  label=""
                  placeholder="eg: Conference"
                  fontSize={12}
                  labelHeight={5}
                  data={travelType}
                />
              </View>
            </View>
            <View style={{ height: "25%" }}>
              <Text style={styles.fieldTitle}> Justification </Text>
              <View style={styles.styleTextInput}>
                <TextInput
                  placeholderTextColor={"#c4c4c4"}
                  placeholder={
                    "eg: Please provide justification for your travel"
                  }
                  underlineColorAndroid={"transparent"}
                  style={{ height: 30, fontSize: 12 }}
                />
              </View>
            </View>
            <View style={{ height: "25%" }}>
              <Text style={styles.fieldTitle}> Date </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "35%",
                  paddingBottom: 30
                }}
              >
                <DatePicker
                  style={{
                    borderColor: "transparent",
                    marginLeft: 10,
                    width: 100
                  }}
                  date={this.state.date}
                  showIcon={false}
                  mode="date"
                  placeholder="dd.mm.yyyy"
                  border="transparent"
                  format="YYYY-MM-DD"
                  minDate="2016-05-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    placeholderText: {
                      fontSize: 12
                    },
                    dateInput: {
                      borderColor: "transparent",
                      borderBottomColor: "#c4c4c4",
                      height: 30
                    },
                    dateText: {
                      fontSize: 12
                    }
                  }}
                  onDateChange={date => {
                    this.setState({ date: date });
                  }}
                />
                <Text
                  style={{
                    paddingTop: 10,
                    alignItems: "center"
                  }}
                >
                  to
                </Text>
                <DatePicker
                  style={{
                    borderColor: "transparent",
                    marginLeft: 10,
                    width: 100
                  }}
                  date={this.state.date}
                  showIcon={false}
                  mode="date"
                  placeholder="dd.mm.yyyy"
                  border="transparent"
                  format="YYYY-MM-DD"
                  minDate="2016-05-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    placeholderText: {
                      fontSize: 12
                    },
                    dateInput: {
                      borderColor: "transparent",
                      borderBottomColor: "#c4c4c4",
                      height: 30
                    },
                    dateText: {
                      fontSize: 12
                    }
                  }}
                  onDateChange={date => {
                    this.setState({ date: date });
                  }}
                />

                <View />
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
            height: "8%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
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

    height: "50%"
  },
  styleTextInput: {
    marginLeft: 10,
    borderBottomWidth: 1,

    borderColor: "#c4c4c4",
    width: "90%"
  },
  progressBarLabel: {
    borderBottomWidth: 2,
    flex: 0.2,
    height: 20,
    alignItems: "center",
    justifyContent: "center"
  }
});
