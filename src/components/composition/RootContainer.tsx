import type { ReactNode } from "react";

function RootContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex text-slate-100 h-screen overflow-hidden">
      {children}
    </div>
  );
}

export default RootContainer;
