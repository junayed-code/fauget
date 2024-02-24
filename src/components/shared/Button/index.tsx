import type { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleRole?: "primary" | "secondary";
}

function Button({
  children,
  className = "",
  styleRole = "primary",
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      className={`${styles.btn} ${styles[styleRole]} `.concat(className).trim()}
    >
      {children}
    </button>
  );
}

export default Button;
