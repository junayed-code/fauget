import type { ReactNode } from "react";

function RootContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex text-slate-100 lg:h-screen lg:overflow-hidden">
      {children}
    </div>
  );
}

export default RootContainer;
