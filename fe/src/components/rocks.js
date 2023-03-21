"use client";

import { React, useState, useEffect, useMemo } from "react";

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

export default function Rocks(props) {
  const height = props.height || "66";

  const rocks = useMemo(() => {
    return [
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
  }, []);

  const [state, setState] = useState({
    ms: 42,
    min: 0.0,
    max: 1.0,
    opacity: 1.0,
    delta: -0.01,
    index: 0,
    rock: rocks[0],
  });

  const [rock, setRock] = useState(rocks[0]);
  const [opacity, setOpacity] = useState(1.0);

  useEffect(() => {
    //logger.debug("useEffect()");

    let id;

    const precise = (n) => {
      return (
        Math.round(Math.max(Math.min(n, state.max), state.min) * 100) / 100
      );
    };

    const random = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const animate = () => {
      state.opacity = precise(state.opacity + state.delta);

      if (state.opacity <= state.min) {
        state.delta = -state.delta;
        state.index = (state.index + 1) % rocks.length;
        state.rock = rocks[state.index];
        state.ms = random(11, 42);
      }

      if (state.opacity >= state.max) {
        state.delta = -state.delta;
      }

      //logger.debug(state);

      setRock(state.rock);
      setOpacity(state.opacity);
      setState(state);

      id = setTimeout(() => {
        animate();
      }, state.ms);
    };

    animate();

    return () => {
      clearTimeout(id);
    };
  }, [rocks, state]);

  return (
    <div className={`flex flex-wrap justify-center`}>
      <Image
        priority={true}
        alt={""}
        height={height}
        src={rock}
        style={{ opacity }}
      />
    </div>
  );
}
