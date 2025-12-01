import type { FC, ReactElement, ReactNode } from "react";
import "./container.scss";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: number;
}

export const Container: FC<ContainerProps> = ({
  children,
  className,
  maxWidth,
}): ReactElement => {
  return (
    <div
      className={`container ${className}`}
      style={{
        maxWidth: maxWidth,
      }}
    >
      {children}
    </div>
  );
};
