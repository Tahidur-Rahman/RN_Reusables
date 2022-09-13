import { View, Modal,Pressable,StatusBar } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_PADDING, SCREEN_WIDTH } from '../../styles/Scalling'
import { OVERLAY, WHITE } from '../../styles/Colors'

export default function MyModal({visible,onBackDropPress,children,overlayStyle}) {
  return (
    <Modal
        animationType="none"
        transparent
        visible={visible}
        statusBarTranslucent
      >
        <Pressable
          style={{
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT+StatusBar.currentHeight,
            backgroundColor: OVERLAY,
            alignItems:'center',
            justifyContent:'center'
          }}
          onPress={onBackDropPress}
        >
          <View
            style={{
              backgroundColor: WHITE,
              width: SCREEN_WIDTH-60,
              padding: SCREEN_PADDING ,
              borderRadius: 15,
              ...overlayStyle
            }}
          >
            {children}
          </View>
        </Pressable>
      </Modal>
  )
}