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

app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "api",
            pass: "40285cfd30a871785eea709599ab5cab",
        },
    });

    const mailOptions = {
        from: req.body.email,
        to: 'vithikavshrouty@gmail.com',
        subject: `Message from ${req.body.email} : ${req.body.subject}`,
        text: req.body.message,
    };

    console.log('Sending email...');

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:');
            console.error(error);
            res.send('error');
        } else {
            console.log('Email sent successfully!');
            console.log('Response:', info.response);
            res.send('Success');
        }
    });
});

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})



// const net = require('net');

// const socket = net.createConnection({
//   host: 'live.smtp.mailtrap.io',
//   port: 587 ,
//   timeout: 20000, 
// });

// socket.on('connect', () => {
//   console.log('Connected successfully!');
// });

// socket.on('error', (err) => {
//   console.error('Error:', err.message);
// });

