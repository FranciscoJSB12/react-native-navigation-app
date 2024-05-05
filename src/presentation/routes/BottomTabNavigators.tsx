import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { globalColors } from '../theme/theme';
import { TopTabNavigator } from './TopTabNavigator';
import { StackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

export const BottomTabNavigators = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        //headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 10,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name='Tab1Screen'
        options={{
          title: 'Tab1',
          tabBarIcon: ({ color }) => <Text style={{ color }}>Tab1</Text>,
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name='Tab2Screen'
        options={{
          title: 'Tab2',
          tabBarIcon: ({ color }) => <Text style={{ color }}>Tab2</Text>,
        }}
        component={TopTabNavigator}
      />
      <Tab.Screen
        name='Tab3Screen'
        options={{
          title: 'Tab3',
          tabBarIcon: ({ color }) => <Text style={{ color }}>Tab3</Text>,
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
