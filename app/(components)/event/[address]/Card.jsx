"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { getTimeAndDate } from "@/lib/parseDateTime";
import Link from "next/link";
import toast from "react-hot-toast";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Chat from "./Chat";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Card({
  cardId,
  name,
  from,
  to,
  usersId,
  date,
  username,
  email,
  gender,
  currentUsername,
  requested,
  friends,
  currentUserId,
}) {
  const [bookingDate, bookingTime] = getTimeAndDate(date);
  const { data: session, status } = useSession();
  const router = useRouter();
  const requestedSet = new Set();
  if (requested && requested.length > 0) {
    requested.map(({ cardId, username }) =>
      requestedSet.add([cardId, username].toString())
    );
  }
  async function handleSendTravelRequest() {
    if (status === "unauthenticated") {
      toast.error("Please login first");
      router.push("/login");
      return;
    }
    const res = await fetch("/api/sendtravelrequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cardId,
        email,
        username,
        currentUsername,
      }),
    });
    if (res.ok) {
      toast.success("Requested");
    } else {
      toast.error("Oops! Something went wrong");
    }
  }
  const friendMap = new Map();
  if (friends && friends.length > 0) {
    for (let i = 0; i < friends.length; ++i) {
      const travelId = friends[i].travelId;
      const friendId = friends[i].friendId;

      // Check if the travelId exists in the map
      if (!friendMap.has(travelId)) {
        // If not, initialize it as an empty array
        friendMap.set(travelId, []);
      }

      // Push the friendId to the array corresponding to the travelId
      friendMap.get(travelId).push(friendId);
    }
  }
  return (
    <Dialog>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[100%] sm:w-[25rem] h-auto rounded-xl p-6 border ">
          <CardItem className="w-full mt-1">
            <Image
              alt={name}
              src={
                "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl"
            />
          </CardItem>
          <div className="mt-2 mb-2">
            <Link href={`/user/${username}`}>
              <CardItem className="text-xl font-bold text-neutral-600 dark:text-white">
                {username === currentUsername ? "You" : username}
                {friendMap.has(cardId) && (
                  <span> + {friendMap.get(cardId).length}</span>
                )}
              </CardItem>
            </Link>
            <CardItem
              as="div"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 bg-red flex flex-col w-full"
            >
              <p>From: {from}</p>
              <p>To: {to}</p>
              <p>Date: {bookingDate}</p>
              <p>Time: {bookingTime}</p>
            </CardItem>
          </div>
          <div className="flex justify-between items-center gap-4 font-bold">
            <CardItem
              as="button"
              className={`px-4 py-2 rounded-xl text-xs bg-gray-300 dark:text-black w-full hover:bg-gray-400 ${
                (username === currentUsername ||
                  requestedSet.has([cardId, currentUsername].toString())) &&
                "opacity-50 hover:opacity-50 hover:bg-gray-300 cursor-not-allowed"
              }`}
              disabled={
                username === currentUsername ||
                requestedSet.has([cardId, currentUsername].toString())
              }
              onClick={handleSendTravelRequest}
            >
              {requestedSet.has([cardId, currentUsername].toString())
                ? friendMap.get(cardId)?.includes(currentUserId.id)
                  ? "Paired 🎉"
                  : "Requested"
                : "Request"}
            </CardItem>
            <DialogTrigger asChild>
              <CardItem
                as="button"
                className="px-4 py-2 rounded-xl bg-blue-500/40 text-black dark:text-white text-xs w-full hover:bg-blue-500/70"
              >
                Chat
              </CardItem>
            </DialogTrigger>
            <CardItem
              as="button"
              className="px-4 py-2 rounded-xl bg-red-500/40 text-black dark:text-white text-xs w-full hover:bg-red-500/70"
            >
              Remove
            </CardItem>
          </div>

          <Link
            href="https://buy.stripe.com/test_28o5migjZ2ue5j28wy"
            className="mt-7"
            target="_blank"
          >
            <button
              type="button"
              className="relative mt-2 inline-flex w-full items-center justify-center rounded-md bg-zinc-800 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
            >
              PAY AND RIDE
            </button>
          </Link>
        </CardBody>
      </CardContainer>

      <DialogContent>
        <Chat usersId={usersId} name={name} cardId={cardId} />
      </DialogContent>
    </Dialog>
  );
}
