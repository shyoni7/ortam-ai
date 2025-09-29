use client;
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await signIn("credentials", { email, password, redirect: false });
        if (res?.error) setError("שגיאה בהתחברות");
        else window.location.href = "/admin";
      }}
      className="flex flex-col gap-4 max-w-xs mx-auto mt-20"
    >
      <input
        type="email"
        placeholder="אימייל"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="password"
        placeholder="סיסמה"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border rounded"
      />
      <button type="submit" className="bg-primary-500 text-white p-2 rounded">התחבר</button>
      {error && <div className="text-red-500">{error}</div>}
    </form>
  );
}