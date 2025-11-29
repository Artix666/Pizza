import type { CSSProperties } from "react";
import type { ThemeColor } from "../theme";

export type IconProps = {
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  color?: ThemeColor;
  className?: string | undefined;
  width?: number;
  height?: number;
  textColor?: string;
  style?: CSSProperties;
  direction?: string;
};
