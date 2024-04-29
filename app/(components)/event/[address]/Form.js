import React from "react";
import Image from "next/image";
import MessageInput from "./MessageInput";
import {HiPaperAirplane ,HiPhoto} from "react-icons/hi2";
import { CldUploadButton } from "next-cloudinary";

const Form = () => {
  return (
     
    <form className="bg-white py-4 px-4 border-t flex items-center gap-2 lg:gap-4 w-full">
        <CldUploadButton>

        <HiPhoto size={30} className="text-sky-500"/>
        </CldUploadButton>
        <MessageInput/>

      <button type="submit" className="rounded-full p-2 bg-sky-500 cursor-pointer hover:bg-sky-600 transition"><HiPaperAirplane/></button>
    </form>

  );
};

export default Form;