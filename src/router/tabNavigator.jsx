import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CATEGORIES, FAVORITES, HOME, PROFILE} from '../utils/routes';
import Home from '../screens/home';
import Profile from '../screens/profile';
import Favorites from '../screens/favorites';
import Categories from '../screens/categories';
import {AppColors} from '../theme/colors';
import TabIcon from '../components/router/tabIcon';
import HeaderTabRight from '../components/router/headerTabRight';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            focused={focused}
            color={color}
            size={size}
            name={route?.name}
            route={route}
          />
        ),
        headerRight: ({focused, color, size}) => <HeaderTabRight />,
        tabBarActiveTintColor: AppColors.PRIMARY,
        tabBarInactiveTintColor: AppColors.GRAY,
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={PROFILE} component={Profile} />
      <Tab.Screen name={FAVORITES} component={Favorites} />
      <Tab.Screen name={CATEGORIES} component={Categories} />
    </Tab.Navigator>
  );
}
