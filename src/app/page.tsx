import Image from "next/image";
import Musics from "@/components/Musics";
import Banner from "@/components/shared/Banner";
import Button from "@/components/shared/Button";
import bannerImg from "@/assets/images/banner.png";
import MusicTypes from "@/components/MusicTypes";
import manImage from "@/assets/images/man.png";
import { CrownIcon } from "@/components/icons";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/config";
import { redirect } from "next/navigation";

export default async function Home({
  searchParams,
}: {
  params: any;
  searchParams: { modal?: string };
}) {
  const session = await getServerSession(options);
  const isOpenAuthModal =
    searchParams.modal === "signin" || searchParams.modal === "signup";

  if (session?.user && isOpenAuthModal) {
    redirect("/");
  }

  return (
    <>
      <div className="space-y-10 pb-6">
        {session?.user ? (
          <Banner gradient="v1">
            <div className="flex relative">
              <div className="flex-grow w-full p-7">
                <p className="font-medium flex items-center gap-x-4 mb-1">
                  <CrownIcon className="text-3xl xl:text-4xl text-orange-300" />
                  <span className="mt-1">No Ads & Unlock All Paid Songs</span>
                </p>
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-medium font-unbounded">
                  Premium Membership
                </h2>
                <p className="font-medium mt-5 mb-7">
                  It is a long established fact that a is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using &apos;Content here, content here&apos;, making it look
                  like readable English.
                </p>
                <Button className="mr-4">Upgrade Now</Button>
                <Button styleRole="secondary">Learn more</Button>
              </div>
              <div className="w-60 hidden lg:flex pt-7 pr-7 items-end justify-end">
                <Image src={manImage} alt="Man image" />
              </div>
            </div>
          </Banner>
        ) : (
          <Banner bgImage={bannerImg.src}>
            <div className="space-y-4 p-7">
              <p className="font-medium">Top play music station</p>
              <h2 className="text-2xl md:text-3xl font-medium font-unbounded">
                The Dark Side of Music: Unveiling Its Negative Effects
              </h2>
              <p className="font-medium">
                Music, often regarded as a universal language, possesses a
                profound impact on individuals and societies alike. While it has
                long been celebrated for its ability to evoke emotions, foster
                connections, and uplift spirits, the flip side of the melody
                reveals a spectrum of adverse effects that are often overlooked
              </p>
              <Button>For You?</Button>
            </div>
          </Banner>
        )}

        <MusicTypes />

        <Musics />
      </div>
    </>
  );
}
