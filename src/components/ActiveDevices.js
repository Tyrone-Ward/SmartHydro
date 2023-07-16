import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

const DATA = [
  {
    id: '9907278b-a801-4873-b7a0-c32681d3e529',
    title: 'Light'
  },
  {
    id: '413c481c-ff7c-4669-bc2a-380cec485f41',
    title: 'Pump'
  },
  {
    id: '7147f5d6-cae1-4125-9c60-739fdcc1b6c2',
    title: 'Fan'
  },
  {
    id: 'c0195f11-65cd-461d-a071-263f2e468fe7',
    title: 'Heating mat'
  }
]

const ActiveDevices = () => {
  const { colors } = useTheme()

  const Item = ({ item }) => (
    <TouchableOpacity style={{ backgroundColor: colors.onSurface }}>
      <Text style={{ color: colors.onSurface }}>{item.title}</Text>
    </TouchableOpacity>
  )

  return (
    <View>
      <Text>ActiveDevices</Text>
    </View>
  )
}

export default ActiveDevices

const styles = StyleSheet.create({})
