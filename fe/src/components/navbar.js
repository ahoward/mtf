"use client";

import React from "react";
import Link from "next/link";

import FontAwesome from "@/components/font_awesome";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const whack = "/";

  const active = props.active || whack;

  let theme;

  switch (String(props.theme).trim().toLowerCase()) {
    case "light":
      theme = {
        type: "light",
        color: "text-white",
        iconColor: "text-gray-300",
        backgroundColor: "bg-black",
        pink: "text-pink-500",
      };
      break;
    case "dark":
      theme = {
        type: "dark",
        color: "text-black",
        iconColor: "text-gray-900",
        backgroundColor: "bg-white",
        pink: "text-pink-500",
      };
      break;
    default:
      throw new Error(`bad theme=${theme}`);
  }

  return (
    <>
      <nav
        className={
          "top-0 absolute z-50 w-full" +
          " " +
          "lex flex-wrap items-center justify-between px-2 py-3 " +
          " " +
          (navbarOpen ? theme.backgroundColor : "")
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className={
                theme.color +
                " " +
                (active == whack ? "underline" : "no-underline") +
                " " +
                "font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              }
              href={whack}
            >
              Matanuska Fröntier Trek
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className={theme.color + " fas fa-bars"}></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              " " +
              (navbarOpen ? "block" : "hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              {[
                {
                  href: "/route",
                  icon: "fa-solid fa-map-location-dot",
                  label: "Route",
                },
                {
                  href: "/team",
                  icon: "fa-solid fa-face-kiss-wink-heart",
                  label: "Team",
                },
                {
                  href: "/lets-go",
                  icon: "fa-solid fa-dragon",
                  label: "Let's Go!",
                  iconColor: theme.pink,
                },
              ].map((link) => (
                <li key={JSON.stringify(link)} className="flex items-center">
                  <Link
                    className={
                      theme.color +
                      " " +
                      (active == link.href ? "underline" : "no-underline") +
                      " " +
                      "leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                    }
                    href={link.href}
                  >
                    <FontAwesome
                      className={
                        (link.iconColor || theme.iconColor) +
                        " " +
                        `${link.icon} text-xl leading-lg mr-2`
                      }
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
