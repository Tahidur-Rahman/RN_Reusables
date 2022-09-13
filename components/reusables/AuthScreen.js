import {
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  View,
} from "react-native";
import React from "react";
import { WHITE } from "../../styles/Colors";
import { SCREEN_HEIGHT } from "../../styles/Scalling";
import { ImportantText } from "./Text";
import IconButton from "./IconButton";
import Screen from './Screen';

export default function AuthScreen({ title, children }) {
  return (
    <Screen>
      <StatusBar backgroundColor={WHITE} barStyle="dark-content" />
      <IconButton name="chevron-left" />
      <View style={{ height: SCREEN_HEIGHT * 0.05 }} />
      <ImportantText text={title} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, marginTop: 30 }}
      >
        {children}
      </KeyboardAvoidingView>
    </Screen>
  );
}
