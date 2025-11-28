import {
  type FC,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
} from "react";
import "./button.scss";

interface ButtonProps {
  type: "filled" | "transparent";
  backgroundColor?: "orange" | "light-black" | "light-gray" | "white";
  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = ({
  type,
  backgroundColor,
  children,
  className,
  onClick,
}): ReactElement => {
  return (
    <button
      className={`button button--${type} button--${type}__${backgroundColor}  button--${backgroundColor} ${className}`}
      style={{
        backgroundColor: type === "transparent" ? "transparent" : "",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
