import { ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'
import { IconBulb, IconFountain, IconPropeller, IconSunLow } from 'tabler-icons-react-native'
import QuickStats from '../components/QuickStats'
import SectionHeader from '../components/SectionHeader'
import ActiveDevices from '../components/ActiveDevices'

const Dashboard = () => {
  const { colors } = useTheme()

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <QuickStats />
      <View style={{ flex: 0.45 }}>
        <SectionHeader leftText={'Active Devices'} rightText={'See all'} rightTextTargetLocation={'Devices'} />
        <ActiveDevices />
        {/* <FlatList horizontal={true} data={DATA} renderItem={({ item }) => <Item title={item.title} iconName={item.iconName} id={item.id} />} keyExtractor={(item) => item.id} /> */}
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
