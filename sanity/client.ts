import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "q0scb80c";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2026-05-15";

// Read-only client for public pages
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Next.js caches public queries for 60 seconds; avoid a second stale CDN layer.
  useCdn: false,
});

// Write client for dashboard API routes (server-side only, uses secret token)
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const builder = createImageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);
