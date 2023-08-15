import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import CustomDarkTheme from '../themes/CustomDarkTheme'
import CustomLightTheme from '../themes/CustomLightTheme'
import { NavigationContainer, useTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { IconLayoutDashboard, IconDeviceHeartMonitor, IconCalendarEvent, IconChartBar } from 'tabler-icons-react-native'
import Dashboard from '../screens/Dashboard'
import Devices from '../screens/Devices'
import Routines from '../screens/Routines'
import Stats from '../screens/Stats'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const tabs = [
  {
    name: 'Dashboard',
    component: Dashboard,
    label: 'Dashboard',
    iconName: IconLayoutDashboard
  },
  {
    name: 'Devices',
    component: Devices,
    label: 'Devices',
    iconName: IconDeviceHeartMonitor
  },
  {
    name: 'Routines',
    component: Routines,
    label: 'Routines',
    iconName: IconCalendarEvent
  },
  {
    name: 'Stats',
    component: Stats,
    label: 'Stats',
    iconName: IconChartBar
  }
]

const HomeTabs = () => {
  const { colors } = useTheme()
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: colors.background }
      }}
    >
      <Tab.Group screenOptions={{ headerShown: false }}>
        {tabs.map(({ name, component, label, iconName }) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={component}
              options={{
                tabBarIcon: ({ focused, color }) => {
                  let iconColor = colors.onBackground
                  return React.createElement(iconName, { color: colors.onSurface })
                }
              }}
            />
          )
        })}
      </Tab.Group>
    </Tab.Navigator>
  )
}

const HomeStack = () => {
  const scheme = useColorScheme()
  console.log(scheme)
  return (
    <NavigationContainer theme={scheme === 'dark' ? CustomDarkTheme : CustomLightTheme}>
      <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeStack

const styles = StyleSheet.create({})
