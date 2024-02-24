import type { NextRequest } from "next/server";

export const GET = async (
  _request: NextRequest,
  { params }: { params: { trackId: string } },
) => {
  const res = await fetch(`https://api.deezer.com/track/${params.trackId}`);
  const data = await res.json();

  return Response.json(data);
};
