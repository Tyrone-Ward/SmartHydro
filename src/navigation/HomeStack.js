import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import CustomDarkTheme from '../themes/CustomDarkTheme'
import { DefaultTheme, NavigationContainer, useTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { IconLayoutDashboard, IconDeviceHeartMonitor, IconCalendarEvent, IconChartBar } from 'tabler-icons-react-native'
import Dashboard from '../screens/Dashboard'
import Devices from '../screens/Devices'
import Routines from '../screens/Routines'
import Stats from '../screens/Stats'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const HomeTabs = () => {
  const { colors } = useTheme()
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: colors.background }
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => {
            let iconColor = colors.onBackground
            return <IconLayoutDashboard color={iconColor} />
          }
        }}
      />
      <Tab.Screen
        name="Devices"
        component={Devices}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconColor = colors.onBackground
            return <IconDeviceHeartMonitor color={iconColor} />
          }
        }}
      />
      <Tab.Screen
        name="Routines"
        component={Routines}
        options={{
          tabBarBadge: 3,
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconColor = colors.onBackground
            return <IconCalendarEvent color={iconColor} />
          }
        }}
      />
      <Tab.Screen
        name="Stats"
        component={Stats}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconColor = colors.onBackground
            return <IconChartBar color={iconColor} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

const HomeStack = () => {
  const scheme = useColorScheme()
  console.log(scheme)
  return (
    <NavigationContainer theme={scheme === 'dark' ? CustomDarkTheme : DefaultTheme}>
      <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeStack

const styles = StyleSheet.create({})
