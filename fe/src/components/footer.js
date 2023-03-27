import React from "react";

import Link from "next/link";

import Config from "@/lib/config";
import Rocks from "@/components/rocks";
import Emoji from "@/lib/emoji";

//import FontAwesome from "@/components/font_awesome";

export default function Footer(props) {
  return (
    <div className="text-center justify-center text-sm text-gray-400">
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-200"></hr>

      <div>
        <Link
          className="bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs p-1 rounded outline-none focus:outline-none mb-4"
          href={"/contact"}
        >
          KON·TACT[[ mtf@mtf-trek.com ]]
        </Link>
      </div>

      <div style={{ height: 66, margin: 8 }}>
        <Rocks />
      </div>

      <div
        className="py-1"
        style={{ color: "gray", filter: "grayscale(100%)" }}
      >
        {Emoji.list.join(" + ")}
      </div>
      <div className="py-1 text-xs text-cyan-400">
        © 2023-2420, MTF-TREK, LLC.
      </div>
      <Link href={"/music"} title="Drink me!">
        <span style={{ color: Config.colors.fireweed }}> {Emoji.music} </span>
      </Link>
    </div>
  );
}
