import React from "react";
import { ColorValue, Falsy, SafeAreaView, StatusBar, StatusBarStyle, StyleProp, View, ViewStyle } from "react-native";
import styles from './ScreenLayout.style';
import {OrientationLocker} from 'react-native-orientation-locker';

export type OrientationType =
  | 'UNLOCK'
  | 'PORTRAIT'
  | 'LANDSCAPE'
  | 'LANDSCAPE_LEFT'
  | 'LANDSCAPE_RIGHT';

export type ScreenLayoutProps = {
  style?: StyleProp<ViewStyle>;
  orientation?: OrientationType;
  noSafeArea?: boolean;
  statusBarStyle?: StatusBarStyle;
  statusBarBackground?: ColorValue;
  noStatusBar?: boolean;
  statusBarTranslucent?: boolean;
};

const ScreenLayout: React.FC<ScreenLayoutProps> = p => {
  const RootComponent = p.noSafeArea ? View : SafeAreaView;

  return (
    <RootComponent style={[styles.container, p.style]}>
      <StatusBar
        hidden={p.noStatusBar}
        barStyle={p.statusBarStyle}
        backgroundColor={p.statusBarBackground}
        translucent={p.statusBarTranslucent}
      />
      <OrientationLocker orientation={p.orientation} />
      <View style={styles.contentWrapper}>
        {p.children}
      </View>
    </RootComponent>
  );
};

ScreenLayout.defaultProps = {
  noSafeArea: false,
  style: null,
  orientation: 'PORTRAIT',
  noStatusBar: false,
  statusBarStyle: 'default',
  statusBarTranslucent: false,
};

export default ScreenLayout;
