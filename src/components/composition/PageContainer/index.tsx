import type { ReactNode } from "react";
import styles from "./styles.module.css";

function PageContainer({ children }: { children: ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}

export default PageContainer;
