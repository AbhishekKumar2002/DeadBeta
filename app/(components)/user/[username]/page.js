import { db } from "@/lib/db";
import Card from "./Card";
import { notFound, redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 5;
export default async function Event({ params: { username } }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  // if (session.user.username !== username) {
  //   notFound();
  // }
  const user = await db.users.findUnique({
    where: {
      username,
    },
  });
  if (!user) notFound();
  const history = await db.travel.findMany({
    where: {
      usersId: user.id,
    },
    select: {
      id: true,
      users: false,
      usersId: false,
      date: true,
      from: true,
      to: true,
    },
    orderBy: [
      {
        id: "desc",
      },
    ],
  });
  // console.log(history);

  return (
    <div className="mt-16 bg-slate-200 dark:bg-slate-900 pb-4 relative">
      <div className="h-16">
        <h1 className="text-4xl font-bold fixed z-10 bg-white/75 dark:bg-black/75 w-full p-4">
          {`Your Creation's`}
        </h1>
      </div>
      <div>
        {history.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {history.map(({ from, to, date, id }, index) => (
              <Card key={index} from={from} cardId={id} to={to} date={date} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-2 mb-5">
            <div>
              <Image src="/empty.png" alt="empty" height={450} width={450} />
            </div>

            <h1 className="text-4xl text-center">Nothing found</h1>
            <Link href="/">
              <button
                type="button"
                className="bg-blue-500 w-full text-black p-3 rounded-xl hover:bg-blue-500/55 transition-all"
              >
                <p className="font-semibold text-xs">Create one</p>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
