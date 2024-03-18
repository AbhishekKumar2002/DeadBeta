import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function Card({ name, from, to, usersId, date, username, email, gender }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[100%] sm:w-[25rem] h-auto rounded-xl p-6 border ">
        <CardItem className="w-full mt-1">
          <Image
            alt={name}
            src={"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
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
            as="div"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 bg-red flex flex-col w-full"
          >
              <p>From: {from}</p>
              <p>To: {to}</p>
              {/* <p>Date: {date}</p>
              <p>Time: {time}</p> */}
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
