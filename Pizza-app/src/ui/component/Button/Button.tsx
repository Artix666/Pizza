import {
  type FC,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
} from "react";
import "./button.scss";

interface ButtonProps {
  variant: "filled" | "transparent";
  backgroundColor?:
    | "orange"
    | "light-black"
    | "light-gray"
    | "white"
    | "snow-white";
  children: ReactNode;
  className?: string;
  bordered?: boolean;
  borderColor?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = ({
  variant,
  backgroundColor,
  children,
  className,
  bordered,
  borderColor,
  onClick,
}): ReactElement => {
  const defaultBackgroundColor = backgroundColor || "white";
  return (
    <button
      className={`button button--${variant} button--${defaultBackgroundColor} ${
        bordered && "button--bordered"
      } button--bordered__${borderColor} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
