import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SideMenuNavigator } from './src/presentation/routes/SideMenuNavigator';

export default function App() {
  return (
    <NavigationContainer>
      {/*<StackNavigator />*/}
      <SideMenuNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
