"use client";

import { useForm } from "react-hook-form";

import util from "@/lib/util";

export default function ContactForm(props) {
  const { register, handleSubmit, reset } = useForm();

  let name = props.name;
  let email = props.email;
  let message = props.message;

  let anonymous = !!props.anonymous;

  if (anonymous) {
    name = "ANONYMOUS";
    email = "no-reply@mtf-trek.com";
  }

  const onSubmit = function (params = {}) {
    const form = {
      name: util.get(params, "name"),
      email: util.get(params, "email"),
      message: util.get(params, "message"),
    };

    const type = props.type || "Contact";

    const subject =
      props.subject || `[MTF -- ${type}] (${form.name} / ${form.email})`;

    const from = form.email;
    const message = form.message;

    const data = {
      from,
      subject,
      message,
    };

    //console.dir(data);

    fetch("/api/email", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (anonymous) {
      alert(`Got it - Thanks for you feedback!`);
    } else {
      alert(
        `Got it '${form.name}'\nWe'll get back you you __ASAP__ at\n\t ${form.email}\nHope you typed that ^email^ right 😂!?`
      );
    }

    reset();

    //console.log(params);
  };

  const subject = props.subject;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="dark:text-gray-100">
      <fieldset
        className="flex mb-4"
        style={{ display: anonymous ? "none" : "block" }}
      >
        <input
          placeholder="Your name..."
          {...register("name", { required: true })}
          className="w-full p-2"
          value={name}
        />
      </fieldset>
      <fieldset
        className="flex mb-4"
        style={{ display: anonymous ? "none" : "block" }}
      >
        <input
          placeholder="Your email..."
          {...register("email", {
            required: true,
            //pattern: /^[^@\s]+@[^@\s]+$/i,
          })}
          className="w-full p-2"
          value={email}
        />
      </fieldset>
      <fieldset className="flex mb-4">
        <textarea
          placeholder="Say anything! ;-)"
          {...register("message", {
            required: true,
          })}
          className="w-full p-2"
          rows={11}
          value={message}
        />
      </fieldset>
      <br></br>
      <button
        type="submit"
        className="bg-pink-400 uppercase text-white font-bold hover:shadow-md shadow p-1 rounded outline-none focus:outline-none mb-4"
      >
        Send it!
      </button>
    </form>
  );
}
