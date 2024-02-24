"use client";

import Music, { MusicSkeleton } from "./Music";
import { type QueryFunction, useQuery } from "@tanstack/react-query";

const fetchMusics: QueryFunction<any[], any[]> = async ({ queryKey: keys }) => {
  const query = `q=${keys[1]}&page=${keys[2]}&limit=${keys[3]}`;
  const res = await fetch(`/api/musics?${query}`);

  return await res.json();
};

function Musics({
  page = 1,
  limit = 12,
  search = "a",
}: {
  page?: number;
  limit?: number;
  search?: string;
}) {
  const { data: musics = [], isLoading } = useQuery({
    queryKey: ["musics", search, page, limit],
    queryFn: fetchMusics,
  });

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6">
      {musics.map(music => (
        <Music key={music.id} music={music} />
      ))}
      {isLoading &&
        Array.from({ length: limit }, (_, i) => <MusicSkeleton key={i} />)}
    </div>
  );
}

export default Musics;
