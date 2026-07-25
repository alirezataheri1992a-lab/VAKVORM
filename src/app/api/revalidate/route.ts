import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

/**
 * Optional on-demand revalidation endpoint for a Sanity webhook.
 *
 * Without this, published content still appears automatically within the ISR window
 * (`export const revalidate = 60` on each page). This endpoint makes updates *instant*:
 * configure a Sanity webhook (Manage → API → Webhooks) to POST here on publish, with a
 * shared secret in the `x-revalidate-secret` header matching SANITY_REVALIDATE_SECRET.
 *
 * If SANITY_REVALIDATE_SECRET is unset the endpoint is disabled (returns 404), so it is
 * safe to ship before the webhook is configured.
 */
export async function POST(request: Request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ revalidated: false, reason: 'disabled' }, { status: 404 });
  }
  if (request.headers.get('x-revalidate-secret') !== secret) {
    return NextResponse.json({ revalidated: false, reason: 'unauthorized' }, { status: 401 });
  }

  // Content changes can affect navigation and the footer (shared layout), so revalidate
  // the whole app. This is coarse but correct — publishing is infrequent.
  revalidatePath('/', 'layout');

  return NextResponse.json({ revalidated: true });
}
