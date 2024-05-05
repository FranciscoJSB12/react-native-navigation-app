import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { ProductScreen } from '../screens/products/ProductScreen';
import { SettingScreen } from '../screens/settings/SettingsScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          //Para quitar la línea en ios usamos shadowColor: 'transparent'
          shadowColor: 'transparent',
        },
      }}
    >
      <Stack.Screen
        name='Home'
        component={HomeScreen}
      />
      <Stack.Screen
        name='Products'
        component={ProductsScreen}
      />
      <Stack.Screen
        name='Product'
        component={ProductScreen}
      />
      <Stack.Screen
        name='Settings'
        component={SettingScreen}
      />
    </Stack.Navigator>
  );
};
