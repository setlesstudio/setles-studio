import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// The legacy dashboard's localStorage login is not server authentication.
// Keep privileged operations closed until a verified server session exists.
// Public articles still load through the read-only Sanity queries.
function unavailable() {
  return NextResponse.json(
    { error: "Website blog editing is disabled. Please manage articles in Sanity Studio." },
    { status: 403, headers: { "Cache-Control": "no-store" } }
  );
}

export const GET = unavailable;
export const POST = unavailable;
export const DELETE = unavailable;
