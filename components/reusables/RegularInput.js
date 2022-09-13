import React from "react";
import { View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { BLACK, LIGHT_GRAY, MID_GRAY, ORCHID, WHITE } from "../../styles/Colors";
import { REGULAR } from "../../styles/Fonts";
export default function RegularInput({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  value,
  onChangeText,
  ...props
}) {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{marginBottom:25}} >
      {(isFocused || value) && <Text
        style={{
          fontFamily: REGULAR,
          color:MID_GRAY,
          fontSize: 14,
          backgroundColor:WHITE,
          top:-8,
          position:'absolute',
          paddingHorizontal:8,
          zIndex:2,
          marginLeft:20
        }}
      >
        {label}
      </Text>}
      <TextInput
        autoCorrect={false}
        onFocus={() => {
          onFocus();
          setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={hidePassword}
        placeholder={isFocused ? "" : label}
        value={value}
        placeholderTextColor={MID_GRAY}
        style={{
          borderColor: error ? "red" : isFocused ? ORCHID : LIGHT_GRAY,
          borderWidth: 1.4,
          borderRadius: 10,
          height: 55,
          paddingLeft: 20,
          color: BLACK,
          fontFamily: REGULAR,
          letterSpacing: (password && hidePassword)?2:.4,
          fontSize: 15,
          position: "relative",
        }}
        onChangeText={onChangeText}
        {...props}
      />
        {/* <Icon
          name={iconName}
          style={{ color: MID_GRAY, fontSize: 22, marginRight: 10 }}
        /> */}
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            style={{
              color: MID_GRAY,
              fontSize: 22,
              position: "absolute",
              right: 10,
              top:16
            }}
          />
        )}
      {error && (
        <Text style={{ marginTop: 7, color: "red", fontSize: 12 }}>
          {error}
        </Text>
      )}
    </View>
  );
}
