import { ComponentProps } from "react";

import { Typography } from "../typography/typography";

import styles from "./ui-button.module.css";

type VariantType = "primary" | "secondary" | "icon" | "text";

type UiButtonProps = {
  variant?: VariantType;
  icon?: React.ReactNode;
} & ComponentProps<"button">;

export const UiButton = ({ children, variant = "primary", icon, type = "button", ...props }: UiButtonProps) => {
  return (
    <button type={type} {...props} className={styles[variant]}>
      <Typography variant="small">
        {icon && icon}
        {children}
      </Typography>
    </button>
  );
};
