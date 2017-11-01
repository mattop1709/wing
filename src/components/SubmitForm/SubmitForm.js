import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  StatusBar
} from "react-native";
import NavigationBar from "react-native-navbar";

class SubmitForm extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;
    const { submit } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <StatusBar
          backgroundColor="black"
          setBackgroundColor="#f27178"
          barStyle="dark-content"
        />
        <NavigationBar
          style={{ borderColor: "#f27178", borderBottomWidth: 1 }}
          title={{ title: "Confirmation" }}
          leftButton={{
            title: "Exit",
            handler: () =>
              Alert.alert("confirm to Exit without submitting?", "Lala", [
                {
                  text: "No",
                  style: "destructive"
                },
                {
                  text: "Yes",
                  onPress: () => navigate("Request"),
                  style: "default"
                }
              ])
          }}
        />

        <ScrollView style={{ flex: 1, paddingHorizontal: 8 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 24,
              marginBottom: 40
            }}
          >
            <View
              style={{
                backgroundColor: "#f27178",
                paddingHorizontal: 16,
                paddingVertical: 16,
                marginLeft: 8
              }}
            >
              <Text
                style={{
                  paddingHorizontal: 8,
                  fontSize: 18,
                  fontWeight: "bold"
                }}
              >
                Logo
              </Text>
            </View>
            <View style={{ paddingHorizontal: 8, justifyContent: "center" }}>
              <Text style={{ fontSize: 12 }}>{submit.ref}</Text>
              <Text style={{ fontSize: 12 }}>{submit.applyDate}</Text>
              <Text style={{ fontSize: 12 }}>{submit.applyTime}</Text>
            </View>
          </View>

          <View style={{ paddingHorizontal: 8, paddingBottom: 40 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}
              >
                Travel Details
              </Text>
              <TouchableOpacity
                onPress={() => navigate("TravelForm", { reedit: 1 })}
                style={{ paddingBottom: 8 }}
              >
                <Text style={{ fontSize: 12, color: "green" }}>Edit</Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{ fontSize: 20, paddingBottom: 4, fontWeight: "bold" }}
            >
              {submit.destination}
            </Text>
            <Text style={{ fontSize: 14, paddingBottom: 4 }}>
              {submit.travelFrom} to {submit.travelUntil} 2016
            </Text>
            <Text style={{ fontSize: 14, paddingBottom: 4 }}>
              {submit.travelType}
            </Text>
            <Text style={{ fontSize: 12, paddingBottom: 8, color: "#c4c4c4" }}>
              Description
            </Text>
            <Text
              style={{ fontSize: 12, lineHeight: 18, textAlign: "justify" }}
            >
              {submit.justificationText}
            </Text>
          </View>

          <View style={{ paddingHorizontal: 8, paddingBottom: 32 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}
              >
                Profile Details
              </Text>
              <TouchableOpacity
                onPress={() => navigate("ProfileFormEdit")}
                style={{ paddingBottom: 8 }}
              >
                <Text style={{ fontSize: 12, color: "green" }}>Edit</Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{ fontSize: 20, paddingBottom: 4, fontWeight: "bold" }}
            >
              {submit.requestorName}
            </Text>
            <Text style={{ fontSize: 12, paddingBottom: 16 }}>
              {submit.requestorDivision}
            </Text>
            <Text style={{ fontSize: 12, paddingBottom: 8, color: "#c4c4c4" }}>
              Additional Travellers
            </Text>
            <Text
              style={{
                paddingLeft: 8,
                fontSize: 14,
                paddingBottom: 4,
                fontWeight: "bold"
              }}
            >
              {submit.additionalTravellerName1}
            </Text>
            <Text style={{ paddingLeft: 8, fontSize: 12, paddingBottom: 12 }}>
              {submit.additionalTravellerDivision1}
            </Text>
            <Text
              style={{
                paddingLeft: 8,
                fontSize: 14,
                paddingBottom: 4,
                fontWeight: "bold"
              }}
            >
              {submit.additionalTravellerName2}
            </Text>
            <Text style={{ paddingLeft: 8, fontSize: 12, paddingBottom: 12 }}>
              {submit.additionalTravellerDivision2}
            </Text>
            <Text
              style={{
                paddingLeft: 8,
                fontSize: 14,
                paddingBottom: 4,
                fontWeight: "bold"
              }}
            >
              {submit.additionalTravellerName3}
            </Text>
            <Text style={{ paddingLeft: 8, fontSize: 12, paddingBottom: 12 }}>
              {submit.additionalTravellerDivision3}
            </Text>
          </View>

          <View style={{ paddingHorizontal: 8, paddingBottom: 32 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}
              >
                Approvers Details
              </Text>
              <TouchableOpacity
                onPress={() => navigate("ApprovalFormEdit")}
                style={{ paddingBottom: 8 }}
              >
                <Text style={{ fontSize: 12, color: "green" }}>Edit</Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{ fontSize: 14, paddingBottom: 4, fontWeight: "bold" }}
            >
              {submit.nominatorName}
            </Text>
            <Text style={{ fontSize: 12, paddingBottom: 12 }}>Nominator</Text>
            <Text
              style={{ fontSize: 14, paddingBottom: 4, fontWeight: "bold" }}
            >
              {submit.endorserName}
            </Text>
            <Text style={{ fontSize: 12, paddingBottom: 12 }}>Endorser</Text>
            <Text
              style={{ fontSize: 14, paddingBottom: 4, fontWeight: "bold" }}
            >
              {submit.approverName}
            </Text>
            <Text style={{ fontSize: 12, paddingBottom: 12 }}>Approver</Text>
          </View>

          <View style={{ paddingBottom: 40, paddingHorizontal: 8 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}
              >
                Cost Details
              </Text>
              <TouchableOpacity
                onPress={() => navigate("CostFormEdit")}
                style={{ paddingBottom: 8 }}
              >
                <Text style={{ fontSize: 12, color: "green" }}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingBottom: 8,
                borderBottomWidth: 0.5,
                borderColor: "#c4c4c4"
              }}
            >
              <Text style={{ color: "grey" }}>
                Budget - {submit.costCategory}
              </Text>
              <Text style={{ paddingRight: 8, color: "grey" }}>
                {submit.budget}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 8
              }}
            >
              <Text style={{ fontSize: 18 }}>TOTAL</Text>
              <Text
                style={{ paddingRight: 8, fontSize: 18, fontWeight: "bold" }}
              >
                {submit.cost}
              </Text>
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            paddingVertical: 16
          }}
        >
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Submit travel request?", "Action cannot be undo", [
                {
                  text: "No",
                  style: "destructive"
                },
                {
                  text: "Yes",
                  onPress: () => navigate("Request"),
                  style: "default"
                }
              ])}
            style={{
              borderWidth: 1,
              paddingVertical: 8,
              marginHorizontal: 16,
              alignItems: "center",
              borderRadius: 100,
              backgroundColor:
                "hsl(194, 100%, 100%) && hsla(194, 100%, 80%, 1.0)"
            }}
          >
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SubmitForm;

// const applications = {
//   ref: "XSAW-532C",
//   applyDate: "12 Sept 2017",
//   applyTime: "10.20am",
//   destination: "Monte Carlo, Monaco",
//   travelFrom: "21 Oct",
//   travelUntil: "10 Nov",
//   travelType: "Site Survey",
//   justificationText:
//     "I would like to Experience the ka-cing ka-cing while experiencing the magnificent of Alain Ducasse Le Louis XV Dinner",
//   requestorName: "Ali Muhd Wasil bin Ali Absar",
//   requestorDivision: "Group Brand and Communication",
//   additionalTravellerName1: "Abu bin Ah Beng",
//   additionalTravellerDivision1: "IT&NT",
//   additionalTravellerName2: "Abu bin Ah Ngah",
//   additionalTravellerDivision2: "IT&NT",
//   additionalTravellerName3: "Abu bin Ah Teng",
//   additionalTravellerDivision3: "IT&NT",
//   nominatorName: "Jusoh bin Ali",
//   endorserName: "Ali bin Awang",
//   approverName: "Kabil bin Ali",
//   cost: "RM 12000.00",
//   budget: "RM 34000.00",
//   costCategory: "EEIU"
// };
