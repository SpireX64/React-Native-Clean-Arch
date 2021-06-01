import { Falsy, ImageStyle, TextStyle, ViewStyle } from "react-native";

export function condStyle<T extends Record<string, any>>(styles: T, conditions: Partial<Record<keyof T, boolean>>) {
  const styleNames: string[] = Object.entries(conditions)
    .filter(cond => !!cond[1])
    .map(e => e[0]);

  return styleNames.map(name => styles[name]);
}

export function getStyleByName<T extends Record<string, ViewStyle | TextStyle | ImageStyle>>(
  fromStyles: T,
  name: keyof T | string
) : ViewStyle | TextStyle | ImageStyle | Falsy {
  return fromStyles[name] ?? null;
}
