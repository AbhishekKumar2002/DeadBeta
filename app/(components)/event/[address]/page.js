import Card from "./Card";
import PagenationPage from "./PagenationPage";

export default function Event({ params: { address } }) {
  const obj = {
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Kitish",
    location: address,
  };
  const user = Array.from({ length: 5 }, () => ({ ...obj }));
  // prisma query

  return (
    <div className="mt-16 bg-slate-200 dark:bg-slate-900 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {user.map(({ img, name, location }, index) => (
          <Card key={index} img={img} name={name} location={location} />
        ))}
      </div>
    </div>
  );
}