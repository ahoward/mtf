"use client";

import { React, useState } from "react";
import { CldImage } from "next-cloudinary";
import FontAwesome from "@/components/font_awesome";

export default function Carousel(props) {
  const [index, setIndex] = useState(0);

  const list = props.list || props.media || [];

  if (list.length == 0) return <></>;

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
