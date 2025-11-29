import type { FC, MouseEvent, ReactElement, ReactNode } from "react";
import "./span.scss";

interface SpanProps {
  color?: "white" | "light-black" | "light-gray" | "orange";
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
  return (
    <span className={`text text--${color} ${className}`} onClick={onClick}>
      {children}
    </span>
  );
};
