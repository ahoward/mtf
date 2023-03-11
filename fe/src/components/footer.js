import React from "react";

import Link from "next/link";

import Rocks from "@/components/rocks";
import Emoji from "@/lib/emoji";

import FontAwesome from "@/components/font_awesome";

export default function Footer(props) {
  return (
    <div className="text-center justify-center">
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-200"></hr>
      <Rocks />
      <Link href="mailto:ara@mtf-trek.com" style={{ display: "none" }}>
        <FontAwesome className="fa-solid fa-jedi mr-2" />
        contact us
      </Link>
    </div>
  );
}
