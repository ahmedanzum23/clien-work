import React from "react";
import book1 from "../assets/1.jpeg";
import book2 from "../assets/2.jpeg";
import book3 from "../assets/3.jpeg";
import book4 from "../assets/4.jpeg";
import book7 from "../assets/7.jpeg";
import book8 from "../assets/8.jpeg";

function Books() {
  return (
    <div name="book" className="h-full w-full  pt-[4.5rem] ">
      <h2 className="text-center text-4xl font-bold underline underline-offset-8">
        List of Books
      </h2>
      <div className="relative  grid grid-cols-2 gap-6 px-[10rem] py-10">
        <div className="flex gap-x-4  rounded-md bg-gray-200 p-2 shadow-xl">
          <img className="h-24" src={book1} alt="" />
          <div className="py-2">
            <h3 className="text-base font-semibold">
              Muktijudho Hridoyee Momo
            </h3>
            <span className="font-secondText text-sm font-medium text-gray-600">
              Published Year: 1996
            </span>
          </div>
        </div>
        <div className="flex gap-x-4  rounded-md bg-gray-200 p-2 shadow-xl">
          <img className="h-24" src={book2} alt="" />
          <div className="py-2">
            <h3 className="text-base font-semibold">
              Bangladesh Wins Freedom(English Version)
            </h3>
            <span className="font-secondText text-sm font-medium text-gray-600">
              Published Year: 2000
            </span>
          </div>
        </div>
        <div className="flex gap-x-4  rounded-md bg-gray-200 p-2 shadow-xl">
          <img className="h-24" src={book3} alt="" />
          <div className="py-2">
            <h3 className="text-base font-semibold">
              Bangladesh Wins Freedom(Bangla Version)
            </h3>
            <span className="font-secondText text-sm font-medium text-gray-600">
              Published Year: 2008
            </span>
          </div>
        </div>
        <div className="flex gap-x-4  rounded-md bg-gray-200 p-2 shadow-xl">
          <img className="h-24" src={book4} alt="" />
          <div className="py-2">
            <h3 className="text-base font-semibold">
              বঙ্গবন্ধু হত্যার গোপন পরম্পরা
            </h3>
            <span className="font-secondText text-sm font-medium text-gray-600">
              Published Year: 2015
            </span>
          </div>
        </div>
        <div className="flex gap-x-4  rounded-md bg-gray-200 p-2 shadow-xl">
          <img className="h-24" src={book7} alt="" />
          <div className="py-2">
            <h3 className="text-base font-semibold">বিষবৃক্ষের বিষ প্রেম</h3>
            <span className="font-secondText text-sm font-medium text-gray-600">
              Published Year: 2019
            </span>
          </div>
        </div>
        <div className="flex gap-x-4  rounded-md bg-gray-200 p-2 shadow-xl">
          <img className="h-24" src={book8} alt="" />
          <div className="py-2">
            <h3 className="text-base font-semibold">
              বিশ্ব নেতাদের দৃষ্টিতে বঙ্গবন্ধু
            </h3>
            <span className="font-secondText text-sm font-medium text-gray-600">
              Published Year: 2020
            </span>
          </div>
        </div>
        <div className="flex gap-x-4  rounded-md bg-gray-200 p-2  shadow-xl">
          <img className="h-24" src={book4} alt="" />
          <div className="py-2">
            <h3 className="text-base font-semibold">
              ১৫ই আগস্ট ট্রাজেডী ও বঙ্গভবনের অজানা অধ্যায়
            </h3>
            <span className="font-secondText text-sm font-medium text-gray-600">
              Published Date: 2020
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books;
