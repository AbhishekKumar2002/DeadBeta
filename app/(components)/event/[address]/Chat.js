"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Formi from "./Formi";
import Header from "./Header";
import Message from "./Message";

import { useSession } from "next-auth/react";

const Chat = async ({ usersId,name,cardId }) => {
  const { data: session, status } = useSession();

  const [conversationId, setConversation] = useState("");
  const [messa, setMessa] = useState([]);
  useEffect(() => {
    async function fn() {
      const res = await fetch("/api/conversations", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: session?.user?.email,
          usersId,
          cardId
        }),
      });

      const conver = await res.json();
      setConversation(conver.id);

      console.log(conver.id)
    }
    fn();
  }, []);

  useEffect(() => {
    async function fn() {
      const result = await fetch(
        `/api/usermessage?conversationId=${conversationId}`
      );

      const resul = await result.json();

      setMessa(resul);
    }
    if (conversationId.length > 0) fn();
  }, [conversationId]);


  return (
    <div className="h-fit w-full">
      {/* <div>{messa?.map((message) => message.body)}</div> */}
      <Header name={name} />
      <Message  conversationId={conversationId}/>
      <Formi conversationId={conversationId} />
    </div>
  );
};

export default Chat;
