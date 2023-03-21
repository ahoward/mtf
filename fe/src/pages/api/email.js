// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from "nodemailer";
import util from "@/lib/util";
import config from "@/lib/config";

const sendmail = async function (params) {
  const transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    //secure: true,
    secure: false,
    auth: {
      user: util.get(config.env, "EMAIL_USERNAME"),
      pass: util.get(config.env, "EMAIL_PASSWORD"),
    },
  });

  const info = await transporter.sendMail({
    to: "mtf@mtf-trek.com",
    from: params.from,
    subject: params.subject,
    text: params.message,
  });

  util.log("info", "EMAIL-SENT: %s", info.messageId);

  return { succes: true };
};

export default async function handler(req, res) {
  const body = util.get(req, "body");

  const from = util.get(body, "from");
  const subject = util.get(body, "subject");
  const message = util.get(body, "message");

  const params = {
    from,
    subject,
    message,
  };

  const result = await sendmail(params);

  res.status(200).json(result);
}
