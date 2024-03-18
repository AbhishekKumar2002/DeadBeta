// import { HoverEffect } from "../ui/card-hover-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "postcss";
import { useState } from "react";

export default function Card_Home() {
  const [input, setInput] = useState("");
  const [toinput, tosetInput] = useState("");
  const handleChange = (value) => {
    setInput(value);
  };
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h1 className="text-white mb-4 text-4xl sm:text-4xl font-extrabold">
        <span className="flex  items-center justify-center text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-cyan-500">
          Customer Reviews
        </span>
      </h1>
      <HoverEffect items={projects} />
      <div className="flex items-center justify-center mb-4">
        
        <Dialog>
          <DialogTrigger asChild><button className="relative inline-flex h-12 overflow-hidden rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          +
        </span>
      </button></DialogTrigger>
          <DialogContent className="rounded bg-slate-200 dark:bg-zinc-800 dark:text-slate-200">
            <DialogHeader>
              <DialogTitle>Write Review</DialogTitle>
              <br />
              {/* <Label>Review</Label> */}
              <textarea
                type="text"
                id="from"
                placeholder="Write review"
                className="w-full mt-2 p-2 rounded h-32  resize-none outline-none"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
              />
              
              {/* <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription> */}
              <div className="flex items-center justify-center mt-4">
              <button className="border rounded-md border-black dark:border-white p-2 w-[50%]">Submit</button>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
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
