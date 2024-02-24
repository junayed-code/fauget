import type { ImageProps } from "next/image";
import Image from "next/image";
import { PlayIcon } from "../icons";

function CoverImage(props: ImageProps) {
  return (
    <figure className="select-none relative group [&>img]:w-full [&>img]:aspect-square">
      <Image {...props} alt={props.alt} />
      <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 flex justify-center items-center duration-150 bg-black/40">
        <PlayIcon className="text-6xl cursor-pointer" />
      </div>
    </figure>
  );
}

export default CoverImage;
