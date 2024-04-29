import React from "react";
import Image from "next/image";
import Form from "./Form";
import Header from "./Header";
import Message from "./Message";

const Chat = () => {
  return (
    <div className="h-fit w-fit">
    <Header/>
    <Message/>
    <Form/>
    </div>
  );
};

export default Chat;
