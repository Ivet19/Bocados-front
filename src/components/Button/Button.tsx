import React, { type ComponentProps, type PropsWithChildren } from "react";
import "./Button.css";

type AllButtonProps = ComponentProps<"button">;

interface ButtonProps extends AllButtonProps {
  classModifierName: string;
  action: () => void;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  classModifierName,
  children,
  action,
  ...button
}) => {
  return (
    <button
      type="button"
      className={`button button--${classModifierName}`}
      onClick={action}
      {...button}
    >
      {children}
    </button>
  );
};

export default Button;
