import React from 'react';
import {
  ActivityIndicator,
  ColorValue,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import styles, {
  indicatorDefaultColor,
  indicatorSize,
} from './LoadingIndicatorComponent.style';

type LoadingIndicatorComponentProps = {
  style?: StyleProp<ViewStyle>;
  color?: ColorValue;
};

const LoadingIndicatorComponent: React.VFC<LoadingIndicatorComponentProps> =
  p => {
    return (
      <View style={[styles.wrapper, p.style]}>
        <ActivityIndicator size={indicatorSize} color={p.color} />
      </View>
    );
  };

LoadingIndicatorComponent.defaultProps = {
  color: indicatorDefaultColor,
};

export default LoadingIndicatorComponent;
