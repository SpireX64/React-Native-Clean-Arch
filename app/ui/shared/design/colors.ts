import Color from 'color';

// MAIN
export const COLOR_A = '#F2F0F1';
export const COLOR_B = '#8D9F8E';
export const COLOR_C = '#FFC600';
export const COLOR_D = '#A8503B';
export const COLOR_E = '#201F24';

// COLORS
export const COLOR_RED = '#F44336';
export const COLOR_PINK = '#E91E63'
export const COLOR_PURPLE = '#9C27B0';
export const COLOR_DEEP_PURPLE = '#673AB7';
export const COLOR_INDIGO = '#3F51B5';
export const COLOR_BLUE = '#2196F3';
export const COLOR_LIGHT_BLUE = '#03A9F4';
export const COLOR_CYAN = '#00BCD4';
export const COLOR_TEAL = '#009688';
export const COLOR_GREEN = '#4CAF50';
export const COLOR_LIGHT_GREEN = '#8BC34A';
export const COLOR_LIME = '#CDDC39';
export const COLOR_YELLOW = '#FFEB3B';
export const COLOR_AMBER = '#FFC107';
export const COLOR_ORANGE = '#FF9800';
export const COLOR_DEEP_ORANGE = '#FF5722';

// BLACK
export const COLOR_BLACK_10 = '#000000';
export const COLOR_BLACK_20 = '#121212';
export const COLOR_BLACK_30 = '#1A1A1A';
export const COLOR_BLACK_40 = '#212121';
export const COLOR_BLACK_50 = '#383838';

// GRAY
export const COLOR_GRAY_10 = '#515151';
export const COLOR_GRAY_20 = '#616161';
export const COLOR_GRAY_30 = '#707070';
export const COLOR_GRAY_40 = '#808080';
export const COLOR_GRAY_50 = '#8F8F8F';
export const COLOR_GRAY_60 = '#9E9E9E';
export const COLOR_GRAY_70 = '#ADADAD';
export const COLOR_GRAY_80 = '#BDBDBD';

// WHITE
export const COLOR_WHITE_10 = '#FAFAFA';
export const COLOR_WHITE_20 = '#F3F3F3';
export const COLOR_WHITE_30 = '#EFEFEF';
export const COLOR_WHITE_40 = '#E0E0E0';
export const COLOR_WHITE_50 = '#CCCCCC';


// HELPERS
export const alpha = (color: string, a: number) =>
  Color(color).alpha(a).hex();
