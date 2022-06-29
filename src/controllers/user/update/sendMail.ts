import User from "../../../models/user.model";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

const sendMail: Controller = async (req, res, next) => {
  try {
    const { email } = req.body;
    const FRONTEND = "https://www.google.com";
    const user = await User.findOne({email});
    const link = `${FRONTEND}/${user?._id}`;
    var userEmail = "img_2019047@iiitm.ac.in";
    var userPassword = "ipgmba047";

    var transporter = nodemailer.createTransport(
      `smtps://${userEmail}:${userPassword}@smtp.gmail.com`
    );

    // setup e-mail data with unicode symbols
    var mailOptions = {
      from: userEmail, // sender address
      to: email, // list of receivers
      subject: "Demo-1", // Subject line
      text: "Click on the given link to verify your email", // plaintext body
      html: "<b>Hello world from Node.js</b>", // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: " + info.response);
    });

    // const { password } = req.body;
    // const hash = await bcrypt.hash(password, 10);
    // const updatedPassword = await User.findOneAndUpdate(
    //   { email },
    //   { password: hash },
    //   { new: true }
    // );
    // console.log(updatedPassword);
    return res.status(200).json({
      message: "mail sent successfully",
    });
  } catch (err) {
    next(err);
    return;
  }
};

export default sendMail;
