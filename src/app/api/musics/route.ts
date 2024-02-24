import type { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const { searchParams: params } = request.nextUrl;

  // Set default limit value
  if (!Number(params.get("limit"))) {
    params.set("limit", "12");
  }

  // Set search query value
  const searchQueryValue = params.has("q")
    ? `track:'${params.get("q")}'`
    : "track:'a'";
  params.set("q", searchQueryValue);

  // Pagination
  const page = Number(params.get("page")) || 1;
  const skip = (page - 1) * Number(params.get("limit")) + "";
  params.set("index", skip);

  const res = await fetch(`https://api.deezer.com/search?${params.toString()}`);
  const { data } = await res.json();
  return Response.json(data, { status: 200 });
};
