// Import required modules
require("dotenv").config();

const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const multer = require('multer');

// Initialize express application
const app = express();

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Middleware to enable CORS (for development, you might want to restrict this to your client's domain)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


// POST route to handle form submission and send email
app.post("/api/query-form", (req, res) => {
  const { username, email, phone, service, city, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail", // Update with your email service provider
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const htmlContent = `
    <h2>Request from Client</h2>
    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <td><strong>Name:</strong></td>
        <td>${username}</td>
      </tr>
      <tr>
        <td><strong>Email:</strong></td>
        <td>${email}</td>
      </tr>
      <tr>
        <td><strong>Phone:</strong></td>
        <td>${phone}</td>
      </tr>
      <tr>
        <td><strong>Service:</strong></td>
        <td>${service}</td>
      </tr>
      <tr>
        <td><strong>Enquiry:</strong></td>
        <td>${message}</td>
      </tr>
      <tr>
        <td><strong>City:</strong></td>
        <td>${city}</td>
      </tr>
    </table>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Change to your desired recipient email
    subject: "Enquiry Quote",
    html: htmlContent,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});


  // Multer setup for file upload
  // const upload = multer();

// POST Career Enquiry route to handle form submission and send email
app.post("/api/career-form", (req, res) => {
  console.log(req.body);

  // const transporter = nodemailer.createTransport({
  //   service: "Gmail", // Update with your email service provider
  //   auth: {
  //     user: process.env.EMAIL_USER,
  //     pass: process.env.EMAIL_PASS,
  //   },
  // });

  // const htmlContent = `
  //   <h2>Career Enquiry</h2>
  //   <table border="1" cellpadding="5" cellspacing="0">
  //     <tr>
  //       <td><strong>Name:</strong></td>
  //       <td>${username}</td>
  //     </tr>
  //     <tr>
  //       <td><strong>Email:</strong></td>
  //       <td>${email}</td>
  //     </tr>
  //     <tr>
  //       <td><strong>Phone:</strong></td>
  //       <td>${phone}</td>
  //     </tr>
  //     <tr>
  //       <td><strong>Prefession:</strong></td>
  //       <td>${prefession}</td>
  //     </tr>
  //     <tr>
  //       <td><strong>Enquiry:</strong></td>
  //       <td>${message}</td>
  //     </tr>
  //   </table>
  // `;

  // const mailOptions = {
  //   from: process.env.EMAIL_USER,
  //   to: process.env.EMAIL_USER, 
  //   subject: "Career Enquiry Quote",
  //   html: htmlContent,
  //   attachments: [
  //     {
  //       filename: resumeFile.originalname,
  //       content: resumeFile.buffer
  //     }
  //   ]
  // };

  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.error(error);
  //     res.status(500).send("Error sending email");
  //   } else {
  //     console.log("Email sent: " + info.response);
  //     res.status(200).send("Email sent successfully");
  //   }
  // });
});













































































































// Catch-all route to serve React's index.html for any other route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
