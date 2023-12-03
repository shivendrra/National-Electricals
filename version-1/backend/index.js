const express = require('express');
const cors = require('cors');
const fs = require('fs');
const ejs = require('ejs');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post("/form", (req, res) => {
  const data = JSON.stringify(req.body);
  const jsonData = data;

  // Function to send the email
  async function sendEmail() {
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: "YOUR EMAIL",
          pass: "PASSWORD",
        },
      });

      const emailContent = await ejs.renderFile('email_template.ejs', { data: jsonData });

      const mailOptions = {
        from: 'nationalelectricalsgkp@gmail.com',
        to: 'shivharsh44@gmail.com',
        subject: 'Product/Service Requirement',
        html: emailContent,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
      res.send('Email sent successfully');
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Error sending email');
    }
  }
  sendEmail();

  // Write the JSON data into the file
  fs.writeFile('data.json', data, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error writing data to file');
    } else {
      console.log('Data saved to file');
      res.send('Data saved successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
