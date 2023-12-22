import { getCurrentUser } from "@/lib/session";
import Link from "next/link";

export default async function SignIn() {
  const user = await getCurrentUser();

  return <>{user ? <Link href="/login" /> : <button>Sign Out</button>}</>;
}
