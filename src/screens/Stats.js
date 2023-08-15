import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import { useQuery } from '@tanstack/react-query'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getHydroData } from '../api/sensorData'

const Stats = () => {
  const { colors } = useTheme()

  const airtempDataFetch = useQuery({
    queryKey: ['airtemp', { sensorName: 'airtemp', resAmount: 10 }],
    queryFn: getHydroData,
    refetchInterval: 1000 * 60 * 2
  })

  return (
    <SafeAreaView>
      <View>
        <Text style={{ color: colors.onSurface, fontSize: 18 }}>{airtempDataFetch.isSuccess && airtempDataFetch.data.documents.map((d) => Math.round(d.value) + ', ')}° F</Text>
      </View>
    </SafeAreaView>
  )
}

export default Stats

const styles = StyleSheet.create({})
