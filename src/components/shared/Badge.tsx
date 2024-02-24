import type { ReactNode } from "react";

function Badge({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={"inline-block min-w-28 p-[0.4em_1.45em] text-center rounded-3xl bg-[var(--color-gray-500)] "
        .concat(className)
        .trim()}
    >
      {children}
    </span>
  );
}

export default Badge;
