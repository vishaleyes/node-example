var nodemailer = require('nodemailer');
var xl = require('excel4node');
var EmailService = require("./services/email.service");

let result = EmailService.sendEmail();
console.log("result", result);

// var transporter = nodemailer.createTransport({
//   service: 'smtp',
//   host: 'smtp.sendgrid.net',
//   port: '587',
//   auth: {
//             user: "apikey",
//             pass: ""
//         }
// });

// var mailOptions = {
//   from: 'info.freesmtpservers.com',
//   to: 'VP00801984@yopmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });