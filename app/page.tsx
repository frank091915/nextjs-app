import { getServerSession } from "next-auth";
import { AuthOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(AuthOptions);
  return (
    <main>
      <h1>Hello {session && session.user!.name}</h1>
    </main>
  );
}
