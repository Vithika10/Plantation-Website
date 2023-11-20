"use strict";
const nodemailer = require("nodemailer");

async function notifyadmin(){

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:'vithikavshrouty@gmail.com',
    pass:'vithika@123',

  }
});

// Set up email options
const mailOptions = {
  from: req.body.email,
  to: 'vithikavshrouty@gmail.com',
  subject: `Message from ${req.body.email} : ${req.body.subject}`, // Use backticks for template literals
  text: req.body.message,
};


// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}

async function main(){
await notifyadmin()
}
