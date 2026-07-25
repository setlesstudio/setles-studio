import { NextRequest, NextResponse } from "next/server";
import { writeClient } from "@/sanity/client";

// POST — create or update a blog document in Sanity
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, title, slug, excerpt, category, readTime, publishedAt, image, bodyContent, metaTitle, metaDescription, status } = body;

    if (!title || !slug) {
      return NextResponse.json({ error: "title and slug are required" }, { status: 400 });
    }

    // Use a deterministic Sanity document ID based on the slug
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

    // createOrReplace upserts the document
    const result = await writeClient.createOrReplace(doc);
    return NextResponse.json({ success: true, id: result._id });
  } catch (err: any) {
    console.error("Sanity write error:", err);
    return NextResponse.json({ error: err.message || "Sanity write failed" }, { status: 500 });
  }
}

// DELETE — remove a blog document from Sanity by slug
export async function DELETE(req: NextRequest) {
  try {
    const { slug } = await req.json();
    if (!slug) {
      return NextResponse.json({ error: "slug is required" }, { status: 400 });
    }
    const docId = `blog-${slug.replace(/[^a-z0-9]/gi, "-")}`;
    await writeClient.delete(docId);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Sanity delete error:", err);
    return NextResponse.json({ error: err.message || "Sanity delete failed" }, { status: 500 });
  }
}
