import React from 'react'
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import { BLACK, LIGHT_GRAY } from '../../styles/Colors';

export default function IconButton({Icon=FontIcon,name,onPress}) {
  return (
    <Icon
          name={name}
          size={22}
          style={{
            color:BLACK,
            alignSelf:'flex-start',
            paddingVertical:8,
            paddingHorizontal:13,
            borderWidth:2,
            borderColor:LIGHT_GRAY,
            borderRadius:10
          }}
          onPress={onPress}
        />
  )
}