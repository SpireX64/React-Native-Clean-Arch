import {StyleSheet} from "react-native";
import { COLOR_A, COLOR_BLACK_20 } from "../../design/colors";
import { INDENT_MD, INDENT_XXXS } from "../../design/indents";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    backgroundColor: COLOR_BLACK_20,
    paddingHorizontal: INDENT_MD,
    paddingVertical: INDENT_XXXS,
  },

  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    color: COLOR_A,
    fontSize: 20,
    marginStart: INDENT_MD,
  },
});

export default styles;
