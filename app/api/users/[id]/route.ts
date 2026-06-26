import { NextResponse } from 'next/server';
import db from '../db.json';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = (db as unknown as { id: string }[]).find(u => u.id === id);
  
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  return NextResponse.json(user);
}
