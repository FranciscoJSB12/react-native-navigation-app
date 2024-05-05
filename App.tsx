import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SideMenuNavigator } from './src/presentation/routes/SideMenuNavigator';

export default function App() {
  return (
    <NavigationContainer>
      {/*<StackNavigator />*/}
      <SideMenuNavigator />
      {/* <BottomTabNavigators /> */}
    </NavigationContainer>
  );
}
