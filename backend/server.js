import express from 'express'
import nodemailer from 'nodemailer'
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'
import 'dotenv/config'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../build')));
console.log(__dirname);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'))
})
app.post('/send-email', (req, res) => {
  const { name, email,number,message } = req.body;
  console.log('nam', name, email);
  const pdfPath = path.join(__dirname, '../src/Assets/GUJARAT PANEL broucher.pdf');

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: 'Gujarat panel',
    text:'Welcome to Gujarat Panel',
    attachments: [
      {
        filename: 'GUJARAT PANEL broucher.pdf',
        path: pdfPath,
        contentType: 'application/pdf',
      },
    ],
    text: `Thank you.`,

  }
  const mailOptions2 = {
    from: email,
    to: process.env.SMTP_MAIL,
    subject: `Email received on ${email}`,
    html: `<b>Email from ${email}</br>
    I received email successfully.</br>
    Contact No: ${number}</br>
    Requirements:${message}
    </b>`,

  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error);
    }
    transporter.sendMail(mailOptions2, (error, info) => {
      if (error) {
        return res.status(500).send(error);
      }
      res.status(200).send('Email sent: ' + info.response);
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
