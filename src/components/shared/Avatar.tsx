import Image from "next/image";

function Avatar({
  src,
  alt,
  size = "36",
  className = "",
}: {
  src: string;
  alt: string;
  size?: string;
  className?: string;
}) {
  return (
    <div
      style={{ width: size.concat("px") }}
      className={"aspect-square rounded-full overflow-hidden "
        .concat(className)
        .trim()}
    >
      <Image src={src} alt={alt} width={Number(size)} height={Number(size)} />
    </div>
  );
}

export default Avatar;
