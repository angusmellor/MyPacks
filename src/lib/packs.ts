import { dbName } from "@/config/site";
import clientPromise from "@/lib/mongodb";

export async function getAllPacks() {
  const client = await clientPromise;
  const db = client.db(dbName);

  return await db.collection("packs").find().toArray();
}
