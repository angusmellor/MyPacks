import { dbName } from "@/config/site";
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;

  const db = client.db(dbName);

  const packs = await db.collection("packs").find().toArray();

  return NextResponse.json(packs);
}
