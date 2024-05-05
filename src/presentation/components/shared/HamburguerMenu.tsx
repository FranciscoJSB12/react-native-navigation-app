import { useEffect } from 'react';
import { Pressable, Text } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export const HamburguerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
        >
          <Text>Menú</Text>
        </Pressable>
      ),
    });
  }, []);

  return <></>;
};
