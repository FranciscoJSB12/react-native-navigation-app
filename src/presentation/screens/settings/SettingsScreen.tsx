import { View, Text } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';

export const SettingScreen = () => {
  const navigator = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={{ marginBottom: 10 }}>Settings screen</Text>
      <PrimaryButton
        label='Regresar'
        onPress={() => navigator.goBack()}
      />
      <PrimaryButton
        label='Inicio'
        onPress={() => navigator.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};
