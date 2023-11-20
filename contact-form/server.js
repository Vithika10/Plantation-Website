const express=require('express');
const app=express();

const nodemailer=require("nodemailer");

const PORT =process.env.PORT || 5000;

//middleware
app.use(express.static('public'));
app.use(express.json())

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/contact-page.html')
})

app.post('/',(req,res)=>{
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vithikavshrouty@gmail.com', 
            pass: 'vithika@123',
        },
    });
    

    const mailOptions = {
        from: req.body.email,
        to: 'vithikavshrouty@gmail.com',
        subject: `Message from ${req.body.email} : ${req.body.subject}`, // Use backticks for template literals
        text: req.body.message,
    };
    
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }
        else{
            console.log('Email sent : ' + info.response);
            res.send('Success')
        }
    })
})

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})

const EventEmitter = require('events');
const { info } = require('console');

const myEmitter = new EventEmitter();

myEmitter.on('error', (err) => {
  console.error('Oops! There was an error:');
  console.error(err);
});

const net = require('net');

const socket = net.createConnection({
  host: 'imap.gmail.com',
  port: 993  ,
  timeout: 20000, 
});

socket.on('connect', () => {
  console.log('Connected successfully!');
});

socket.on('error', (err) => {
  console.error('Error:', err.message);
});

