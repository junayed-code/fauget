import Link from "next/link";
import Image from "next/image";
import appIcon from "@/assets/images/app-icon.png";

function Logo({
  size = "20",
  className = "",
}: {
  size?: string;
  className?: string;
}) {
  return (
    <h4
      style={{ fontSize: size.concat("px") }}
      className={"font-unbounded font-bold tracking-widest "
        .concat(className)
        .trim()}
    >
      <Link href="/" className="select-none inline-flex items-center gap-x-2.5">
        <Image
          src={appIcon}
          alt="Fauget icon"
          className="w-[0.82em] h-[0.82em]"
        />
        <span>Fauget</span>
      </Link>
    </h4>
  );
}

export default Logo;
