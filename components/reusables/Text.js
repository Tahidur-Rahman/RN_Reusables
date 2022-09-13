import {  Text } from "react-native";
import React from "react";
import { BLACK } from "../../styles/Colors";
import { moderateScale } from "../../styles/Scalling";
import { BOLD, REGULAR } from "../../styles/Fonts";

export const BOLD_HIGH = 23;
export const BOLD_MEDIUM = 18;
export const BOLD_SMALL = 15;
export const REGULAR_HIGH = 14;

export const ImportantText = ({ text,color=BLACK,size=BOLD_HIGH, style }) => {
  return (
    <Text
      style={{
        color,
        fontSize: moderateScale(size),
        fontFamily: BOLD,
        ...style,
      }}
    >
      {text}
    </Text>
  );
};
export const RegularText = ({ text, style,color=BLACK,size=REGULAR_HIGH }) => {
  return (
    <Text
      style={{
        color,
        fontSize: moderateScale(size),
        fontFamily: REGULAR,
        ...style,
      }}
    >
      {text}
    </Text>
  );
};
