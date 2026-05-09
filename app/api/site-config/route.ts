import { NextResponse } from 'next/server';
import { getSiteConfig } from '../../../lib/site-config';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json(getSiteConfig());
}
