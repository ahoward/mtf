import React from "react";

import mailto from "mailto-link";

import Link from "next/link";

import Rocks from "@/components/rocks";
import Emoji from "@/lib/emoji";

import FontAwesome from "@/components/font_awesome";

export default function Footer(props) {
  return (
    <div className="text-center justify-center text-sm text-gray-400">
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-200"></hr>

      <div>
        <Link
          className="text-pink-600"
          href={mailto({
            to: "mtf@mtf-trek.com",
            subject: "Nice mailto lib",
          })}
        >
          mtf@mtf-trek.com
        </Link>
      </div>

      <div>
        <Rocks />
      </div>

      <div
        className="py-1"
        style={{ color: "gray", filter: "grayscale(100%)" }}
      >
        {Emoji.list.join(" + ")}
      </div>
      <div className="py-1 text-xs">© 2023-2420, MTF-TREK, LLC.</div>
    </div>
  );
}
