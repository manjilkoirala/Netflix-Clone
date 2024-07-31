import { getServerSession } from "next-auth";
import Login from "@/components/Login";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Navbar from "@/components/Navbar";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) return <Login />;
  return (
    <>
      <Navbar />
    </>
  );
}
