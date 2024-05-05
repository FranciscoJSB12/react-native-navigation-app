import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
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
        tabBarActiveTintColor: globalColors.primary,
        //headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 4,
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
          tabBarIcon: ({ size, color }) => (
            <Ionicons
              name='heart-outline'
              size={size}
              color={color}
            />
          ),
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name='Tab2Screen'
        options={{
          title: 'Tab2',
          tabBarIcon: ({ size, color }) => (
            <Ionicons
              name='rocket-outline'
              size={size}
              color={color}
            />
          ),
        }}
        component={TopTabNavigator}
      />
      <Tab.Screen
        name='Tab3Screen'
        options={{
          title: 'Tab3',
          tabBarIcon: ({ size, color }) => (
            <Ionicons
              name='accessibility-outline'
              size={size}
              color={color}
            />
          ),
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
