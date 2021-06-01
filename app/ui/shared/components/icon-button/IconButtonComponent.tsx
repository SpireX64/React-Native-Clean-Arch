import React from 'react';
import IconComponent, {IconSize} from '../icon/IconComponent';
import {TouchableOpacity} from 'react-native';
import styles from './IconButtonComponent.style';

type IconButtonComponentProps = {
  icon: string;
  size?: IconSize;
  onPress?: () => void;
};

const IconButtonComponent: React.VFC<IconButtonComponentProps> = p => (
  <TouchableOpacity
    style={styles.wrapper}
    activeOpacity={0.67}
    onPress={p.onPress}>
    <IconComponent name={p.icon} size={p.size} />
  </TouchableOpacity>
);

IconButtonComponent.defaultProps = {
  size: 'MD',
};

export default IconButtonComponent;
