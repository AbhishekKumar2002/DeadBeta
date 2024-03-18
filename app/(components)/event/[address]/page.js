import { db } from "@/lib/db";
import Card from "./Card";
import PagenationPage from "./PagenationPage";

export default async function Event({ params: { address } }) {
  const location = address.split("%26");
  const from = location.at(0).split("%20").join(" ");
  const to = location.at(1).split("%20").join(" ");
  let date = location
    .at(2)
    .split("%20")
    .join(" ")
    .split("%3A")
    .join(":")
    .split("%2B")
    .join("+");
  date = new Date(date);
  console.log(date);
  const data = await db.travel.findMany({
    where: {
      from,
      to,
      // date
    },
    select: {
      from: true,
      to: true,
      usersId: true,
      date: true,
      users: {
        select: {
          username: true,
          email: true,
          name: true,
          gender: true,
        },
      },
    },
  });

  const user = data.map(({ from, to, usersId, date, users }) => ({
    from,
    to,
    usersId,
    date,
    ...users,
  }));
  
  console.log(user);
  if (user.length < 0) {
    return (
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
    );
  }
  return (
    <div className="mt-16 bg-slate-200 dark:bg-slate-900 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {user.map(({  name, from, to, usersId, date, username, email, gender }, index) => (
          <Card key={index} name={name} from={from} to={to} usersId={usersId} date={date} username={username} email={email} gender={gender} />
        ))}
      </div>
    </div>
  );
}
