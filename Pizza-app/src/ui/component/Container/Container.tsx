import type { FC, ReactElement, ReactNode } from "react";
import "./container.scss";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({
  children,
  className,
}): ReactElement => {
  return <div className={`container ${className}`}>{children}</div>;
};
