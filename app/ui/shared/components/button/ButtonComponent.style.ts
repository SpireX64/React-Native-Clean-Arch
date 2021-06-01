import {StyleSheet} from 'react-native';
import { INDENT_MD, INDENT_SM, INDENT_XS, INDENT_XXS, INDENT_XXXS } from "../../design/indents";
import { COLOR_A, COLOR_B, COLOR_C, COLOR_D, COLOR_E, COLOR_RED } from "../../design/colors";

const styles = StyleSheet.create({
  contentLayout: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },

  label: {
    position: 'absolute',
    textTransform: 'uppercase',
    textAlign: 'center',
  },

  // =============================================================
  // Sizes
  // =============================================================

  // SM (Small) ----------------------------------
  containerSizeSM: {
    minWidth: 70,
    height: 18,
    paddingVertical: INDENT_XXXS,
    paddingHorizontal: INDENT_XXS,
  },

  // MD (Medium) ----------------------------------
  containerSizeMD: {
    minWidth: 96,
    height: 28,
    paddingVertical: INDENT_XXS,
    paddingHorizontal: INDENT_SM,
  },

  // LG (Large) ----------------------------------
  containerSizeLG: {
    minWidth: 114,
    height: 40,
    paddingVertical: INDENT_XS,
    paddingHorizontal: INDENT_MD,
  },

  // =============================================================
  // Styles
  // =============================================================

  // Default ----------------------------------
  containerStyleDefault: {
    backgroundColor: COLOR_B,
  },
  labelStyleDefault: {
    color: COLOR_A,
  },

  // Primary ----------------------------------
  containerStylePrimary: {
    backgroundColor: COLOR_C,
  },
  labelStylePrimary: {
    color: COLOR_E,
  },

  // Secondary ----------------------------------
  containerStyleSecondary: {
    backgroundColor: COLOR_D,
  },
  labelStyleSecondary: {
    color: COLOR_A,
  },

  // Light ----------------------------------
  containerStyleLight: {
    backgroundColor: COLOR_A,
  },
  labelStyleLight: {
    color: COLOR_E,
  },

  // Danger ----------------------------------
  containerStyleDanger: {
    backgroundColor: COLOR_RED,
  },
  labelStyleDanger: {
    color: COLOR_A,
  },

  // Success ----------------------------------
  containerStyleSuccess: {
    backgroundColor: COLOR_RED,
  },
  labelStyleSuccess: {
    color: COLOR_A,
  },
});

export default styles;
