import Link from "next/link";
import Musics from "@/components/Musics";
import Badge from "@/components/shared/Badge";
import Avatar from "@/components/shared/Avatar";
import CoverImage from "@/components/shared/CoverImage";

const MAX_TITLE_LENGTH = 30;

async function PodcastDetails({ params }: { params: { id: string } }) {
  const res = await fetch(`https://api.deezer.com/track/${params.id}`);
  const { title, link, album, artist, preview } = await res.json();

  return (
    <div className="space-y-28 pt-2 pb-6">
      <section className="flex flex-col md:flex-row items-center md:items-start gap-y-6">
        <Link href={preview} className="max-w-sm w-full">
          <CoverImage
            width={400}
            height={400}
            alt={album.title}
            placeholder="blur"
            src={album.cover_big}
            blurDataURL={album.cover_small}
          />
        </Link>

        <div className="flex-1 px-4 sm:px-10 py-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-unbounded font-bold mb-8 md:mb-10">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="hover:underline hover:opacity-75 duration-150"
            >
              {title
                ?.slice(0, MAX_TITLE_LENGTH)
                ?.concat(title?.length > MAX_TITLE_LENGTH ? "..." : "")}
            </a>
          </h1>

          {/* Music description */}
          <p className="mb-8 text-slate-200">
            Music, often regarded as a universal language, possesses a profound
            impact on individuals and societies alike. While it has long been
            celebrated for its ability to evoke emotions, foster connections,
            and uplift spirits, the flip side of the melody reveals a spectrum
            of adverse effects that are often overlooked
          </p>

          {/* Artist Profile */}
          <div className="flex items-center gap-x-4">
            <Avatar
              src={artist.picture_small}
              alt={`${artist.name}'s picture`}
            />
            <p className="text-lg font-semibold">
              <a
                target="_blank"
                rel="noreferrer"
                href={artist.link}
                className="hover:underline hover:opacity-75 duration-150"
              >
                {artist.name}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section>
        <h5 className="mb-6">
          <Badge>Related</Badge>
        </h5>
        <Musics limit={4} search={title.split(" ")[0]} />
      </section>
    </div>
  );
}

export default PodcastDetails;
