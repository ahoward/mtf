//import Image from "next/image";
//import styles from "./page.module.css";
// https://actionauta.com/notes/integrating-tailwind-css-modules-sass-stylelint-nextjs

import api from "@/lib/api";
import util from "@/lib/util";

import FontAwesome from "@/components/font_awesome";
import MTF from "@/components/mtf";
import Navbar from "@/components/navbar";

function hero_for(data) {
  const hero = {
    key: "attributes.hero.image.data.attributes.url",
  };
  hero.value = util.get(data, hero.key);
  hero.url = api.img_url_for(hero.value);
  return hero;
}

export default async function Home() {
  const result = await api.fetch("/home-page", {
    populate: ["hero", "hero.image"],
  });
  //if (!result.ok) throw new Error("no data");
  const data = result.json.data;

  const hero = hero_for(data);

  return (
    <>
      <Navbar transparent />
    </>
  );
}
