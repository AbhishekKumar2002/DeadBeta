import Card from "./Card";

export default function Event() {
  const obj = {
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Kitish",
    location: "Charbagh Lucknow",
  };
  const user = Array.from({ length: 10 }, () => ({ ...obj }));
  
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {user.map(({ img, name, location }, index) => (
          <Card key={index} img={img} name={name} location={location} />
        ))}
      </div>
    </div>
  );
}
