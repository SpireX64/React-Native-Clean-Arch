import React from 'react';
import {View} from 'react-native';
import styles from './SeparatorComponent.style';
import { getStyleByName } from "../../design/helpers";

export type SeparatorOrientation = 'H' | 'V';

type SeparatorComponentProps = {
  orientation?: SeparatorOrientation,
};

const SeparatorComponent: React.VFC<SeparatorComponentProps> = p => {
  const orientationStyle = getStyleByName(styles, `orientation${p.orientation}`);
  return (
    <View style={[styles.separator, orientationStyle]} />
  );
};

SeparatorComponent.defaultProps = {
  orientation: 'V',
};

export default SeparatorComponent;
