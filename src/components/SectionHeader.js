import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'

const SectionHeader = (props) => {
  const { colors } = useTheme()
  const navigation = useNavigation()

  const leftText = props.leftText ?? 'Left Text'
  const rightText = props.rightText ?? 'Right Text'
  const rightTextTargetLocation = props.rightTextTargetLocation ?? 'Dashboard'

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ color: colors.onSurface }}>{leftText}</Text>
      <Pressable
        onPress={() => {
          navigation.navigate(rightTextTargetLocation)
        }}
      >
        <Text style={{ color: colors.onSurface }}>{rightText} →</Text>
      </Pressable>
    </View>
  )
}

export default SectionHeader

const styles = StyleSheet.create({})
