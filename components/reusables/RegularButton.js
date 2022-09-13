import { View, Text, TouchableNativeFeedback, ActivityIndicator } from "react-native";
import React from "react";
import {  LIGHT_GRAY, MID_GRAY, ORCHID, WHITE } from "../../styles/Colors";
import { BOLD } from "../../styles/Fonts";
import { moderateScale } from "../../styles/Scalling";

export default function RegularButton({ type = "filled",title,onPress,disabled,loading }) {
  return (
    <View
      style={{
        height: 50,
        borderRadius: 10,
        overflow: "hidden",
        marginVertical: 10,
        borderColor:disabled?LIGHT_GRAY:ORCHID,
        borderWidth:type=='filled'?0:1.5
      }}
    >
      <TouchableNativeFeedback
        accessibilityRole="button"
        style={{ alignItems: "center" }}
        background={TouchableNativeFeedback.Ripple(type=='filled'?WHITE:ORCHID)}
        onPress={onPress}
        disabled={disabled}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: (type=='filled' && !disabled)?ORCHID:disabled?LIGHT_GRAY:WHITE,
          }}
        >
          {loading?<ActivityIndicator color={type=="filled"?WHITE:ORCHID}/>:<Text
            style={{
              color: (type=='filled' && !disabled)?WHITE:disabled?MID_GRAY:ORCHID,
              fontFamily: BOLD,
              fontSize: moderateScale(16),
            }}
          >
            {title}
          </Text>}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
