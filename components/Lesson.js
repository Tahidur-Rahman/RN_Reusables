import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SCREEN_PADDING, SCREEN_WIDTH } from "../styles/Scalling";
import { LIGHT_GRAY, MID_GRAY, WHITE } from "../styles/Colors";
import { BOLD_SMALL, ImportantText, RegularText } from "./reusables/Text";

export default function Lesson({ lesson, ...props }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        width: (SCREEN_WIDTH - ((SCREEN_PADDING + 5) * 2 + 15)) / 2,
        backgroundColor: WHITE,
        marginRight: 15,
        padding: 15,
        borderRadius: 20,
        marginBottom: 20,
      }}
      {...props}
    >
      <Image
        source={lesson.icon}
        style={{ width: 35, height: 35, marginVertical: 15 }}
      />
      <ImportantText text={lesson.title} size={BOLD_SMALL} />
      <RegularText
        text={`You completed ${lesson.completed}%`}
        color={MID_GRAY}
        style={{ marginVertical: 5, fontSize: 13 }}
      />
      <View
        style={{
          height: 5,
          backgroundColor: LIGHT_GRAY,
          borderRadius: 10,
          marginVertical: 10,
          marginBottom: 15,
        }}
      >
        <View
          style={{
            backgroundColor: lesson.color,
            height: 7,
            borderRadius: 10,
            marginTop: -1,
            width: `${lesson.completed}%`,
          }}
        />
      </View>
    </TouchableOpacity>
  );
}
