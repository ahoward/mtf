"use client";

import { React, useState } from "react";

import Image from "next/image";

import RockImg0 from "@/../public/rocks/0.png";
import RockImg1 from "@/../public/rocks/1.png";
import RockImg2 from "@/../public/rocks/2.png";
import RockImg3 from "@/../public/rocks/3.png";
import RockImg4 from "@/../public/rocks/4.png";
import RockImg5 from "@/../public/rocks/5.png";
import RockImg6 from "@/../public/rocks/6.png";
import RockImg7 from "@/../public/rocks/7.png";
import RockImg8 from "@/../public/rocks/8.png";
import RockImg9 from "@/../public/rocks/9.png";
import RockImg10 from "@/../public/rocks/10.png";
import RockImg11 from "@/../public/rocks/11.png";
import RockImg12 from "@/../public/rocks/12.png";
import RockImg13 from "@/../public/rocks/13.png";
import RockImg14 from "@/../public/rocks/14.png";
import RockImg15 from "@/../public/rocks/15.png";
import RockImg16 from "@/../public/rocks/16.png";

import Util from "@/lib/util";

export default function Rocks(props) {
  //  const list = Util.get(props, "list");
  const list = [
    RockImg0,
    RockImg1,
    RockImg2,
    RockImg3,
    RockImg4,
    RockImg5,
    RockImg6,
    RockImg7,
    RockImg8,
    RockImg9,
    RockImg10,
    RockImg11,
    RockImg12,
    RockImg13,
    RockImg14,
    RockImg15,
    RockImg16,
  ];

  const [rocks, setRocks] = useState(list);
  const [rock, setRock] = useState(rocks[0]);
  const [animating, setAnimating] = useState(false);
  const [opacity, setOpacity] = useState(100);

  if (!animating) {
    setAnimating(true);

    let opts = {
      min: 2,
      max: 100,
      inc: -1,
      speed: 100,
      value: 100,
      index: 0,
      size: rocks.length,
      rock: rocks[0],
    };

    const callback = () => {
      //console.dir({ before: opts });

      opts.value = opts.value + opts.inc;

      if (opts.value == opts.min) {
        opts.inc = -opts.inc;
        opts.index = (opts.index + 1) % opts.size;
      }

      if (opts.value == opts.max) {
        opts.inc = -opts.inc;
      }

      opts.rock = rocks[opts.index];
      setOpacity(opts.value / 100);
      setRock(opts.rock);

      //console.dir({ after: opts });
    };

    setInterval(callback, opts.speed);
  }

  const height = 66;

  return (
    <div className={`flex flex-wrap justify-center h-${height} mb-4 mt-4`}>
      <Image alt={""} height={height} src={rock} style={{ opacity }} />
    </div>
  );
}
