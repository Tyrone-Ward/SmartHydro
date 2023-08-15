import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import SectionHeader from '../components/SectionHeader'
import { useQuery } from '@tanstack/react-query'
import { getHydroData } from '../api/sensorData'

const QuickStats = () => {
  const { colors } = useTheme()

  const airtempDataFetch = useQuery({
    queryKey: ['airtemp', { sensorName: 'airtemp', resAmount: 1 }],
    queryFn: getHydroData,
    refetchInterval: 1000 * 60 * 2
  })

  const sensorDataQuery2 = useQuery({
    queryKey: ['sensor', { sensorName: 'resTemp', resAmount: 1 }],
    queryFn: getHydroData,
    refetchInterval: 1000 * 60
  })

  const sensorDataQuery3 = useQuery({
    queryKey: ['sensor', { sensorName: 'ec', resAmount: 1 }],
    queryFn: getHydroData,
    refetchInterval: 1000 * 60 * 2
  })

  const sensorDataQuery4 = useQuery({
    queryKey: ['sensor', { sensorName: 'humidity', resAmount: 1 }],
    queryFn: getHydroData,
    refetchInterval: 1000 * 60
  })

  return (
    <View style={{ flex: 0.25, justifyContent: 'center', paddingBottom: 20 }}>
      <SectionHeader leftText={'Quick Stats'} rightText={'More stats'} rightTextTargetLocation={'Stats'} />
      {/* <Text style={[styles.greeting, { color: colors.onBackground }]}>Good morning.</Text> */}
      <View style={[styles.quickStats]}>
        <View style={[styles.leftBox, { backgroundColor: colors.secondary }]}>
          <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
            <Text style={{ color: colors.onSecondary, fontSize: 18 }}>Air Temp</Text>
            <Text style={{ color: colors.onSecondary, fontSize: 18 }}>{airtempDataFetch.isSuccess && airtempDataFetch.data.documents.map((d) => Math.round(d.value))}° F</Text>
          </View>
        </View>
        <View style={[styles.middleBox, { backgroundColor: colors.secondary }]}>
          <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
            <Text style={{ color: colors.onSecondary, fontSize: 18 }}>Humidity</Text>
            <Text style={{ color: colors.onSecondary, fontSize: 18 }}>{sensorDataQuery4.isSuccess && sensorDataQuery4.data.documents.map((d) => Math.round(d.value))}%</Text>
          </View>
        </View>
        <View style={[styles.righttBox, { backgroundColor: colors.secondary }]}>
          <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
            <Text style={{ color: colors.onSecondary, fontSize: 18 }}>pH</Text>
            <Text style={{ color: colors.onSecondary, fontSize: 18 }}>5.4</Text>
          </View>
        </View>
      </View>
      <View style={styles.quickStatsSecondRow}>
        <View style={[styles.secondRowLeftBox, { backgroundColor: colors.secondary }]}>
          <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
            <Text style={{ color: colors.onSecondary, fontSize: 18 }}>EC</Text>
            <Text style={{ color: colors.onSecondary, fontSize: 18 }}>{sensorDataQuery3.isSuccess && sensorDataQuery3.data.documents.map((d) => Math.round(d.value))} μS</Text>
          </View>
        </View>
        <View style={[styles.middleBox, { backgroundColor: colors.secondary }]}>
          <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
            <Text style={{ color: colors.onSecondary, fontSize: 18 }}>Res Level</Text>
            <Text style={{ color: colors.onSecondary, fontSize: 18 }}>90%</Text>
          </View>
        </View>
        <View style={[styles.secondRowRightBox, { backgroundColor: colors.secondary }]}>
          <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
            <Text style={{ color: colors.onSecondary, fontSize: 18 }}>Res Temp</Text>
            <Text style={{ color: colors.onSecondary, fontSize: 18 }}>{sensorDataQuery2.isSuccess && sensorDataQuery2.data.documents.map((d) => Math.round(d.value))} °F</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default QuickStats

const styles = StyleSheet.create({
  greeting: {
    // paddingBottom: 20,
    fontSize: 45
  },
  quickStats: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // flex: 0.1,
    height: '48%'
  },
  leftBox: {
    width: '32%',
    // borderWidth: 1,
    borderTopLeftRadius: 10
  },
  middleBox: {
    width: '32%'
    // borderWidth: 1
  },
  righttBox: {
    width: '32%',
    borderTopRightRadius: 10
  },
  quickStatsSecondRow: {
    height: '48%',
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around'
    // flex: 0.1
  },
  secondRowLeftBox: {
    width: '32%',
    borderBottomLeftRadius: 10
  },
  secondRowRightBox: {
    width: '32%',
    borderBottomRightRadius: 10
  }
})
