//import { remark } from "remark";
//import html from "remark-html";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import stringWidth from "string-width";

import config from "@/lib/config";

const imgLinks = require("@pondorasti/remark-img-links");

export default async function Markdown(props) {
  const markdown = props.markdown || props.copy || "# no markdown!";

  const absolutePath = config.env.NEXT_PUBLIC_BE_URL;

  //const remarked = await remark()
  //.use(html)
  //.use(imgLinks, { absolutePath })
  //.process(markdown);

  const result = await unified()
    .use(remarkParse)
    .use(imgLinks, { absolutePath })
    .use(remarkGfm, { singleTilde: false, stringLength: stringWidth })
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);

  const __html = String(result);

  // https://redpixelthemes.com/blog/tailwindcss-typography-plugin/
  const className = [
    "text-justify",
    "w-full",
    "max-w-none",
    "prose",
    //"lg-prose-xl",
    "prose-a:text-pink-600 hover:prose-a:text-pink-800",
    //"prose-img:w-auto",
    "prose-img:w-full",
    //"prose-img:w-full prose-img:w-auto",
    //"prose-li:text-gray-600 prose-ul:list-inside prose-ol:list-inside prose-li:marker:text-pink-600",
    "prose-ul:list-inside prose-ol:list-inside prose-li:marker:text-pink-600",
  ].join(" ");

  return <article className={className} dangerouslySetInnerHTML={{ __html }} />;
}
