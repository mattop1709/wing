import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Icon1 from "react-native-vector-icons/Ionicons";

export default class ApprovalHome extends Component {
  render() {
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
            <Icon name="menu" size={24} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 15,
              color: "white",
              marginRight: 30
            }}
          >
            {" "}
            APPROVAL{" "}
          </Text>
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
            <Text style={styles.sectionHeaderTitle}> PENDING APPROVAL </Text>
            <View
              id="pendingApprovalCardSection"
              style={{
                flex: 1,
                width: "90%"
              }}
            >
              <View style={styles.pendingApprovalCard}>
                <View style={styles.statusColor} />
                <View style={styles.cardBodyContent}>
                  <Text
                    style={{
                      paddingTop: 6,
                      fontWeight: "bold",
                      paddingLeft: 1
                    }}
                  >
                    {" "}
                    London, United Kingdom{" "}
                  </Text>
                  <Text style={{ paddingLeft: 1 }}> UI/UX Conference </Text>
                  <View id="cardInfo" style={styles.cardIcon}>
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="calendar" size={12} color="black" />
                      <Text style={{ fontSize: 12 }}> 5 days</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="user" size={12} color="black" />
                      <Text style={{ fontSize: 12 }}> 1 person</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="check" size={12} color="black" />
                      <Text style={{ fontSize: 12 }}> Nomination</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "1%",
                    height: "100%"
                  }}
                >
                  <View
                    style={{
                      height: "10%",
                      width: "100%"
                    }}
                  />
                  <View
                    style={{
                      height: "80%",
                      width: "100%",
                      borderRightWidth: 1,
                      borderColor: "grey"
                    }}
                  />
                  <View
                    style={{
                      height: "10%",
                      width: "100%"
                    }}
                  />
                </View>
                <View
                  style={{
                    width: "22%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text style={{ fontSize: 24 }}>30</Text>
                  <Text style={{ fontSize: 10 }}>OCTOBER</Text>
                  <Text style={{ fontSize: 10 }}>2017</Text>
                </View>
              </View>

              <View id={"firstReqCard"} style={styles.pendingApprovalCard}>
                <View id="status" style={styles.statusColor} />
                <View
                  id="cardBody"
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
                      paddingLeft: 1
                    }}
                  >
                    {" "}
                    London, United Kingdom{" "}
                  </Text>
                  <Text style={{ paddingLeft: 1 }}> UI/UX Conference </Text>
                  <View id="cardInfo" style={styles.cardIcon}>
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="calendar" size={12} color="black" />
                      <Text style={{ fontSize: 12 }}> 5 days</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="user" size={12} color="black" />
                      <Text style={{ fontSize: 12 }}> 1 person</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="check" size={12} color="black" />
                      <Text style={{ fontSize: 12 }}> Nomination</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "1%",
                    height: "100%"
                  }}
                >
                  <View
                    style={{
                      height: "10%",
                      width: "100%"
                    }}
                  />
                  <View
                    style={{
                      height: "80%",
                      width: "100%",
                      borderRightWidth: 1,
                      borderColor: "grey"
                    }}
                  />
                  <View
                    style={{
                      height: "10%",
                      width: "100%"
                    }}
                  />
                </View>
                <View
                  style={{
                    width: "22%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text style={{ fontSize: 24 }}>30</Text>
                  <Text style={{ fontSize: 10 }}>OCTOBER</Text>
                  <Text style={{ fontSize: 10 }}>2017</Text>
                </View>
              </View>
              <View id={"firstReqCard"} style={styles.pendingApprovalCard}>
                <View id="status" style={styles.statusColor} />
                <View
                  id="cardBody"
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
                      paddingLeft: 1
                    }}
                  >
                    {" "}
                    London, United Kingdom{" "}
                  </Text>
                  <Text style={{ paddingLeft: 1 }}> UI/UX Conference </Text>
                  <View id="cardInfo" style={styles.cardIcon}>
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="calendar" size={12} color="black" />
                      <Text style={{ fontSize: 12 }}> 5 days</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="user" size={12} color="black" />
                      <Text style={{ fontSize: 12 }}> 1 person</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="check" size={12} color="black" />
                      <Text style={{ fontSize: 12 }}> Nomination</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "1%",
                    height: "100%"
                  }}
                >
                  <View
                    style={{
                      height: "10%",
                      width: "100%"
                    }}
                  />
                  <View
                    style={{
                      height: "80%",
                      width: "100%",
                      borderRightWidth: 1,
                      borderColor: "grey"
                    }}
                  />
                  <View
                    style={{
                      height: "10%",
                      width: "100%"
                    }}
                  />
                </View>
                <View
                  style={{
                    width: "22%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text style={{ fontSize: 24 }}>30</Text>
                  <Text style={{ fontSize: 10 }}>OCTOBER</Text>
                  <Text style={{ fontSize: 10 }}>2017</Text>
                </View>
              </View>
              <Text style={styles.sectionHeaderTitle}> APPROVED REQUEST </Text>
              <View id={"firstReqCard"} style={styles.pendingApprovalCard}>
                <View id="status" style={styles.statusColor} />
                <View
                  id="cardBody"
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
                      paddingLeft: 1
                    }}
                  >
                    {" "}
                    London, United Kingdom{" "}
                  </Text>
                  <Text style={{ paddingLeft: 1 }}> UI/UX Conference </Text>
                  <View id="cardInfo" style={styles.cardIcon}>
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="calendar" size={12} color="black" />
                      <Text style={{ fontSize: 12 }}> 5 days</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="user" size={12} color="black" />
                      <Text style={{ fontSize: 12 }}> 1 person</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="check" size={12} color="black" />
                      <Text style={{ fontSize: 12 }}> Nomination</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "1%",
                    height: "100%"
                  }}
                >
                  <View
                    style={{
                      height: "10%",
                      width: "100%"
                    }}
                  />
                  <View
                    style={{
                      height: "80%",
                      width: "100%",
                      borderRightWidth: 1,
                      borderColor: "grey"
                    }}
                  />
                  <View
                    style={{
                      height: "10%",
                      width: "100%"
                    }}
                  />
                </View>
                <View
                  style={{
                    width: "22%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text style={{ fontSize: 24 }}>30</Text>
                  <Text style={{ fontSize: 10 }}>OCTOBER</Text>
                  <Text style={{ fontSize: 10 }}>2017</Text>
                </View>
              </View>
              <View id={"firstReqCard"} style={styles.pendingApprovalCard}>
                <View id="status" style={styles.statusColor} />
                <View
                  id="cardBody"
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
                      paddingLeft: 1
                    }}
                  >
                    {" "}
                    London, United Kingdom{" "}
                  </Text>
                  <Text style={{ paddingLeft: 1 }}> UI/UX Conference </Text>
                  <View id="cardInfo" style={styles.cardIcon}>
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="calendar" size={12} color="black" />
                      <Text style={{ fontSize: 12 }}> 5 days</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="user" size={12} color="black" />
                      <Text style={{ fontSize: 12 }}> 1 person</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="check" size={12} color="black" />
                      <Text style={{ fontSize: 12 }}> Nomination</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "1%",
                    height: "100%"
                  }}
                >
                  <View
                    style={{
                      height: "10%",
                      width: "100%"
                    }}
                  />
                  <View
                    style={{
                      height: "80%",
                      width: "100%",
                      borderRightWidth: 1,
                      borderColor: "grey"
                    }}
                  />
                  <View
                    style={{
                      height: "10%",
                      width: "100%"
                    }}
                  />
                </View>
                <View
                  style={{
                    width: "22%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text style={{ fontSize: 24 }}>30</Text>
                  <Text style={{ fontSize: 10 }}>OCTOBER</Text>
                  <Text style={{ fontSize: 10 }}>2017</Text>
                </View>
              </View>
              <View id={"firstReqCard"} style={styles.pendingApprovalCard}>
                <View id="status" style={styles.statusColor} />
                <View
                  id="cardBody"
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
                      paddingLeft: 1
                    }}
                  >
                    {" "}
                    London, United Kingdom{" "}
                  </Text>
                  <Text style={{ paddingLeft: 1 }}> UI/UX Conference </Text>
                  <View id="cardInfo" style={styles.cardIcon}>
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="calendar" size={12} color="black" />
                      <Text style={{ fontSize: 12 }}> 5 days</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="user" size={12} color="black" />
                      <Text style={{ fontSize: 12 }}> 1 person</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="check" size={12} color="black" />
                      <Text style={{ fontSize: 12 }}> Nomination</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "1%",
                    height: "100%"
                  }}
                >
                  <View
                    style={{
                      height: "10%",
                      width: "100%"
                    }}
                  />
                  <View
                    style={{
                      height: "80%",
                      width: "100%",
                      borderRightWidth: 1,
                      borderColor: "grey"
                    }}
                  />
                  <View
                    style={{
                      height: "10%",
                      width: "100%"
                    }}
                  />
                </View>
                <View
                  style={{
                    width: "22%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text style={{ fontSize: 24 }}>30</Text>
                  <Text style={{ fontSize: 10 }}>OCTOBER</Text>
                  <Text style={{ fontSize: 10 }}>2017</Text>
                </View>
              </View>
              <View style={{ height: 10, width: "100%" }} />
            </View>
          </View>
        </ScrollView>
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
            <Icon1 name="ios-jet" size={26} color="black" />
            <Text style={{ fontSize: 12 }}>Request</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ paddingRight: 50, alignItems: "center", paddingTop: 5 }}
          >
            <Icon1 name="ios-paper" size={26} color="orange" />
            <Text style={{ fontSize: 12, color: "orange" }}>Approval</Text>
          </TouchableOpacity>
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
    width: "100%",
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
    backgroundColor: "blue",
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7
  },
  cardIcon: {
    paddingLeft: 2,
    marginTop: 3,
    alignItems: "center",
    height: "30%",
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1
  }
});
