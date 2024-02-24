import type { HTMLAttributes } from "react";
import styles from "./styles.module.css";

function Skeleton({
  children,
  className = "",
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...rest} className={`${styles.skeleton} `.concat(className).trim()}>
      {children}
    </div>
  );
}

export default Skeleton;
