import React, { Component } from "react";
import { TouchableOpacity, Image, View, Text,ScrollView,StatusBar} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import  { NAVY_BLUE, WHITE } from "../styles/Colors";
import { SCREEN_HEIGHT } from "../styles/Scalling";
import { BOLD } from "../styles/Fonts";

export default CustomDrawer = ({ navigation:{navigate} }) => {
  const titleStyle = {
      fontFamily: BOLD,
      fontSize: 20,
      color: WHITE,
    },
    iconStyle = { color: WHITE };
  const DrawerNav = ({ title, path, icon, IconType, onPress }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          path ? navigate(path) : onPress();
        }}
        style={{ paddingVertical: 15, flexDirection: "row" }}
      >
        <View style={{ width: 45 }}>
          {IconType ? (
            <IconType name={icon} style={iconStyle} size={24} />
          ) : (
            <Icon name={icon} style={iconStyle} size={24} />
          )}
        </View>
        <Text style={{ ...titleStyle, fontSize: 16 }}>{title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <DrawerContentScrollView
      contentContainerStyle={{ backgroundColor: NAVY_BLUE,height:SCREEN_HEIGHT}}
    >
      <View style={{ paddingLeft: 50, paddingTop: 20 }}>
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 100, height: 100, }}
        />
        <ScrollView style={{ marginVertical: 25 }}>
          <DrawerNav title="Favorite Lessons" icon="star" onPress={()=>{}}/>
          <DrawerNav
            title="Edit Profile"
            icon="edit"
            onPress={() => navigate("EditProfile")}
          />

          <DrawerNav
            title="Sign out"
            icon="sign-out-alt"
            onPress={async () => {
              try {
                await AsyncStorage.removeItem("currentUser");
                navigate("Login");
              } catch (e) {
                // remove error
              }
            }}
          />
        </ScrollView>
      </View>
    </DrawerContentScrollView>
  );
};
