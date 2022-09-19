const express = require("express");
const nodemailer = require("nodemailer");
const sengridTransport = require("nodemailer-sendgrid-transport");

const constants = require("./constants");

const app = express();

const transporter = nodemailer.createTransport(
  sengridTransport({
    auth: {
      api_key: constants.API_KEY,
    },
  })
);

app.get("/", (req, res, nex) => {
  transporter.sendMail({
    to: constants.TO,
    from: constants.FROM,
    subject: "Test Email",
    html: "<h4>Test Email</h4>",
  });
  res.status(200).json({ message: "Ok" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
