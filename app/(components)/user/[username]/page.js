import { db } from "@/lib/db";
import Card from "./Card";
import { notFound } from "next/navigation";

export default async function Event({ params: { username } }) {
  const obj = {
    from: 'Charbagh Lucknow',
    to: "IIIT Lucknow",
    date: "12-03-2025",
    time: "23:56"
  };
//   const user = Array.from({ length: 5 }, () => ({ ...obj }));
  // prisma query
  const user = await db.users.findUnique({
    where: {
        username
    }
  })
  if(!user) notFound()
  const history = await db.travel.findMany({
    where: {
        usersId: user.id
    },
    select: {
        id: false,
        users: false,
        usersId: false,
        date: true,
        from: true,
        to: true
    }
  })

  console.log(history)

  return (
    <div className="mt-16 bg-slate-200 dark:bg-slate-900 relative">
      <div className="h-16">
        <h1 className="text-4xl font-bold fixed z-10 bg-white/75 dark:bg-black/75 w-full p-4">
          {`Your Creation's`}
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {history.map(({ from, to, date  }, index) => (
            <Card key={index} from={from} to={to} />
          ))}
        </div>
      </div>
    </div>
  );
}
