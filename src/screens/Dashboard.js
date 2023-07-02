import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'
import QuickStats from '../components/QuickStats'

const Dashboard = () => {
  const { colors } = useTheme()

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={{ backgroundColor: 'orange' }}> */}
      <QuickStats />
      {/* </ScrollView> */}
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
