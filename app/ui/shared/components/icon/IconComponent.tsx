import React, {useMemo} from 'react';
import { Image, ImageStyle, StyleProp } from "react-native";
import icons from '../../design/icons';
import {getStyleByName} from '../../design/helpers';
import styles from './IconComponent.style';

export type IconSize = 'SM' | 'MD' | 'LG';

type IconComponentProps = {
  name: string;
  size?: IconSize;
  style?: StyleProp<ImageStyle>;
};

const IconComponent: React.VFC<IconComponentProps> = p => {
  const iconSizeStyle = getStyleByName(styles, `size${p.size}`) as ImageStyle;
  const image = useMemo(() => icons[p.name], [p.name]);

  return (
    <Image style={[iconSizeStyle, p.style]} source={image} />
  );
};

IconComponent.defaultProps = {
  size: 'MD',
  style: null,
};

export default IconComponent;
