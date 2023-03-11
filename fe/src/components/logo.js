"use client";

import { React, useState } from "react";

import animate from "@huth/animate";

import config from "@/lib/config";

export default function Logo(props) {
  const yellow = config.colors.yellow;
  const fireweed = config.colors.fireweed;
  const green_turquoise = config.colors.green_turquoise;
  const blue_turquoise = config.colors.blue_turquoise;

  const [colors, setColors] = useState([
    yellow,
    green_turquoise,
    fireweed,
    blue_turquoise,
  ]);
  const [color, setColor] = useState(colors[0]);
  const [animating, setAnimating] = useState(false);

  if (!animating) {
    setAnimating(true);

    const from = colors[0];
    const to = colors[1];
    const duration = 8000;
    const delay = 2000;

    let stopAnimating;

    const animateParams = {
      from,
      to,
      duration,
      delay,
      render: (value) => {
        //console.log({ color: value });
        setColor(value);
      },
      start: () => {
        setAnimating(true);
        //console.log("started animating...");
        //setAnimating(true);
      },
      end: () => {
        //console.log("ended animating...");
        setColors([colors[1], colors[2], colors[0]]);
        setAnimating(false);
        //stopAnimating();
      },
      cancel: () => {
        //console.log("canceled animating...");
        setAnimating(false);
        //stopAnimating();
      },
    };

    try {
      stopAnimating = animate(animateParams);
    } catch (e) {
      setTimeout(() => {
        if (!(e instanceof ReferenceError)) {
          // ReferenceError: requestAnimationFrame is not defined
          throw e;
        }
        setAnimating(false); // trigger re-try/render
      }, 420);
    }
  }

  return (
    <svg
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 332.555 288"
      style={{ enableBackground: "new 0 0 332.555 288", minHeight: "150px" }}
      //className="h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-22"
      //className="h-auto align-middle border-none absolute"
      className="h-auto align-middle -mt-16"
    >
      <g>
        <g>
          <polygon
            style={{ fill: "#000000" }}
            points="59.978,237.755 81.271,237.755 81.271,263.689 93.78,263.689 93.78,237.755 114.978,237.755 114.978,227.206 
			59.978,227.206 		"
          />
          <polygon
            style={{ fill: "#000000" }}
            points="272.577,237.803 272.577,227.206 217.353,227.206 217.353,263.689 229.863,263.689 229.863,254.401 
			263.595,254.401 263.595,244.331 229.863,244.331 229.863,237.803 		"
          />
        </g>
        <path
          style={{ fill: "#000000" }}
          d="M166.278,0L0,288h332.555L166.278,0z M166.278,27.279L308.93,274.362H23.625L166.278,27.279z"
        />
        <ellipse
          style={{ fill: color }}
          transform="matrix(0.0985 -0.9951 0.9951 0.0985 65.4523 278.5571)"
          cx="186.477"
          cy="103.152"
          rx="12.697"
          ry="12.697"
        />
        <g>
          <path
            style={{ fill: "#000000" }}
            d="M203.963,124.675l-13.001,22.518v0l-11.324-19.614l-28.301,49.018l-11.03-19.105l28.3-49.018l-15.33-26.553
			L77.963,212.368h62.8l-24.681-42.75h15.751l24.681,42.75h-15.75l0.024,0.042l26.494,45.89c5.25,0,10.5,0,15.75,0l-26.519-45.932
			h56.562l-24.706-42.792h15.75l24.706,42.792h25.766l0,0L203.963,124.675z"
          />
        </g>
      </g>
    </svg>
  );
}
