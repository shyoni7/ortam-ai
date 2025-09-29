import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // ניתן להחליף ל-redirect
    return <div>עליך להתחבר</div>;
  }
  return (
    <main>
      <h1>מערכת ניהול</h1>
      <pre>{JSON.stringify(session.user, null, 2)}</pre>
    </main>
  );
}