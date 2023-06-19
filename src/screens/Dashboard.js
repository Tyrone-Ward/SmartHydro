import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'

const Dashboard = () => {
  const { colors } = useTheme()

  return (
    <SafeAreaView>
      <View>
        <Text style={{ color: colors.onBackground }}>Dashboard</Text>
      </View>
    </SafeAreaView>
  )
}

export default Dashboard

const styles = StyleSheet.create({})
