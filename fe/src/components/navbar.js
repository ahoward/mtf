"use client";

import React from "react";

import FontAwesome from "@/components/font_awesome";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav
        className={
          (props.transparent
            ? "top-0 absolute z-50 w-full"
            : "relative shadow-lg bg-white shadow-lg") +
          " flex flex-wrap items-center justify-between px-2 py-3 "
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              }
              href="/"
            >
              Matanuska Fröntier Trek
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
                className={
                  (props.transparent ? "text-white" : "text-gray-800") +
                  " fas fa-bars"
                }
              ></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
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
                  href: "/book-it",
                  icon: "fa-solid fa-dragon",
                  label: "Book it!",
                },
              ].map((link) => (
                <li key={JSON.stringify(link)} className="flex items-center">
                  <a
                    className={
                      (props.transparent
                        ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                        : "text-gray-800 hover:text-gray-600") +
                      " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    }
                    href={link.href}
                  >
                    <FontAwesome
                      className={
                        (props.transparent
                          ? "lg:text-gray-300 text-gray-500"
                          : "text-gray-500") +
                        ` ${link.icon} text-xl leading-lg mr-2`
                      }
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/*
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="/team"
                  title="-> Team"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fa-solid fa-people-group text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Team</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="/book"
                  title="-> Book It!"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fa-solid fa-calendar-check text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Book It!</span>
                </a>
              </li>
            </ul>
            */}
          </div>
        </div>
      </nav>
    </>
  );
}
