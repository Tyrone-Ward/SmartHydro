import { StyleSheet, Text, View, FlatList, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@react-navigation/native'
import { IconBulb, IconFountain, IconPropeller, IconSunLow } from 'tabler-icons-react-native'

const DATA = [
  {
    id: 'power/lights',
    title: 'Light',
    iconName: IconBulb
  },
  {
    id: 'power/pump',
    title: 'Pump',
    iconName: IconFountain
  },
  {
    id: 'power/fan',
    title: 'Fan',
    iconName: IconPropeller
  },
  {
    id: 'power/heatmat',
    title: 'Heating mat',
    iconName: IconSunLow
  }
]

const Item = ({ title, iconName, id }) => {
  const { colors } = useTheme()

  const [isEnabled, setIsEnabled] = useState(false)

  const extensionMap = { true: 'on', false: 'off' }
  const textElem = React.createElement(iconName, { color: colors.onSurface }) // create a React element with the given type and props

  const toggleSwitch = (value) => {
    console.log(id, extensionMap[value])
    setIsEnabled((previousState) => !previousState)
  }

  return (
    <View style={{ flex: 1, height: 100, width: 125, borderRadius: 15, backgroundColor: colors.surfaceContainerHighest, marginRight: 10 }}>
      <View style={{ flexDirection: 'row', height: '50%', justifyContent: 'space-between', paddingTop: 5, paddingHorizontal: 3 }}>
        {/* {iconName} */}
        {textElem}
        <Switch
          trackColor={{ false: '#767577', true: colors.secondary }}
          thumbColor={isEnabled ? colors.surfaceContainerHighest : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
        />
      </View>
      <View style={{ height: '50%' }}>
        <Text style={{ color: colors.onSurface, paddingTop: 10, paddingLeft: 10 }}>{title}</Text>
      </View>
    </View>
  )
}

const ActiveDevices = () => {
  return (
    <View>
      <FlatList horizontal={true} data={DATA} renderItem={({ item }) => <Item title={item.title} iconName={item.iconName} id={item.id} />} keyExtractor={(item) => item.id} />
    </View>
  )
}

export default ActiveDevices
