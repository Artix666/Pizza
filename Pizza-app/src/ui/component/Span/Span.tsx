import type { FC, ReactElement, ReactNode } from "react";
import "./span.scss";

interface SpanProps {
  color?: "white" | "light-black" | "light-gray" | 'orange';
  children: ReactNode;
  className?: string;
}

export const Span: FC<SpanProps> = ({
  color,
  children,
  className,
}): ReactElement => {
  return <span className={`text text--${color} ${className}`}>{children}</span>;
};
