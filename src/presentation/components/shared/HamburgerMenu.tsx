import { useEffect } from 'react';
import { Pressable } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
          style={{ marginLeft: 5 }}
        >
          <Ionicons
            name='menu-sharp'
            size={30}
            color='gray'
          />
        </Pressable>
      ),
    });
  }, []);

  return <></>;
};
