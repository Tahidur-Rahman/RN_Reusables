import Icon from 'react-native-vector-icons/FontAwesome5';
import {Text, View, TouchableNativeFeedback} from 'react-native';
import React, {useContext} from 'react';
import {BLACK, ORCHID, GRAY, MID_GRAY, WHITE} from '../styles/Colors';
import {REGULAR} from '../styles/Fonts';
import {moderateScale, SCREEN_WIDTH} from '../styles/Scalling';

export default function BottomTab({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: WHITE,
        borderTopColor: MID_GRAY,
        borderTopWidth: 0.4,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;
        const {name} = route;
        let iconName =
          name == 'Home'
            ? 'graduation-cap'
            : name == 'Profile'
            ? 'user-alt'
            : name == 'Practice'
            ? 'network-wired'
            : 'bell';
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              name,
              merge: true,
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableNativeFeedback
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.name}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 10,
              }}>
              <Icon
                name={iconName}
                color={isFocused ? ORCHID : MID_GRAY}
                size={moderateScale(isFocused ? 27 : 24)}
              />
              <Text
                style={{
                  fontFamily: REGULAR,
                  color: isFocused ? ORCHID : MID_GRAY,
                  marginTop: 7,
                  textTransform: 'uppercase',
                  fontSize: SCREEN_WIDTH * 0.026,
                }}>
                {name == "Home"?'Learn':name}
              </Text>
            </View>
          </TouchableNativeFeedback>
        );
      })}
    </View>
  );
}
