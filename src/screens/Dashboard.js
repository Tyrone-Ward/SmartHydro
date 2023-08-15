import { ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'
import { IconBulb, IconFountain, IconPropeller, IconSunLow } from 'tabler-icons-react-native'
import QuickStats from '../components/QuickStats'
import SectionHeader from '../components/SectionHeader'

const DATA = [
  {
    id: 'power/lights',
    title: 'Light',
    iconName: <IconBulb />
  },
  {
    id: 'power/pump',
    title: 'Pump',
    iconName: <IconFountain />
  },
  {
    id: 'power/fan',
    title: 'Fan',
    iconName: <IconPropeller />
  },
  {
    id: 'power/heatmat',
    title: 'Heating mat',
    iconName: <IconSunLow />
  }
]

const Item = ({ title, iconName, id }) => {
  const { colors } = useTheme()
  const [isEnabled, setIsEnabled] = useState(false)

  const extensionMap = { true: 'on', false: 'off' }

  const toggleSwitch = (value) => {
    console.log(id, extensionMap[value])
    setIsEnabled((previousState) => !previousState)
  }

  return (
    <View style={{ flex: 1, height: 100, width: 125, borderRadius: 15, backgroundColor: colors.surfaceContainerHighest, marginRight: 10 }}>
      <View style={{ flexDirection: 'row', height: '50%', justifyContent: 'space-between', paddingTop: 5, paddingHorizontal: 3 }}>
        {iconName}
        <Switch
          trackColor={{ false: '#767577', true: colors.secondary }}
          thumbColor={isEnabled ? colors.surfaceContainerHighest : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ transform: [{ scaleX: 0.5 }, { scaleY: 0.5 }] }}
        />
      </View>
      <View style={{ height: '50%' }}>
        <Text style={{ color: colors.onSurface, paddingTop: 10, paddingLeft: 10 }}>{title}</Text>
      </View>
    </View>
  )
}

const Dashboard = ({ navigation }) => {
  const { colors } = useTheme()

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <QuickStats />
      <View style={{ flex: 0.45 }}>
        <SectionHeader leftText={'Active Devices'} rightText={'See all'} rightTextTargetLocation={'Devices'} />
        <FlatList horizontal={true} data={DATA} renderItem={({ item }) => <Item title={item.title} iconName={item.iconName} id={item.id} />} keyExtractor={(item) => item.id} />
      </View>
      <View style={{ flex: 0.255 }}></View>
    </SafeAreaView>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'purple',
    paddingHorizontal: 8,
    paddingTop: 25
  }
})
