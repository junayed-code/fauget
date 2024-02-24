import type { ReactNode } from "react";
import styles from "./styles.module.css";

function Main({ children }: { children: ReactNode }) {
  return <main className={styles.main}>{children}</main>;
}

export default Main;
