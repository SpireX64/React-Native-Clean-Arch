import React from 'react';
import { Falsy, Text, View } from "react-native";
import styles from './NavBarComponent.style';
import {default as IconButton} from '../icon-button/IconButtonComponent';
import {ICON_ARROW_BACK} from '../../design/icons';

type NavbarComponentProps = {
  title?: string | Falsy;
  onBackPress: () => void;
};

const NavBarComponent: React.VFC<NavbarComponentProps> = p => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <IconButton icon={ICON_ARROW_BACK} onPress={p.onBackPress} />
        {!!p.title && <Text style={styles.title}>{p.title}</Text>}
      </View>
    </View>
  );
};

NavBarComponent.defaultProps = {
  title: null,
};

export default NavBarComponent;
