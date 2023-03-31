"use client";

import { React, useState, useRef } from "react";
import { CldImage } from "next-cloudinary";
import FontAwesome from "@/components/font_awesome";

export default function Carousel(props) {
  const [index, setIndex] = useState(0);
  const [list, setList] = useState(props.list || props.media || []);

  const [clicked, setClicked] = useState(false);
  const [timer, setTimer] = useState(null);

  const current = list[index];
  let media;

  if (current.type == "image") {
    if (index == 0) {
      media = (
        <CldImage
          priority
          width={current.width}
          height={current.height}
          src={current.src}
          alt={current.alt}
          sizes="100vw"
        />
      );
    } else {
      media = (
        <CldImage
          width={current.width}
          height={current.height}
          src={current.src}
          alt={current.alt}
          sizes="100vw"
        />
      );
    }
  }

  if (current.type == "video") {
    media = (
      <video controls className="video">
        <source src={current.src} type="video/mp4" />
      </video>
    );
  }

  const show = (i) => {
    //try {
    setClicked(true);

    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
    //} catch (e) {}
    setIndex(i);
  };

  const back = () => {
    const i = Math.abs(index + list.length - 1) % list.length;
    show(i);
  };

  const next = () => {
    const i = Math.abs(index + 1) % list.length;
    show(i);
  };

  if (!timer) {
    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    const id = setInterval(() => {
      if (!clicked) {
        const i = randomNumber(0, list.length);
        setIndex(i);
      }
    }, 420 * 10 * 2);

    setTimer(id);
  }

  return (
    <div className="text-center">
      <button onClick={() => back()} title="Never back">
        <FontAwesome className="fa-solid fa-backward text-pink-600" />
      </button>
      &nbsp; &nbsp;
      <FontAwesome className="fa-solid fa-dragon" />
      &nbsp; &nbsp;
      <button onClick={() => next()} title="Always forward">
        <FontAwesome className="fa-solid fa-forward text-pink-600" />
      </button>
      <hr />
      <hr />
      <div key={`media--${index}`}>{media}</div>
      <div className="italic text-sm overflow-auto">{current.alt}</div>
      <div className="text-xs">
        <button onClick={() => back()} title="Never back">
          <FontAwesome className="fa-solid fa-backward text-gray-600" />
        </button>
        &nbsp; &mdash; &nbsp;
        <button onClick={() => next()} title="Always forward">
          <FontAwesome className="fa-solid fa-forward text-gray-600" />
        </button>
      </div>
    </div>
  );
}
