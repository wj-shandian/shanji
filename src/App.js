/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Icon} from './component/index';
import Home from './pages/home';
import User from './pages/user';
import ChargeAccount from './pages/chargeAccount';
import SelectStatus from './pages/selectStatus';
import Weather from './pages/weather';
import RecordInsights from './pages/recordInsights';
const Stack = createNativeStackNavigator();
const {Navigator, Screen} = Stack;
const Tab = createBottomTabNavigator();
const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'icon-shuxiebianxie';
          } else if (route.name === 'ChargeAccount') {
            iconName = 'icon-bizui';
          } else if (route.name === 'User') {
            iconName = 'icon-wode-wode';
          }
          return (
            <Icon
              name={iconName}
              size={size}
              color={focused ? '#333333' : color}
            />
          );
        },
        tabBarActiveTintColor: '#333333',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '感悟',
        }}
      />
      <Tab.Screen
        name="ChargeAccount"
        component={ChargeAccount}
        options={{
          title: '目标',
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          title: '我的',
        }}
      />
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={TabScreen}
          options={{headerShown: false}}
        />
        <Screen
          name="SelectStatus"
          component={SelectStatus}
          options={{headerShown: false}}
        />
        <Screen
          name="Weather"
          component={Weather}
          options={{headerShown: false}}
        />
        <Screen
          name="RecordInsights"
          component={RecordInsights}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
