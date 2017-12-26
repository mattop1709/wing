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
import PendingRequestInfoCard from "./PendingRequestInfoCard";
import PendingApprovalInfoCard from "./PendingApprovalInfoCard";

export default class HomeClass extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "#E6E2E1", flex: 1 }}>
        <View
          style={{
            backgroundColor: "#E57202",
            width: "100%",
            height: "35%",
            alignItems: "center"
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <TouchableOpacity style={{ marginTop: 5, marginLeft: 5 }}>
              <Icon name="menu" size={20} color="white" />
            </TouchableOpacity>
            <Text style={{ color: "white" }}>Ali Muhd Wasil Bin Ali Absar</Text>
            <View />
          </View>
          <Text style={{ paddingBottom: 5, color: "#E6E2E1" }}>TM36668</Text>
          <Image
            source={require("./img/pp.jpeg")}
            style={{
              width: "18%",
              height: "30%",
              borderRadius: 30,
              marginBottom: 2
            }}
          />
          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              height: "30%",
              width: "90%",
              borderRadius: 12,
              marginTop: 10,
              paddingTop: 5
            }}
          >
            <View style={{ width: "25%", alignItems: "center" }}>
              <ApplicationSummary
                orange
                numOfRequest="13"
                label="TOTAL REQUEST"
              />
            </View>
            <View style={{ width: "25%", alignItems: "center" }}>
              <ApplicationSummary numOfRequest="3" label="PENDING REQUEST" />
            </View>
            <View style={{ width: "25%", alignItems: "center" }}>
              <ApplicationSummary numOfRequest="3" label="PENDING APPROVAL" />
            </View>
            <View style={{ width: "25%", alignItems: "center" }}>
              <ApplicationSummary numOfRequest="1" label="DRAFT REQUEST" />
            </View>
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              backgroundColor: "#E6E2E1",
              width: "100%",
              alignItems: "center",
              paddingBottom: 20
            }}
          >
            <Text style={styles.sectionHeaderTitle}>PENDING REQUEST</Text>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                width: "100%"
              }}
            >
              <PendingRequestInfoCard
                update
                destination="London United Kingdom"
                eventName="UI/UX Conference"
                duration="5 days"
                noOfPax="1 person"
                status="Nomination"
                date="30"
                month="DECEMBER"
                year="2017"
              />
              <PendingRequestInfoCard
                destination="Casa Blanca, Morocco"
                eventName="Digital Forum"
                duration="3 days"
                noOfPax="2 persons"
                status="Approval"
                date="15"
                month="FEBRUARY"
                year="2018"
                statusColor
              />
              <PendingRequestInfoCard
                destination="Rotorua, New Zealand"
                eventName="Site Visit"
                duration="5 days"
                noOfPax="7 persons"
                status="Endorsement"
                date="1"
                month="JANUARY"
                year="2018"
                statusColor
              />
            </View>
            <Text style={styles.sectionHeaderTitle}> PENDING APPROVAL </Text>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                width: "100%"
              }}
            >
              <PendingApprovalInfoCard
                requestorName="Arif Farhan Bin Anas Goh"
                destination="Panama City, Panama"
                duration="5 days"
                noOfPax="2 persons"
                status="Nomination"
                date="1"
                month="JANUARY"
                year="2018"
              />
              <PendingApprovalInfoCard
                requestorName="Ahmad Firdaus Bin Norazam"
                destination="Rotorua, New Zealand"
                duration="5 days"
                noOfPax="7 persons"
                status="Endorsement"
                date="1"
                month="JANUARY"
                year="2018"
              />
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            height: "8%",
            width: "100%",
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderColor: "#E57202",
            borderTopWidth: 0.5
          }}
        >
          <TouchableOpacity
            style={{ alignItems: "center", paddingLeft: 50, paddingTop: 5 }}
          >
            <Icon1 name="md-home" size={24} color="#e57202" />
            <Text style={{ fontSize: 12, color: "#e57202" }}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center", paddingTop: 5 }}>
            <Icon name="plane" size={24} color="grey" />
            <Text style={{ fontSize: 12, color: "grey" }}>Request</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ paddingRight: 50, alignItems: "center", paddingTop: 5 }}
          >
            <Icon2 name="file-text-o" size={24} color="grey" />
            <Text style={{ fontSize: 12, color: "grey" }}>Approval</Text>
          </TouchableOpacity>
        </View>

        <ActionButton buttonColor="rgba(229, 114, 2, 1)" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionHeaderTitle: {
    paddingTop: 10,
    width: "90%",
    fontSize: 12
  }
});
