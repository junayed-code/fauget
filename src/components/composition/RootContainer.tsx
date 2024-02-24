import type { ReactNode } from "react";

function RootContainer({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen flex overflow-hidden text-slate-100">
      {children}
    </div>
  );
}

export default RootContainer;
