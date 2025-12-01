import "./index.scss";

export type ThemeColor =
  | "orange"
  | "white"
  | "snow-white"
  | "black"
  | "light-black"
  | "gray"
  | "light-gray"
  | "dark-gray";

export const colorCSSVars: { [k in ThemeColor]: string } = {
  orange: "var(--orange)",
  white: "var(--white)",
  "snow-white": "var(--snow-white)",
  black: "var(--black)",
  "light-black": "var(--light-black)",
  gray: "var(--gray)",
  "light-gray": "var(--light-gray)",
  "dark-gray": "var(--dark-gray)",
};

export const getCSSVar = (color?: ThemeColor) =>
  color ? colorCSSVars[color] : undefined;
