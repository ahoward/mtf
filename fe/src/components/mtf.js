"use client";

import { React, useState } from "react";

import animate from "@huth/animate";

import config from "@/lib/config";

export default function MTF(props) {
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

    console.log(colors.join(", "));

    const from = colors[0];
    const to = colors[1];
    const duration = 8000;
    const delay = 2000;

    const stopAnimating = animate({
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
        console.log("started animating...");
        //setAnimating(true);
      },
      end: () => {
        console.log("ended animating...");
        setColors([colors[1], colors[2], colors[0]]);
        setAnimating(false);
        //stopAnimating();
      },
      cancel: () => {
        console.log("canceled animating...");
        setAnimating(false);
        //stopAnimating();
      },
    });
  }

  return (
    <svg
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 288 288"
      style={{ enableBackground: "new 0 0 288 288", minHeight: "150px" }}
      className="h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
    >
      <g>
        <path
          d="M256.565,281.942H31.435c-14.015,0-25.377-11.362-25.377-25.377V31.435c0-14.015,11.362-25.377,25.377-25.377h225.13
        c14.015,0,25.377,11.362,25.377,25.377v225.13C281.942,270.58,270.58,281.942,256.565,281.942z"
        />
        <g>
          <g>
            <g>
              <g>
                <path
                  style={{ fill: color }}
                  d="M255.801,0H32.199C14.444,0,0,14.444,0,32.199v223.603C0,273.556,14.444,288,32.199,288h223.603
                C273.556,288,288,273.556,288,255.801V32.199C288,14.444,273.556,0,255.801,0z M65.975,113.902l13.923-10.208l40.732,49.978
                l-21.185-4.865L65.975,113.902z M80.071,144.358l-42.366-9.729l19.399-14.224L80.071,144.358z M85.211,92.952
                c5.85-2.574,11.373-5.916,16.382-9.985l32.672-24.448l-36.219,50.182L85.211,92.952z M105.178,117.452l28.516-39.509
                l17.469,22.137l-30.517,36.35L105.178,117.452z M277.188,125.2l-44.059-34.906l11.278-1.882
                c3.923-0.654,24.796-3.578,32.781-4.692V125.2z M266.461,130.613l-34.65,9.933l-40.73-69.652L266.461,130.613z
                M220.992,143.648l-17.581,5.04l-63.081-79.94l17.478-24.216l9.738,7.715L220.992,143.648z M158.061,108.823l34.021,43.113
                l-35.141,10.074l-19.005-4.364l-10.277-12.61L158.061,108.823z M277.059,138.92v50.773l-98.146-22.638L277.059,138.92z
                M10.812,32.199c0-7.382,3.74-13.891,9.429-17.734c3.413-2.306,7.528-3.653,11.958-3.653h223.601
                c11.813,0,21.389,9.576,21.389,21.389v40.508c-6.486,0.904-30.182,4.214-34.575,4.948l-21.011,3.506l-65.963-52.259
                l-22.145,16.571L94.97,74.303l-0.178,0.14c-10.864,8.856-24.567,13.734-38.583,13.734H41.156l-30.344,13.471V32.199z
                M10.812,113.579l32.656-14.498h12.741c4.462,0,8.894-0.434,13.244-1.252L23.66,131.405l-12.848-2.95V113.579z M10.695,139.617
                L230.1,189.999H10.695V139.617z M255.761,277.188H32.201c-11.813,0-21.389-9.576-21.389-21.389v-54.896h266.247l0.091,54.861
                C277.169,267.59,267.588,277.188,255.761,277.188z"
                />
              </g>
            </g>
          </g>
          <g>
            <path
              style={{ fill: color }}
              d="M111.723,217.06v41.656H99.999l-0.178-33.384l-22.018,33.384H62.331l-22.257-33.563v33.563H28.828V217.06
            H47.93l22.375,34.634l22.256-34.634H111.723z"
            />
            <path
              style={{ fill: color }}
              d="M186.022,226.463h-26.363v32.253h-11.841v-32.253h-26.481v-9.403h64.686V226.463z"
            />
            <path
              style={{ fill: color }}
              d="M250.003,236.498v8.807H208.05v13.41h-11.841V217.06h64.964v9.462H208.05v9.977H250.003z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
