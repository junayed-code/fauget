import type { ReactNode } from "react";

function Banner({
  bgImage,
  children,
  gradient = "v2",
}: {
  bgImage?: string;
  children: ReactNode;
  gradient?: "v1" | "v2";
}) {
  return (
    <div
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
      className="bg-center bg-cover bg-no-repeat grid [&>*]:col-start-1 [&>*]:row-start-1 rounded-md overflow-hidden"
    >
      <div
        style={{ backgroundImage: `var(--gradient-${gradient})` }}
        className="h-full w-full"
      />
      {children}
    </div>
  );
}

export default Banner;
