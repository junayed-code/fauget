import type { InputHTMLAttributes } from "react";
import styles from "./styles.module.css";

type RequiredProps = Required<
  Pick<InputHTMLAttributes<HTMLInputElement>, "id" | "value" | "onChange">
>;
type Props = InputHTMLAttributes<HTMLInputElement> &
  RequiredProps & {
    label: string;
    error?: string;
  };

function Field({
  id,
  label,
  error,
  name = id,
  type = "text",
  className = "",
  ...rest
}: Props) {
  return (
    <label htmlFor={id} className={styles.inputGroup}>
      <span className={styles.inputLabel}>{label}</span>
      <input
        {...rest}
        id={id}
        name={name}
        type={type}
        className={`${styles.input} `.concat(className).trim()}
      />
      {error && <p className={styles.inputError}>{error}</p>}
    </label>
  );
}

export default Field;
