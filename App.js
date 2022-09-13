import React, { useCallback, useEffect, useState } from "react";
// Home Screens
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { SafeAreaView, StatusBar, View } from "react-native";
import RegularButton from "./components/reusables/RegularButton";
import { ImportantText } from "./components/reusables/Text";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
          "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  if (!appIsReady) {
    return null;
  }

  return (
    <View
      onLayout={onLayoutRootView}
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <StatusBar barStyle="dark-content"/>
      <ImportantText text="Reusable Buttons" style={{marginVertical:30,alignSelf:'center'}}/>
      {/* Buttons Examples  */}

      <RegularButton title="Filled" />
      <RegularButton title="Filled" loading/>
      <RegularButton title="Disabled" disabled/>
      <RegularButton title="Outlined" type="outlined"/>
      <RegularButton title="Outlined" type="outlined" loading/>

      
    </View>
  );
}
