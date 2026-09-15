import { NextRequest, NextResponse } from "next/server";
import { writeClient, client } from "@/sanity/client";

// GET — fetch all blogs from Sanity for dashboard
export async function GET() {
  try {
    const blogs = await writeClient.fetch(
      `*[_type == "blog"] | order(publishedAt desc) {
        _id, title, slug, excerpt, category, readTime, publishedAt, image, body, metaTitle, metaDescription, status
      }`
    );
    return NextResponse.json(blogs);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST — create or update a blog document in Sanity
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, slug, excerpt, category, readTime, publishedAt, image, bodyContent, metaTitle, metaDescription, status } = body;

    if (!title || !slug) {
      return NextResponse.json({ error: "title and slug are required" }, { status: 400 });
    }

    const docId = `blog-${slug.replace(/[^a-z0-9]/gi, "-")}`;

    const doc = {
      _id: docId,
      _type: "blog",
      title,
      slug: { _type: "slug", current: slug },
      excerpt: excerpt || "",
      category: category || "AI Fashion",
      readTime: readTime || "5 min read",
      publishedAt: publishedAt || new Date().toISOString(),
      image: image || "",
      body: bodyContent || "",
      metaTitle: metaTitle || title,
      metaDescription: metaDescription || excerpt || "",
      status: status || "Published",
    };

    const result = await writeClient.createOrReplace(doc);
    return NextResponse.json({ success: true, id: result._id });
  } catch (err: any) {
    console.error("Sanity write error:", err);
    return NextResponse.json({ error: err.message || "Sanity write failed" }, { status: 500 });
  }
}

// DELETE — find blog by slug then delete by actual _id
export async function DELETE(req: NextRequest) {
  try {
    const { slug } = await req.json();
    if (!slug) {
      return NextResponse.json({ error: "slug is required" }, { status: 400 });
    }

    // First try deterministic ID
    const docId = `blog-${slug.replace(/[^a-z0-9]/gi, "-")}`;

    // Use writeClient (authenticated) to reliably find the actual _id by slug
    const found = await writeClient.fetch(
      `*[_type == "blog" && slug.current == $slug][0]{ _id }`,
      { slug }
    );

    const idToDelete = found?._id || docId;
    await writeClient.delete(idToDelete);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Sanity delete error:", err);
    return NextResponse.json({ error: err.message || "Sanity delete failed" }, { status: 500 });
  }
}
