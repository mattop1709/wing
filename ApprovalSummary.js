import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Circle from "react-native-vector-icons/Entypo";
import Check from "react-native-vector-icons/MaterialCommunityIcons";
import Cancel from "react-native-vector-icons/MaterialIcons";

import { Divider } from "react-native-elements";

export default class HomeClass extends Component {
  render() {
    const { status } = this.props;
    return (
      <View id="overall" style={{ backgroundColor: "white", flex: 1 }}>
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
          <TouchableOpacity style={{ marginLeft: 5 }}>
            <Circle name="chevron-thin-left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={{ fontSize: 15, color: "white" }}> APPROVAL </Text>
          <View />
        </View>

        <ScrollView>
          <View
            id="body"
            style={{
              backgroundColor: "#E6E2E1",
              alignItems: "center"
            }}
          >
            <View
              style={{
                marginTop: 18,
                paddingVertical: 10,
                paddingHorizontal: 7,
                width: "90%",
                borderRadius: 7,
                backgroundColor: "white"
              }}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 18, lineHeight: 20 }}
              >
                LONDON, ENGLAND
              </Text>
              <Text style={{ fontSize: 14, lineHeight: 25 }}>
                UX London 2017 Conference
              </Text>
              <Text
                style={{
                  fontSize: 9,
                  textAlign: "left",
                  paddingBottom: 10
                }}
              >
                Lorem ipsum .... Lorem ipsum .... Lorem ipsum .... Lorem ipsum
                .... Lorem ipsum .... Lorem ipsum .... Lorem ipsum .... Lorem
                ipsum ....Lorem ipsum .... Lorem ipsum .... Lorem ipsum ....
                Lorem ipsum .... Lorem ipsum .... Lorem ipsum .... Lorem ipsum
                .... Lorem ipsum ....
              </Text>
              <View
                id="dateCard"
                style={{
                  height: 100,
                  width: "90%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: 7,
                  marginLeft: 15
                }}
              >
                <View id="leftColumn" style={styles.itineraryColumn}>
                  <View
                    style={{
                      height: "25%",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#f5ba32",
                      borderTopLeftRadius: 7
                    }}
                  >
                    <Text style={{ color: "white", fontSize: 10 }}>
                      {" "}
                      DEPARTURE{" "}
                    </Text>
                  </View>
                  <View
                    style={{
                      height: "75%",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#f7cf6f",
                      borderBottomLeftRadius: 7
                    }}
                  >
                    <Text style={{ color: "white", fontSize: 48 }}> 20 </Text>
                    <Text style={{ color: "white", fontSize: 12 }}>
                      {" "}
                      OCT 2017{" "}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    height: "100%",
                    width: "0.8%",
                    backgroundColor: "#f5ba32"
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: "10%",
                      backgroundColor: "#f5ba32"
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: "white",
                      height: "80%",
                      width: "100%",
                      borderRadius: 7
                    }}
                  />
                  <View
                    style={{
                      width: "100%",
                      height: "10%",
                      backgroundColor: "#f7cf6f"
                    }}
                  />
                </View>
                <View id="rightColumn" style={styles.itineraryColumn}>
                  <View style={styles.columnHeader}>
                    <Text style={{ color: "white", fontSize: 10 }}>
                      {" "}
                      ARRIVAL{" "}
                    </Text>
                  </View>
                  <View
                    style={{
                      height: "75%",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#f7cf6f",
                      borderBottomRightRadius: 7
                    }}
                  >
                    <Text style={{ color: "white", fontSize: 48 }}> 20 </Text>
                    <Text style={{ color: "white", fontSize: 12 }}>
                      {" "}
                      OCT 2017{" "}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <Text style={styles.sectionHeaderTitle}> REQUEST STATUS </Text>

            <View
              id="trackBar"
              style={{
                flex: 1,
                width: "90%",
                backgroundColor: "white",
                borderRadius: 7,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 7
              }}
            >
              <View
                id="trackBarBody"
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingVertical: 1,
                  width: "90%"
                }}
              >
                <Check
                  name="check-circle"
                  size={24}
                  color="green"
                  style={{ paddingHorizontal: 4 }}
                />
                <View
                  style={{
                    flex: 0.28,
                    borderWidth: 1,
                    height: "2%",
                    marginTop: 10,
                    borderColor: "grey"
                  }}
                />
                <Check
                  name="check-circle"
                  size={24}
                  color="#E6E2E1"
                  style={{ paddingHorizontal: 4 }}
                />
                <View
                  style={{
                    flex: 0.28,
                    borderWidth: 1,
                    height: "2%",
                    marginTop: 10,
                    borderColor: "grey"
                  }}
                />
                <Check
                  name="check-circle"
                  size={24}
                  color="#E6E2E1"
                  style={{ paddingHorizontal: 4 }}
                />
                <View
                  style={{
                    flex: 0.28,
                    borderWidth: 1,
                    height: "2%",
                    marginTop: 10,
                    borderColor: "grey"
                  }}
                />
                <Check
                  name="check-circle"
                  size={24}
                  color="#E6E2E1"
                  style={{ paddingHorizontal: 4 }}
                />
              </View>
              <View
                id="trackBarLabel"
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 1,
                  width: "90%"
                }}
              >
                <Text style={{ fontSize: 10 }}> Submission </Text>
                <Text style={{ fontSize: 10, marginLeft: 1 }}>
                  {" "}
                  Nomination{" "}
                </Text>
                <Text style={{ fontSize: 10, marginRight: 4 }}>
                  {" "}
                  Endorsement{" "}
                </Text>
                <Text style={{ fontSize: 10 }}> Approval </Text>
              </View>
            </View>

            <Text style={styles.sectionHeaderTitle}> REQUEST PROFILE </Text>

            <View
              style={{
                flex: 1,
                width: "90%",
                backgroundColor: "white",
                borderRadius: 7,
                alignItems: "center",
                paddingBottom: 15
              }}
            >
              <View style={styles.profilePicView}>
                <Image
                  source={require("./img/pp.jpeg")}
                  style={styles.profilePicSize}
                />
                <View style={styles.profileNameView}>
                  <Text style={styles.profileNameText}>Ali Muhd Wasil</Text>
                  <Text style={styles.profileDivisionText}>
                    Group Digital Centre
                  </Text>
                </View>
              </View>
              <View style={styles.formBottomBorder} />
              <View style={styles.profilePicView}>
                <Image
                  source={require("./img/pp.jpeg")}
                  style={styles.profilePicSize}
                />
                <View style={styles.profileNameView}>
                  <Text style={styles.profileNameText}>Chiang Wei Min</Text>
                  <Text style={styles.profileDivisionText}>
                    Digital Customer Experience
                  </Text>
                </View>
              </View>
              <View style={styles.formBottomBorder} />
              <View style={styles.profilePicView}>
                <Image
                  source={require("./img/pp.jpeg")}
                  style={styles.profilePicSize}
                />
                <View style={styles.profileNameView}>
                  <Text style={styles.profileNameText}>
                    Thivenesh a/l Thamil Murasoo
                  </Text>
                  <Text style={styles.profileDivisionText}>
                    Customer Experience Management and Transformation
                  </Text>
                </View>
              </View>
              <View style={styles.formBottomBorder} />
            </View>
            <Text style={styles.sectionHeaderTitle}> COST INFO </Text>
            <View
              style={{
                width: "90%",
                flex: 1,
                backgroundColor: "white",
                borderRadius: 7,
                alignItems: "center"
              }}
            >
              <View
                style={{
                  width: "90%",
                  paddingBottom: 15
                }}
              >
                <Text style={styles.formFieldHeaderText}> Cost </Text>
                <Text style={styles.formFieldBodyText}> RM 22,000.00 </Text>
                <View style={styles.costInfoFormBottomBorder} />
                <Text style={styles.formFieldHeaderText}> Budget </Text>
                <Text style={styles.formFieldBodyText}> RM 25,000.00 </Text>
                <View style={styles.costInfoFormBottomBorder} />
                <Text style={styles.formFieldHeaderText}> Cost Centre </Text>
                <Text style={styles.formFieldBodyText}> BMCE02 </Text>
                <View style={styles.costInfoFormBottomBorder} />
                <Text style={styles.formFieldHeaderText}> Cost Category </Text>
                <Text style={styles.formFieldBodyText}> TM Sponsorship </Text>
                <View style={styles.costInfoFormBottomBorder} />
              </View>
            </View>
            <Text style={styles.sectionHeaderTitle}> APPROVER </Text>
            <View
              style={{
                width: "90%",
                flex: 1,
                backgroundColor: "white",
                borderRadius: 7,
                alignItems: "center"
              }}
            >
              <View
                style={{
                  width: "90%",
                  paddingBottom: 15
                }}
              >
                <Text style={styles.formFieldHeaderText}> Nominator </Text>
                <Text style={styles.formFieldBodyText}>
                  {" "}
                  Engku Fariez bin Engku Azahan{" "}
                </Text>
                <View style={styles.costInfoFormBottomBorder} />
                <Text style={styles.formFieldHeaderText}> Nominator 2 </Text>
                <Text style={styles.formFieldBodyText}>
                  {" "}
                  Nur Izzati Binti Amir Amzah{" "}
                </Text>
                <View style={styles.costInfoFormBottomBorder} />
                <Text style={styles.formFieldHeaderText}> Endorser </Text>
                <Text style={styles.formFieldBodyText}>
                  {" "}
                  Irwin Kumar a/l Asogan{" "}
                </Text>
                <View style={styles.costInfoFormBottomBorder} />
                <Text style={styles.formFieldHeaderText}> Approver </Text>
                <Text style={styles.formFieldBodyText}> Lim Goh Tong </Text>
                <View style={styles.costInfoFormBottomBorder} />
              </View>
            </View>
            <TouchableOpacity
              style={{
                marginTop: 10,
                borderRadius: 30,
                backgroundColor: "#E57202",
                width: "75%",
                height: 40,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "white" }}> APPROVE </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginVertical: 10,
                borderRadius: 30,
                borderColor: "#e57202",
                backgroundColor: "white",
                width: "75%",
                height: 40,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "#E57202" }}> REVERT </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View
          id="footer"
          style={{
            backgroundColor: "white",
            height: "8%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            borderColor: "#E57202",
            borderTopWidth: 1
          }}
        >
          <TouchableOpacity
            style={{ alignItems: "center", paddingLeft: 50, paddingTop: 5 }}
          >
            <Icon name="home" size={24} color="black" />
            <Text style={{ fontSize: 12 }}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center", paddingTop: 5 }}>
            <Icon name="plane" size={24} />
            <Text style={{ fontSize: 12 }}>Request</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ paddingRight: 50, alignItems: "center", paddingTop: 5 }}
          >
            <Icon1 name="ios-paper" size={24} color="#e57202" />
            <Text style={{ fontSize: 12, color: "#e57202" }}>Approval</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  progressBarLabel: {
    borderBottomWidth: 3,
    borderColor: "#00bb00",
    flex: 0.2,
    height: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  itineraryColumn: {
    width: "49.6%",
    height: 100
  },
  columnHeader: {
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5ba32",
    borderTopRightRadius: 7
  },
  profilePicView: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 13,
    paddingHorizontal: 10
  },
  profilePicSize: {
    width: "12%",
    height: "78%",
    borderRadius: 17,
    marginBottom: 4
  },
  profileNameView: {
    width: "88%",
    justifyContent: "center",
    paddingBottom: 5,
    paddingHorizontal: 10,
    height: 45
  },
  formBottomBorder: {
    paddingBottom: 2,
    height: "1%",
    borderBottomWidth: 1,
    borderColor: "#E6E2E1",
    width: "90%"
  },
  costInfoFormBottomBorder: {
    paddingBottom: 2,
    height: "1%",
    borderBottomWidth: 1,
    borderColor: "#E6E2E1",
    width: "100%"
  },
  profileNameText: {
    justifyContent: "center",
    fontSize: 12,
    fontWeight: "bold"
  },
  profileDivisionText: { fontSize: 10 },
  sectionHeaderTitle: {
    lineHeight: 30,
    width: "90%",
    fontSize: 12
  },
  formFieldHeaderText: {
    fontSize: 10,
    fontWeight: "bold",
    paddingVertical: 10
  },
  formFieldBodyText: { width: "100%", fontSize: 12, paddingBottom: 5 }
});
