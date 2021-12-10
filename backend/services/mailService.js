var nodemailer = require("nodemailer");

let sendMail = async function (mail) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    pool: true,
    auth: {
      user: "mehdybenromdhane.test@gmail.com",
      pass: process.env.PASSWORD,
    },
  });

  let from = `Support TODO APP <mehdybenromdhane.test@gmail.com>`;
  var mailOptions = {
    from: from,
    to: mail,
    subject: "Bienvenu dans TODO APP ",
    text: "N'oubliez pas vos tâches",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = { sendMail };
