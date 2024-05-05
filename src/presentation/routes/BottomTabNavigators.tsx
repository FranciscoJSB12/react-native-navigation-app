import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';

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
        component={Tab2Screen}
      />
      <Tab.Screen
        name='Tab3Screen'
        options={{
          title: 'Tab3',
          tabBarIcon: ({ color }) => <Text style={{ color }}>Tab3</Text>,
        }}
        component={Tab3Screen}
      />
    </Tab.Navigator>
  );
};
