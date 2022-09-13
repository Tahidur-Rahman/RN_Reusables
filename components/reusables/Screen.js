import { SafeAreaView,StatusBar } from "react-native";
import React from "react";
import { WHITE } from "../../styles/Colors";
import { SCREEN_PADDING } from "../../styles/Scalling";

export default function Screen({ backgroundColor=WHITE,children }) {
  return (
    <SafeAreaView
      style={{
        backgroundColor,
        flex: 1,
        paddingHorizontal: SCREEN_PADDING,
        paddingVertical: 10,
      }}
    >

<StatusBar backgroundColor={WHITE} barStyle="dark-content" />
      {children}
    </SafeAreaView>
  );
}
