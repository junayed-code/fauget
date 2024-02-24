import Link from "next/link";
import Skeleton from "./shared/Skeleton";
import CoverImage from "./shared/CoverImage";

const MAX_TITLE_LENGTH = 16;

function Music({ music }: { music: any }) {
  const { id, album, title } = music;

  return (
    <Link href={`/podcast/${id}`} className="max-w-xs w-full rounded-md">
      <CoverImage
        src={album.cover_big}
        width={300}
        height={300}
        alt={album.title}
      />
      <div className="px-1 mt-2">
        <h4 className="text-xl font-bold">
          {title
            ?.slice(0, MAX_TITLE_LENGTH)
            ?.concat(title?.length > MAX_TITLE_LENGTH ? "..." : "")}
        </h4>
      </div>
    </Link>
  );
}

export const MusicSkeleton = () => {
  return (
    <div className="max-w-sm w-full">
      <Skeleton className="aspect-square" />
      <Skeleton className="w-full h-5 mt-2" />
    </div>
  );
};

export default Music;
