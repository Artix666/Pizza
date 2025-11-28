import "./index.scss";

export type ThemeColor =
  | "orange"
  | "white"
  | "black"
  | "light-black"
  | "gray"
  | "light-gray";

export const colorCSSVars: { [k in ThemeColor]: string } = {
  orange: "var(--orange)",
  white: "var(--white)",
  black: "var(--black)",
  "light-black": "var(--light-black)",
  gray: "var(--gray)",
  "light-gray": "var(--light-gray)",
};

export const getCSSVar = (color?: ThemeColor) =>
  color ? colorCSSVars[color] : undefined;
