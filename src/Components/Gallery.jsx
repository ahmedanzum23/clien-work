/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";
import image1 from "../assets/1.jpg";
import image10 from "../assets/10.jpg";
import image11 from "../assets/11.jpg";
import image12 from "../assets/12.jpg";
import image13 from "../assets/13.jpg";
import image14 from "../assets/14.jpg";
import image15 from "../assets/15.jpg";
import image16 from "../assets/16.jpg";
import image17 from "../assets/17.jpg";
import image18 from "../assets/18.jpg";
import image19 from "../assets/19.jpg";
import image2 from "../assets/2.jpg";
import image20 from "../assets/20.jpg";
import image21 from "../assets/21.jpg";
import image22 from "../assets/22.jpg";
import image23 from "../assets/23.jpg";
import image24 from "../assets/24.jpg";
import image25 from "../assets/25.jpg";
import image26 from "../assets/26.jpg";
import image27 from "../assets/27.jpg";
import image28 from "../assets/28.jpg";
import image29 from "../assets/29.jpg";
import image3 from "../assets/3.jpg";
import image30 from "../assets/30.jpg";
import image31 from "../assets/31.jpg";
import image32 from "../assets/32.jpg";
import image33 from "../assets/33.jpg";
import image34 from "../assets/34.jpg";
import image35 from "../assets/35.jpg";
import image36 from "../assets/36.jpg";
import image37 from "../assets/37.jpg";
import image38 from "../assets/38.jpg";
import image39 from "../assets/39.jpg";
import image4 from "../assets/4.jpg";
import image40 from "../assets/40.jpg";
import image41 from "../assets/41.jpg";
import image42 from "../assets/42.jpg";
import image43 from "../assets/43.jpg";
import image44 from "../assets/44.jpg";
import image45 from "../assets/45.jpg";
import image46 from "../assets/46.jpg";
import image47 from "../assets/47.jpg";
import image48 from "../assets/48.jpg";
import image49 from "../assets/49.jpg";
import image5 from "../assets/5.jpg";
import image50 from "../assets/50.jpg";
import image51 from "../assets/51.jpg";
import image52 from "../assets/52.jpg";
import image53 from "../assets/53.jpg";
import image54 from "../assets/54.jpg";
import image55 from "../assets/55.jpg";
import image56 from "../assets/56.jpg";
import image57 from "../assets/57.jpg";
import image58 from "../assets/58.jpg";
import image59 from "../assets/59.jpg";
import image6 from "../assets/6.jpg";
import image60 from "../assets/60.jpg";
import image61 from "../assets/61.jpg";
import image62 from "../assets/62.jpg";
import image63 from "../assets/63.jpg";
import image7 from "../assets/7.jpg";
import image8 from "../assets/8.jpg";
import image9 from "../assets/9.jpg";

function Gallery() {
  const [activePage, setactivePage] = useState(1);
  const [b1disabled, setb1Disabled] = useState(false);
  const [b2disabled, setb2Disabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const pages = [
    [image1, image2, image3, image4, image5, image6, image7, image8, image9],
    [
      image10,
      image11,
      image12,
      image13,
      image14,
      image15,
      image16,
      image17,
      image18,
    ],
    [
      image19,
      image20,
      image21,
      image22,
      image23,
      image24,
      image25,
      image26,
      image27,
    ],
    [
      image28,
      image29,
      image30,
      image31,
      image32,
      image33,
      image34,
      image35,
      image36,
    ],
    [
      image37,
      image38,
      image39,
      image40,
      image41,
      image42,
      image43,
      image44,
      image45,
    ],
    [
      image46,
      image47,
      image48,
      image49,
      image50,
      image51,
      image52,
      image53,
      image54,
    ],
    [
      image55,
      image56,
      image57,
      image58,
      image59,
      image60,
      image61,
      image62,
      image63,
    ],
  ];

  const page = pages[activePage - 1];
  const previousPage = () => {
    setactivePage(activePage - 1);
    setLoading(true);
  };
  const nextPage = () => {
    setactivePage(activePage + 1);
    setLoading(true);
  };

  useEffect(() => {
    if (activePage === 1) {
      setb1Disabled(true);
    } else {
      setb1Disabled(false);
    }
    if (activePage === 7) {
      setb2Disabled(true);
    } else {
      setb2Disabled(false);
    }
  }, [activePage]);

  useEffect(() => {
    if (loading === true) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loading]);

  return (
    <div
      name="gallery"
      className="flex h-full w-full  flex-1 flex-col items-center  pt-[4.5rem]"
    >
      <h2 className="flex-[0_1_auto] text-center text-4xl font-bold underline underline-offset-8">
        Photo Gallery
      </h2>
      {loading ? (
        <div className="grid h-[30rem]  place-items-center px-[20rem] py-10">
          <span className="spinner" />
        </div>
      ) : (
        <div className="grid flex-[1_1_auto] grid-cols-3 gap-8 px-[20rem] py-10">
          {page.map((value, index) => (
            <img
              key={index}
              src={value}
              alt={index}
              className="w-[20rem] rounded-md"
            />
          ))}
        </div>
      )}
      <div className="my-2 flex flex-[0_1_auto] gap-x-20   rounded-lg text-bgColor">
        <button
          style={{ backgroundColor: b1disabled ? "gray" : "black" }}
          className="rounded-lg  py-4 px-8 text-base font-semibold text-bgColor "
          type="button"
          disabled={b1disabled}
          onClick={previousPage}
        >
          Previous Page
        </button>
        <button
          style={{ backgroundColor: b2disabled ? "gray" : "black" }}
          className="rounded-lg bg-accentColor py-4 px-8 text-base font-semibold text-bgColor "
          type="button"
          disabled={b2disabled}
          onClick={nextPage}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default Gallery;
