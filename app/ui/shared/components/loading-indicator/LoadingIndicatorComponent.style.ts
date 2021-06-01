import {StyleSheet} from "react-native";
import { COLOR_C } from "../../design/colors";

export const indicatorSize = 40;
export const indicatorDefaultColor = COLOR_C;

const styles = StyleSheet.create({
  wrapper: {
    width: indicatorSize,
    height: indicatorSize,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;
