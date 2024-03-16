import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function Card({ img, name, location }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[100%] sm:w-[25rem] h-auto rounded-xl p-6 border ">
        <CardItem className="w-full mt-1">
          <Image
            alt={name}
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl"
          />
        </CardItem>
        <div className="mt-2 mb-2">
          <CardItem
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {name}
          </CardItem>
          <CardItem
            as="p"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 bg-red"
          >
            {location}
          </CardItem>
        </div>
        <div className="flex justify-between items-center gap-4 font-bold">
          <CardItem
            as="button"
            className="px-4 py-2 rounded-xl text-xs bg-gray-300 dark:text-black w-full hover:bg-gray-400"
          >
            Request
          </CardItem>
          <CardItem
            as="button"
            className="px-4 py-2 rounded-xl bg-blue-500/40 text-black dark:text-white text-xs w-full hover:bg-blue-500/70"
          >
            Chat 
          </CardItem>
          <CardItem
            as="button"
            className="px-4 py-2 rounded-xl bg-red-500/40 text-black dark:text-white text-xs w-full hover:bg-red-500/70"
          >
            Remove
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
