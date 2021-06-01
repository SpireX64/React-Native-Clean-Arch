import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text, View} from 'react-native';
import {getStyleByName} from '../../design/helpers';
import styles from './ButtonComponent.style';

type ButtonSize = 'SM' | 'MD' | 'LG';
type ButtonStyle =
  | 'Default'
  | 'Primary'
  | 'Secondary'
  | 'Light'
  | 'Danger'
  | 'Success';

type ButtonComponentProps = {
  text: string;
  size?: ButtonSize;
  style?: ButtonStyle;
  disabled?: boolean;
  onPress: () => void;
};

const ButtonComponent: React.VFC<ButtonComponentProps> = p => {
  const containerStyle = getStyleByName(styles, `containerStyle${p.style}`);
  const containerSize = getStyleByName(styles, `containerSize${p.size}`);
  const labelStyle = getStyleByName(styles, `labelStyle${p.style}`);
  return (
    <TouchableOpacity
      style={[styles.container, containerSize, containerStyle]}
      activeOpacity={0.67}
      onPress={p.onPress}>
      <View style={styles.contentLayout}>
        <Text style={[styles.label, labelStyle]}>{p.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

ButtonComponent.defaultProps = {
  size: 'MD',
  style: 'Default',
  disabled: false,
};

export default ButtonComponent;
