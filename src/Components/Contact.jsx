import React from "react";
import { CgPhone } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div
      name="contact"
      className="mt-[6rem] flex h-full w-full flex-col items-center  bg-accentColor py-4 text-bgColor"
    >
      <div className="text-center text-4xl font-bold underline underline-offset-8">
        Contact Information
      </div>
      <h3 className="text-bases mt-2 text-center font-medium ">
        come and visit my office
      </h3>
      <div className="flex items-center justify-between gap-x-40 py-4">
        <div className="flex aspect-square w-40 flex-col items-center rounded-lg  py-6 px-2 text-center text-bgColor">
          <IoLocationSharp size={40} />
          <span className="font-bold">Location</span>
          <p className="mt-2 font-secondText text-xs ">
            House #22, Road #23, Block #B, Banani, Dhaka-1213
          </p>
        </div>
        <div className="flex aspect-square w-40 flex-col items-center rounded-lg  py-6 px-2 text-center text-bgColor">
          <CgPhone size={40} />
          <span className="font-bold">Phone</span>
          <p className=" mt-2 font-secondText text-xs ">0189 482 9666</p>
          <p className="font-secondText text-xs ">0176 865 4422</p>
        </div>
        <div className="flex aspect-square w-40 flex-col items-center rounded-lg  py-6 px-2 text-center text-bgColor">
          <MdEmail size={40} />
          <span className="font-bold">Email Address</span>
          <p className="mt-2 font-secondText text-xs">infomusabd@gmail.com</p>
          <p className="font-secondText text-xs">info@musabd.net</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
