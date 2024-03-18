import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Card_Home() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h1 className="text-white mb-4 text-4xl sm:text-4xl font-extrabold">
        <span className="flex  items-center justify-center text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-cyan-500">
          Customer Reviews
        </span>
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Abhishek Kumar",
    description: "Help a lot",
    link: "",
  },
  {
    title: "Abhishek Kumar",
    description: "Help a lot",
    link: "",
  },
  {
    title: "Abhishek Kumar",
    description: "Help a lot",
    link: "",
  },
  {
    title: "Abhishek Kumar",
    description: "Help a lot",
    link: "",
  },
  {
    title: "Abhishek Kumar",
    description: "Help a lot",
    link: "",
  },
  {
    title: "Abhishek Kumar",
    description: "Help a lot",
    link: "",
  },
];
