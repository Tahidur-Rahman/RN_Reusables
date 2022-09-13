import { View, Modal,Pressable,StatusBar } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_PADDING, SCREEN_WIDTH } from '../../styles/Scalling'
import { OVERLAY, WHITE } from '../../styles/Colors'

export default function BottomSheet({visible,onBackDropPress,children,overlayStyle}) {
  return (
    <Modal
        animationType="slide"
        transparent
        visible={visible}
        statusBarTranslucent
      >
        <Pressable
          style={{
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT+StatusBar.currentHeight,
            backgroundColor: OVERLAY,
          }}
          onPress={onBackDropPress}
        >
          <View
            style={{
              backgroundColor: WHITE,
              position: "absolute",
              bottom: 0,
              width: SCREEN_WIDTH,
              padding: SCREEN_PADDING + 20,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              ...overlayStyle
            }}
          >
            {children}
          </View>
        </Pressable>
      </Modal>
  )
}