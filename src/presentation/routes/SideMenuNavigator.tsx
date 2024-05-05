import { View, Text, useWindowDimensions } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BottomTabNavigators } from './BottomTabNavigators';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: dimensions.width >= 758 ? 'permanent' : 'front',
        headerShown: false,
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}
    >
      <Drawer.Screen
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons
              name='airplane-outline'
              size={size}
              color={color}
            />
          ),
        }}
        name='Tabs'
        component={BottomTabNavigators}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons
              name='person-outline'
              size={size}
              color={color}
            />
          ),
        }}
        name='Profile'
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 50,
        }}
      />
      <DrawerItemList {...props} />
      <Text>Hola mundo</Text>
    </DrawerContentScrollView>
  );
};
