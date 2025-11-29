import {
  type FC,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
} from "react";
import "./button.scss";

interface ButtonProps {
  variant: "filled" | "transparent";
  backgroundColor?: "orange" | "light-black" | "light-gray" | "white" | "";
  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = ({
  variant,
  backgroundColor,
  children,
  className,
  onClick,
}): ReactElement => {
  return (
    <button
      className={`button button--${variant} button--${backgroundColor} button--${variant}__${backgroundColor} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
