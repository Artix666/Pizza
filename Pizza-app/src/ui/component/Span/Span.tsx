import type { FC, MouseEvent, ReactElement, ReactNode } from "react";
import "./span.scss";

interface SpanProps {
  color?:
    | "black"
    | "white"
    | "snow-white"
    | "light-black"
    | "gray"
    | "light-gray"
    | "dark-gray"
    | "orange";

  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLSpanElement>) => void;
}

export const Span: FC<SpanProps> = ({
  color,
  children,
  className,
  onClick,
}): ReactElement => {
  const defaultColor = color || "black";
  return (
    <span
      className={`text text--${defaultColor} ${className}`}
      onClick={onClick}
    >
      {children}
    </span>
  );
};
