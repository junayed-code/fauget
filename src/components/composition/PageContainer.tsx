import type { ReactNode } from "react";

function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex-1 bg-[var(--color-black-800)] flex flex-col">
      {children}
    </div>
  );
}

export default PageContainer;
