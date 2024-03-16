import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function Card({ from, to, date, time }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[100%] sm:w-[25rem] h-auto rounded-xl p-6 border ">

        <div className="mt-2 mb-2 font-bold">
          <CardItem
            as="p"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 bg-red"
          >
            From: {from}
          </CardItem>
          <CardItem
            as="p"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 bg-red"
          >
            To: {to}
          </CardItem>
          <CardItem
            as="p"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 bg-red"
          >
            Date: {date}
          </CardItem>
          <CardItem
            as="p"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 bg-red"
          >
            Time: {time}
          </CardItem>
        </div>
        <div className="flex justify-between items-center gap-4 font-bold">
          <CardItem
            as="button"
            className="px-4 py-2 rounded-xl bg-red-500/30 text-black dark:text-white text-xs w-full hover:bg-red-500/70"
          >
            Remove
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
