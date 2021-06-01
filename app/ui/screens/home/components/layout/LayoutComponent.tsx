import React from "react";
import styles from './LayoutComponent.style';
import { View } from "react-native";

type LayoutComponentProps = {

}

const LayoutComponent: React.FC<LayoutComponentProps> = (p) => (
  <View style={styles.container}>
    {p.children}
  </View>
);

export default LayoutComponent;
