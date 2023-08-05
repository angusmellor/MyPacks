import clientPromise from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() { 

  const client = await clientPromise

  const db = client.db('')