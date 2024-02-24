import Musics from "@/components/Musics";
import Badge from "@/components/shared/Badge";

async function Podcast() {
  return (
    <div className="space-y-16 pb-6">
      <section>
        <h5 className="mb-6">
          <Badge>For You</Badge>
        </h5>
        <Musics limit={4} page={4} />
      </section>
      <section>
        <h5 className="mb-6">
          <Badge>Popular</Badge>
        </h5>
        <Musics limit={4} page={5} />
      </section>
      <section>
        <h5 className="mb-6">
          <Badge>Trend</Badge>
        </h5>
        <Musics limit={4} page={6} />
      </section>
    </div>
  );
}

export default Podcast;
