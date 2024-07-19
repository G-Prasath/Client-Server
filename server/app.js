// Import required modules
require("dotenv").config();

const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const multer = require('multer');
const fs = require('fs');
const cors = require('cors');

// Initialize express application
const app = express();

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable CORS
app.use(cors());


// START OF QUERY FORM SENDING CODE
app.post("/api/query-form", (req, res) => {
  const { username, email, phone, service, city, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
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
    to: process.env.EMAIL_USER, 
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
// END OF QUERY FORM SENDING CODE


// Multer COnfig
const storage = multer.diskStorage({
  destination: function(req, res, cb){
    return cb(null, './uploads')
  },
  filename: function(req, file, cb){
    return cb(null, `${Date.now()}_${file.originalname}`)
  }
});

const upload = multer({storage});

// Function to clear folder contents
const clearFolder = (folderPath) => {
    fs.readdir(folderPath, (err, files) => {
        if (err) throw err;
        
        for (const file of files) {
            fs.unlink(path.join(folderPath, file), err => {
                if (err) throw err;
            });
        }
    });
};

// START OF CAREER FORM SENDING CODE
app.post("/api/career-form", upload.single("pdf"), (req, res) => {
  const { name, email, phone, profession, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
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
        <td>${name}</td>
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
        <td><strong>Profession:</strong></td>
        <td>${profession}</td>
      </tr>
      <tr>
        <td><strong>Message:</strong></td>
        <td>${message}</td>
      </tr> 
     
    </table>
  `;

// Define mail options including attachments
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  subject: 'Career Enquiry',
  html: htmlContent,
  attachments: [
      {
          filename: req.file.filename, // Name of the attached file
          path: `./uploads/${req.file.filename}`, // Path to the file
          contentType: 'application/pdf', // Optional MIME type
      },
  ],
};


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send("Error sending email");
    } else {
      // Clear the folder contents
      clearFolder("./uploads");
      res.status(200).send("Email sent successfully");
    }
  });



});
// END OF CAREER FORM SENDING CODE






// Catch-all route to serve React's index.html for any other route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
