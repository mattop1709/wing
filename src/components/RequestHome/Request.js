import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";
import NavBar, { NavButton, NavButtonText, NavTitle } from "react-native-nav";

import Icon from "react-native-vector-icons/EvilIcons";
import Cancel from "react-native-vector-icons/MaterialIcons";
import Menu from "react-native-vector-icons/Ionicons";
import ActionButton from "react-native-action-button";
import Circle from "react-native-vector-icons/FontAwesome";

import TrackingBar from "../Bar/TrackingBar";

class Request extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const { requestHome } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
        <ScrollView style={{ flex: 1, paddingHorizontal: 8, paddingTop: 8 }}>
          <FlatList
            data={requestHome}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => (
              <ApplicationSingle
                id={item.ref}
                navigate={navigate}
                destination={item.destination}
                travelFrom={item.travelFrom}
                travelUntil={item.travelUntil}
                travelType={item.travelType}
                dialogBox={item.dialogBox}
                status={item.status}
                reject={item.reject}
                notification={item.notification}
              />
            )}
          />
        </ScrollView>

        <ActionButton
          buttonColor="#333333"
          onPress={() => navigate("ProfileForm", { reddit: 0 })}
        />
      </View>
    );
  }
}

export default Request;

const ApplicationSingle = ({
  id,
  destination,
  travelFrom,
  travelUntil,
  travelType,
  dialogBox,
  navigate,
  status,
  notification,
  reject
}) => (
  <View
    style={{
      marginBottom: 16,
      justifyContent: "flex-start",
      shadowOpacity: 0.4,
      borderRadius: 8
    }}
  >
    {status === "Draft" ? (
      <TouchableOpacity
        onPress={() => navigate("SubmitForm")}
        style={{ backgroundColor: "#dcdcdc", borderRadius: 8 }}
      >
        <View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
          <Text
            style={{
              fontSize: 16,
              paddingBottom: 4,
              color: "#000000",
              fontWeight: "bold"
            }}
          >
            [Draft] {destination}
          </Text>
          <Text
            style={{
              fontSize: 16,
              paddingBottom: 4,
              color: "#000000"
            }}
          >
            {travelType}
          </Text>

          <Text style={{ fontSize: 16, paddingBottom: 4, color: "#000000" }}>
            {travelFrom} until {travelUntil} 2017
          </Text>
        </View>

        <TrackingBar status={status} reject={reject} />

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "rgba(255, 149, 79, 0.8)",
            paddingVertical: 16,
            paddingHorizontal: 16,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8
          }}
        >
          <Icon name="comment" size={24} color="#000000" />
          <Text style={{ paddingLeft: 8, fontSize: 16, fontWeight: "bold" }}>
            {dialogBox}
          </Text>
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        onPress={() => navigate("RequestStatus")}
        style={{ backgroundColor: "#ffffff", borderRadius: 8 }}
      >
        {notification === "new" ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 16,
              paddingHorizontal: 16
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 16,
                  paddingBottom: 4,
                  color: "#cf0832",
                  fontWeight: "bold"
                }}
              >
                {destination}
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  paddingBottom: 4,
                  color: "#cf0832"
                }}
              >
                {travelType}
              </Text>

              <Text
                style={{ fontSize: 16, paddingBottom: 4, color: "#cf0832" }}
              >
                {travelFrom} until {travelUntil} 2017
              </Text>
            </View>
            <View>
              <Circle name="circle" size={16} color="#f27178" />
            </View>
          </View>
        ) : (
          <View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
            <Text
              style={{
                fontSize: 16,
                paddingBottom: 6,
                color: "#000000",
                fontWeight: "bold"
              }}
            >
              {destination}
            </Text>
            <Text
              style={{
                fontSize: 16,
                paddingBottom: 4,
                color: "#a9a9a9"
              }}
            >
              {travelType}
            </Text>

            <Text style={{ fontSize: 16, paddingBottom: 4, color: "#a9a9a9" }}>
              {travelFrom} until {travelUntil} 2017
            </Text>
          </View>
        )}

        {status === "eeiu" ? (
          <View
            style={{
              justifyContent: "center",
              backgroundColor: "#5ac8fa",
              marginBottom: 16,
              marginHorizontal: 32,
              borderRadius: 100,
              paddingTop: 16,
              paddingBottom: 16,
              alignItems: "center"
            }}
          >
            <Text style={{ color: "white" }}>Pending EEIU Approval</Text>
          </View>
        ) : (
          <TrackingBar status={status} reject={reject} />
        )}

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#007aff",
            paddingVertical: 16,
            paddingHorizontal: 16,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8
          }}
        >
          <Icon name="comment" size={24} color="#000000" />
          <Text style={{ paddingLeft: 8, fontSize: 16, fontWeight: "bold" }}>
            {dialogBox}
          </Text>
        </View>
      </TouchableOpacity>
    )}
  </View>
);
