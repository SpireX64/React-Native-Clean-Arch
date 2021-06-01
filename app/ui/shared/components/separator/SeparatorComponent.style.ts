import {StyleSheet} from 'react-native';
import { COLOR_B, COLOR_BLACK_20, COLOR_C } from "../../design/colors";
import {INDENT_XXXS} from '../../design/indents';

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: COLOR_B,
  },

  orientationH: {
    width: 1,
    height: '100%',
  },

  orientationV: {
    width: '100%',
    height: 1,
  },
});

export default styles;
