import { type FC, type ReactElement, type ReactNode } from "react";
import "./button.scss";

interface ButtonProps {
  type: "filled" | "transparent";
  backgroundColor?: "orange" | "light-black" | "light-gray";
  children: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

export const Button: FC<ButtonProps> = ({
  type,
  backgroundColor,
  children,
  className,
}): ReactElement => {
  return (
    <button
      className={`button button--${backgroundColor} ${className}`}
      style={{
        backgroundColor: type === "transparent" ? "transparent" : "",
        border: type === "transparent" ? `1px solid ${backgroundColor}` : "",
      }}
    >
      {children}
    </button>
  );
};
