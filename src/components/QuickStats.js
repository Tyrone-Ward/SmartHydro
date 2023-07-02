import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

const QuickStats = () => {
  const { colors } = useTheme()

  return (
    <View style={{ flex: 1 }}>
      <Text style={[styles.greeting, { color: colors.onBackground }]}>Good morning.</Text>
      <View style={styles.quickStats}>
        <View style={[styles.leftBox, { backgroundColor: colors.secondary }]}>
          <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
            <Text style={{ color: colors.onSecondary, fontSize: 18 }}>Air Temp</Text>
            <Text style={{ color: colors.onSecondary, fontSize: 18 }}>75°F</Text>
          </View>
        </View>
        <View style={[styles.middleBox, { backgroundColor: colors.secondary }]}>
          <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
            <Text style={{ color: colors.onSecondary, fontSize: 18 }}>Humidity</Text>
            <Text style={{ color: colors.onSecondary, fontSize: 18 }}>90%</Text>
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
            <Text style={{ color: colors.onSecondary, fontSize: 18 }}>75°F</Text>
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
            <Text style={{ color: colors.onSecondary, fontSize: 18 }}>74°F</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default QuickStats

const styles = StyleSheet.create({
  greeting: {
    paddingBottom: 20,
    fontSize: 45
  },
  quickStats: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 0.1
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
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 0.1
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
