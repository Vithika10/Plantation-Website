"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "live.smtp.mailtrap.io",
  port: 587,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "api",
    pass: "40285cfd30a871785eea709599ab5cab",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: req.body.email,
        to: 'vithikavshrouty@gmail.com',
        subject: `Message from ${req.body.email} : ${req.body.subject}`, // Use backticks for template literals
        text: req.body.message,
  });

  console.log("Message sent: %s", info.messageId);
}
const EventEmitter = require('events');
const { info } = require('console');

const myEmitter = new EventEmitter();

myEmitter.on('error', (err) => {
  console.error('Oops! There was an error:');
  console.error(err);
});

async function main(){
await notifyadmin()
}
